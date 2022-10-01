import axios from "axios";
import { useRouter } from "next/router";

export const signIn = async (formData) => {
    const url = "https://edd-myfont-backend.herokuapp.com";
    const initialErrorStatus = {
        passwordIncorrect: false,
        mailAddressValueError: false,
    };
    try {
        const router = useRouter()
        const response = await axios.post(url + "/api/v1/users/signin", {
            email: formData.mailAddress,
            password: formData.password,
        });
        console.log(response.statusText);
        console.log(response);
        document.cookie = "accessToken=" + response.data.jwt;

        router.push("/");
    } catch (error) {
        console.log(error.response);
        let responseErrorStatus = Object.assign({}, initialErrorStatus);
        if (error.response.status == 422) {
            responseErrorStatus.mailAddressValueError = true;
        } else if (error.response.status == 400) {
            responseErrorStatus.passwordIncorrect = true;
        }
        return responseErrorStatus
    }
};
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const initialErrorState = {
    name: false,
    mailAddress: false,
    password: false,
    confirmPassword: false,
};
export default function Signup() {
    const initialSignUpErrorStatus = {
        name: false,
        mailAddressInUse: false,
        mailAddressValueError: false,
    };
    const [errorStatus, setErrorStatus] = useState(initialSignUpErrorStatus);
    const router = useRouter();
    const url = "https://myfont.ottotto.tech";
    type signUpCheckElement = {
        name: string;
        mailAddress: string;
        password: string;
        confirmPassword: string;
    };
    const [formErrors, setFormErrors] = useState(initialErrorState);
    const [formData, setFormData] = useState<signUpCheckElement>({
        name: "",
        mailAddress: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const signUp = async () => {
        try {
            const response = await axios.post(url + "/api/v1/users/signup", {
                name: formData.name,
                email: formData.mailAddress,
                password: formData.password,
            });
            try {
                const response = await axios.post(
                    url + "/api/v1/users/signin",
                    {
                        email: formData.mailAddress,
                        password: formData.password,
                    }
                );
                document.cookie = "accessToken=" + response.data.jwt;
                localStorage.setItem("jwt", response.data.jwt);
                router.push("/");
            } catch (error) {
                console.log(error.response);
            }
        } catch (error) {
            console.log(error.response.status);
            let responseErrorStatus = Object.assign({}, errorStatus);
            if (error.response.status == 422) {
                responseErrorStatus.mailAddressValueError = true;
            } else if (error.response.status == 400) {
                responseErrorStatus.mailAddressInUse = true;
            }
            setErrorStatus(responseErrorStatus);
            console.log(errorStatus);
        }
    };
    const signUpCheck = (event) => {
        event.preventDefault();

        let passwordPattern =
            /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,100}$/;
        let formError = Object.assign({}, initialErrorState);
        if (formData.name === "") {
            formError.name = true;
        }
        if (!passwordPattern.test(formData.password)) {
            formError.password = true;
        }
        if (formData.password !== formData.confirmPassword) {
            formError.confirmPassword = true;
        }
        setFormErrors(formError);
        if (
            !formError.confirmPassword &&
            !formError.password &&
            !formError.name
        ) {
            signUp();
            // router.push("/");
        }
    };
    return (
        <div>
            <div className="mt-4 text-center text-3xl">??????????????????</div>
            <div className="mx-12 mt-8 rounded border-4 border-green-200 bg-green-200">
                <form onSubmit={signUpCheck}>
                    <div className="flex flex-col">
                        <div className="mx-4 mt-4 text-sm">?????????????????????</div>
                        <input
                            name="name"
                            onChange={handleChange}
                            className="mx-4 mb-2 w-64 rounded bg-white p-0.5"
                            placeholder="username"
                        ></input>
                        <div className="mx-4 mt-4 text-sm">?????????????????????</div>
                        <input
                            name="mailAddress"
                            onChange={handleChange}
                            className="mx-4 mb-2 w-64 rounded bg-white p-0.5"
                            placeholder="example@example.com"
                        ></input>
                        {errorStatus.mailAddressValueError && (
                            <div className="mx-4 mb-2 text-xs text-red-500">
                                ????????????????????????????????????
                            </div>
                        )}
                        {errorStatus.mailAddressInUse && (
                            <div className="mx-4 mb-2 text-xs text-red-500">
                                ??????????????????????????????????????????
                            </div>
                        )}

                        <div className="mx-4 mt-4 text-sm">???????????????</div>
                        <input
                            name="password"
                            type="password"
                            onChange={handleChange}
                            className="mx-4 mb-2 w-64 rounded bg-white p-0.5"
                            placeholder="password"
                        ></input>
                        {formErrors.password && (
                            <div className="mx-4 mb-2 text-xs text-red-500">
                                ??????????????????????????????????????????????????????????????????1??????????????????8????????????100???????????????????????????????????????
                            </div>
                        )}

                        <div className="mx-4 mt-4 text-sm">???????????????</div>
                        <input
                            name="confirmPassword"
                            type="password"
                            onChange={handleChange}
                            className="mx-4 mb-2 w-64 rounded bg-white p-0.5"
                            placeholder="password"
                        ></input>
                        {formErrors.confirmPassword && (
                            <div className="mx-4 mb-6 text-xs text-red-500">
                                ????????????????????????????????????
                            </div>
                        )}
                        <button type="submit"></button>
                    </div>
                    <div className="flex grid-cols-3 flex-row-reverse">
                        <button
                            type="submit"
                            className="mx-auto my-4 rounded border-2 border-blue-300 bg-blue-300 p-1 font-semibold text-white hover:border-blue-400 hover:bg-blue-400"
                        >
                            ??????????????????
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useState } from "react";
import { getLocalStrage } from "../methods/getCookies";
const initialErrorState = {
    mailAddress: false,
    password: false,
};
export default function SignIn() {
    const initialErrorStatus = {
        passwordIncorrect: false,
        mailAddressValueError: false,
    };
    const [errorStatus, setErrorStatus] = useState(initialErrorStatus);
    const router = useRouter();
    const url = "https://edd-myfont-backend.herokuapp.com";
    type signInCheckElement = {
        mailAddress: string;
        password: string;
    };
    type errorSignInCheckElement = {
        mailAddress: boolean;
        password: boolean;
    };
    const [formData, setFormData] = useState<signInCheckElement>({
        mailAddress: "",
        password: "",
    });

    const [formErrors, setFormErrors] =
        useState<errorSignInCheckElement>(initialErrorState);
    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    // useLayoutEffect(() => {
    //     if (!getLocalStrage('jwt')) {
    //         router.push("/topPage");
    //     }
    // }, []);
    const signIn = async () => {
        try {
            const response = await axios.post(url + "/api/v1/users/signin", {
                email: formData.mailAddress,
                password: formData.password,
            });
            localStorage.setItem("jwt", response.data.jwt);
            // document.cookie = "accessToken=" + response.data.jwt;
            router.push("/");
        } catch (error) {
            console.log(error.response);
            let responseErrorStatus = Object.assign({}, initialErrorStatus);
            if (error.response.status == 422) {
                responseErrorStatus.mailAddressValueError = true;
            } else if (error.response.status == 400) {
                responseErrorStatus.passwordIncorrect = true;
            }
            setErrorStatus(responseErrorStatus);
        }
    };
    const signInCheck = async (event) => {
        event.preventDefault();

        let passwordPattern =
            /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,100}$/;
        let formError = Object.assign({}, initialErrorState);
        if (!passwordPattern.test(formData.password)) {
            formError.password = true;
        }
        if (!formError.password && !formError.mailAddress) {
            signIn();
            // router.push("/");
        }
        setFormErrors(formError);
    };
    return (
        <div>
            <div className="mt-4 text-center text-3xl">サインイン</div>
            <div className="mx-12 mt-8 rounded-full border-4 border-green-300 bg-green-200 p-8">
                <form onSubmit={signInCheck}>
                    <div className="flex flex-col">
                        <div className="mx-4 mt-4 text-sm">メールアドレス</div>
                        <input
                            name="mailAddress"
                            onChange={handleChange}
                            className="mx-4 mb-2 w-64 rounded bg-white p-0.5"
                            placeholder="example@example.com"
                        ></input>
                        {errorStatus.mailAddressValueError && (
                            <div className="mx-4 mb-2 text-xs text-blue-500">
                                無効なメールアドレスです
                            </div>
                        )}

                        <div className="mx-4 mt-4 text-sm">パスワード</div>
                        <input
                            name="password"
                            type="password"
                            onChange={handleChange}
                            className="mx-4 mb-2 w-64 rounded bg-white p-0.5"
                            placeholder="password"
                        ></input>
                        {formErrors.password && (
                            <div className="mx-4 mb-2 text-xs text-red-500">
                                パスワードは半角英小文字大文字数字をそれぞれ1種類以上含む8文字以上100文字以下で作成してください
                            </div>
                        )}
                        {errorStatus.passwordIncorrect && (
                            <div className="mx-4 mb-2 text-xs text-red-500">
                                パスワードが違います
                            </div>
                        )}

                        <button type="submit"></button>
                    </div>
                    <div className="flex grid-cols-3 flex-row-reverse">
                        <button
                            type="submit"
                            className="mx-auto my-4 rounded border-2 border-blue-300 bg-blue-300 p-1 font-semibold text-white hover:border-blue-400 hover:bg-blue-400 hover:duration-200"
                        >
                            サインイン
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

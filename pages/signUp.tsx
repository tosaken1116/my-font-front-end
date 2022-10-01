import axios from "axios";
import { useRouter } from "next/router";
import { setCookie } from "nookies";
import { useState } from "react";
const initialErrorState = {
  mailAddress: false,
  password: false,
  confirmPassword: false,
};
export default function Signup() {
  const initialErrorStatus = {
    mailAddressInUse: false,
    mailAddressValueError: false,
  };
  const [errorStatus, setErrorStatus] = useState(initialErrorStatus);
  const router = useRouter();
  const url = "https://edd-myfont-backend.herokuapp.com";
  type signUpCheckElement = {
    mailAddress: string;
    password: string;
    confirmPassword: string;
  };
  const [formErrors, setFormErrors] = useState(initialErrorState);
  const [formData, setFormData] = useState<signUpCheckElement>({
    mailAddress: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };
  const signUp = async () => {
    try {
      const response = await axios.post(url + "/api/v1/users/signup", {
        email: formData.mailAddress,
        password: formData.password,
      });
      console.log(response.statusText);
      console.log(response);
      setCookie(null, "accessToken", response.data.jwt, {
        maxAge: 30 * 24 * 60 * 60,
      });
      router.push("/");
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
    console.log(initialErrorState);

    let passwordPattern =
      /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,100}$/;
    let formError = Object.assign({}, initialErrorState);
    if (!passwordPattern.test(formData.password)) {
      formError.password = true;
    }
    if (formData.password !== formData.confirmPassword) {
      formError.confirmPassword = true;
    }
    setFormErrors(formError);
    if (!formError.confirmPassword && !formError.password) {
      signUp();
      // router.push("/");
    }
  };
  return (
    <div>
      <div className="mt-4 text-center text-3xl">サインアップ</div>
      <div className="mx-12 mt-8 rounded border-4 border-amber-200 bg-amber-200">
        <form onSubmit={signUpCheck}>
          <div className="flex flex-col">
            <div className="mx-4 mt-4 text-sm">メールアドレス</div>
            <input
              name="mailAddress"
              onChange={handleChange}
              className="mx-4 mb-2 w-64 rounded bg-white p-0.5"
              placeholder="example@example.com"
            ></input>
            {errorStatus.mailAddressValueError && (
              <div className="mx-4 mb-2 text-xs text-red-500">
                無効なメールアドレスです
              </div>
            )}
            {errorStatus.mailAddressInUse && (
              <div className="mx-4 mb-2 text-xs text-red-500">
                使用済みのメールアドレスです
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

            <div className="mx-4 mt-4 text-sm">パスワード</div>
            <input
              name="confirmPassword"
              type="password"
              onChange={handleChange}
              className="mx-4 mb-2 w-64 rounded bg-white p-0.5"
              placeholder="password"
            ></input>
            {formErrors.confirmPassword && (
              <div className="mx-4 mb-6 text-xs text-red-500">
                パスワードが一致しません
              </div>
            )}
            <button type="submit"></button>
          </div>
          <div className="flex grid-cols-3 flex-row-reverse">
            <button
              type="submit"
              className="mx-auto my-4 rounded border-2 border-red-300 bg-red-300 p-1 font-semibold text-white hover:border-red-400 hover:bg-red-400"
            >
              サインアップ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

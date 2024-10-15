import { useContext, useState } from "react";
import projectLogo from "../../assets/LOGO.png";
import { MainContext } from "../../components/ContextProvider/MainContext";
export default function PasswordChanged() {
  const path=import.meta.env.VITE_DATA_HOST_API;
  const Authorization = localStorage.getItem("token");
  const api= path + "/customers/initEditData";

  const[password,setPassword] = useState({
    newPassword:"",
    confirmPassword:""
  });
  const [data,setData]=useState();
  const [error, setError] = useState(""); // 用來存放密碼不匹配的錯誤訊息
  const [passwordsMatch, setPasswordsMatch] = useState(false); // 控制勾勾顯示

  const getData = async()=>{
    const api= path + "/customers/initEditData";
    if(Authorization){
    //axiosInstance就有回傳token的功能
      const result = await axiosInstance.get(api);
      console.log(result.data);
      setData(result.data)
    }else{
      showLogingModal();
      console.log("please login")
    }
  };

 // 處理輸入變更並即時檢查密碼是否一致
 const handleChange = (e) => {
  const { name, value } = e.target;
  setPassword((prevState) => {
    const updatedPassword = { ...prevState, [name]: value };

    // 當兩個密碼都有值，且相同時才顯示"Passwords match!"
    if (
      updatedPassword.newPassword &&
      updatedPassword.confirmPassword &&
      updatedPassword.newPassword === updatedPassword.confirmPassword
    ) {
      setPasswordsMatch(true);
      setError("");
    } else if (updatedPassword.confirmPassword) {
      setPasswordsMatch(false);
      setError("Passwords do not match!");
    } else {
      setError(""); // 如果confirmPassword沒填，清空錯誤訊息
      setPasswordsMatch(false); // 確保還沒輸入確認密碼時不顯示勾勾
    }

    return updatedPassword;
  });

     
  const submit= async ()=>{
    try {
      console.log(password);
     if(Authorization){
        const result = await axiosInstance.put(api, data, {
       headers: {
         "Content-Type": "application/json",
       },
     });
     console.log(result);
   }
   } catch (error) {
     console.log(error);
   }
  }
  // 處理表單提交
  const handleSubmit = (e) => {
    e.preventDefault();
    // 驗證密碼是否匹配
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match!");
    } else {
      setError(""); // 清空錯誤訊息
      // 如果匹配，執行其他邏輯（例如提交表單）
      console.log("Password match. Submitting form...");
      // 可以在這裡執行提交的 API 請求或其他邏輯
    }
  };
  return (
          <div className="PasswordChanged" id="PasswordChanged">
            <div className="py-5 d-flex justify-content-center">
              <img
                className="projectLogo  w-50 h-100 "
                src={projectLogo}
                alt="Logo"
              ></img>
            </div>
            <form action="" className="was-validated">
            <div className="px-4 h5 m-3">
              <div className="form-group">
                <label className="mt-3">Please enter a new password:</label>
                <input type="password " 
                       className="form-control mt-3" 
                       style={{backgroundColor: "light"}} 
                       onChange={handleChange} 
                       name="newPassword" 
                       required>
                </input>
                {/* 只有在密碼匹配時顯示勾勾 */}
            {passwordsMatch && password.newPassword && (
              <div className="valid-feedback">Passwords match!</div>
            )}
                <div className="invalid-feedback">Please fill out this field.</div>
              </div>
              <div className="form-group">
                <label className="mt-3">Please confirm your password:</label>
                <input type="password " 
                       className="form-control mt-3"
                       style={{backgroundColor: "light"}} 
                       onChange={handleChange} 
                       name="confirmPassword" 
                       required>
                </input>
                {/* 顯示錯誤訊息 */}
      {error && <div className="text-danger">{error}</div>}
              </div>
            </div>
            <div className="row my-5 mx-auto justify-content-center">
                <div
                  className="btn col-3 mx-2"
                  id="OK"
                  data-bs-toggle="modal"
                  data-bs-target="#PassChangedSuccessModal"
                  onClick={submit}
                >
                  OK
                </div>
            </div>
            </form>
          </div>

  
  );
}

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
  const handleChange=(e) => {
    const { name, value } = e.target;
    setPassword((prevState) => {
      const updatedPassword = { ...prevState, [name]: value };

      console.log(updatedPassword); // 這裡的 updatedPassword 是更新後的狀態
      return updatedPassword;
      
      
    });
  };
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
  const isPasswordMatch = password.confirmPassword && password.newPassword === password.confirmPassword;
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
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Please fill out this field.</div>
              </div>
              <div className="form-group">
                <label className="mt-3">Please confirm your password:</label>
                <input type="password " 
                       className={`form-control mt-3  ${password.confirmPassword ? (isPasswordMatch ? 'is-valid' : 'is-invalid') : ''}`}
                       style={{backgroundColor: "light"}} 
                       onChange={handleChange} 
                       name="confirmPassword" 
                       required>
                </input>
                <div className="valid-feedback">Passwords match.</div>
                <div className="invalid-feedback">Passwords do not match.</div>
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

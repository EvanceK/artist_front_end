import { useForm } from "react-hook-form";
import projectLogo from "../../assets/LOGO.png";
export default function StaffLoginModal() {
  const path = import.meta.env.VITE_DATA_HOST_API;
  const{
    register,
    handleSubmit,
    watch,
  } = useForm();
  const onSubmit = (data) =>{
    console.log(data);
    try{
      const api = path + "/StaffController/login";
    }catch(error){
      console.log("登入錯誤:"+error);
    }
  };

  return (
    <div
      className="modal fade"
      id="StaffLoginModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="logo">
            <img
              className="projectLogo w-50"
              src={projectLogo}
              alt="Logo"
            ></img>
          </div>
          <form action="" onSubmit={handleSubmit(onSubmit)} id="myForm">
            <div className="input">
              <h2 className="d-flex m-5">Staff Log In</h2>
              <div className="d-block mt-5 m-2">
                <div className="row m-2">
                  <label className="col-3" htmlFor="username">
                    Username :
                  </label>
                  <input
                    id="username"
                    className="txtbox col-8"
                    name="username"
                    type="text"
                    placeholder="Username"
                    {...register("userName")}
                  />
                </div>
                <div className="row m-2">
                  <label className="col-3" htmlFor="password">
                    Password :
                  </label>
                  <input
                    id="password"
                    className="txtbox col-8"
                    name="password"
                    type="text"
                    placeholder="Password"
                    {...register("password")}
                  />
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-center m-5">
              <div className="btn col-3" data-bs-dismiss="modal">
                LOG IN
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

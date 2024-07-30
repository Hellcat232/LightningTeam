import { GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginGoogle } from "../../redux/auth/operations";
import styles from "./GoogleLoginButton.module.css";
import toast from "react-hot-toast";

const GoogleLoginButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSuccess = async (response) => {
    const token = response.credential;
    try {
      const result = await dispatch(loginGoogle({ token })).unwrap();
      localStorage.setItem("accessToken", result.accessToken);
      localStorage.setItem("refreshToken", result.refreshToken);
      navigate("/tracker");
    } catch (error) {
      console.error("Google Login failed:", error);
      toast.error(`Google Login failed: ${error}`);
    }
  };

  const handleFailure = (error) => {
    console.error("Google Login failed:", error);
  };

  return (
    <div className={styles.googleLoginConteiner}>
    <div className={styles.googleLoginButton}>
      <GoogleLogin
        clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
        buttonText="Login with Google"
        onSuccess={handleSuccess}
        onFailure={handleFailure}
        cookiePolicy={"single_host_origin"}
      />
      </div>
    </div>
  );
};

export default GoogleLoginButton;

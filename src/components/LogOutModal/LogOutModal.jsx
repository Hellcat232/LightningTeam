import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import css from "./LogOutModal.module.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import icons from "../../images/symbol-icons.svg";

const LogOutModal = ({ showModal, handleClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        toast.success("Successfully logout");
        navigate("/signin", { replace: true });
      })
      .catch((error) => {
        console.error("Failed to logout:", error);
        toast.error(`ailed to logout: ${error}`);
      });
  };

  if (!showModal) {
    return null;
  }

  return (
    <div className={css.overlay}>
      <div className={css.modal} onClick={handleClose}>
        <div
          className={css["modal-content"]}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <button className={css.close} onClick={handleClose}>
        <svg className={css.icon} width="28" height="28">
          <use href={`${icons}#icon-x`}></use>
        </svg>
          </button>
          <h2>Log out</h2>
          <p>Do you really want to leave??</p>
          <div className={css.btn}>
            <button className={css.accept} type="button" onClick={handleLogout}>
              Log out
            </button>
            <button className={css.reject} type="button" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogOutModal;

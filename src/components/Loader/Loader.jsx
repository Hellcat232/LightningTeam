import { ProgressBar } from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <ProgressBar
        visible={true}
        height="160"
        width="160"
        color="#4fa94d"
        borderColor="#9BE1A0"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;

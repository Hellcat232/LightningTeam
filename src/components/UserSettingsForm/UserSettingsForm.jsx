import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import styles from "./UserSettingsForm.module.css";
import { LuUpload } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateUser, currentUser } from "../../redux/auth/operations.js";
import { selectClick, selectUser } from "../../redux/auth/selectors.js";

const schema = Yup.object().shape({
  avatar: Yup.mixed(),
  gender: Yup.string().oneOf(["woman", "man", ""]).nullable(),
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  weight: Yup.number()
    .positive("Weight must be a positive number"),
  sportsActivity: Yup.number()
    .positive("Active time must be a positive number"),
  waterRate: Yup.number()
    .positive("Water intake must be a positive number"),
});

const UserSettingForm = ({ handleClose }) => {
  const stopClick = useSelector(selectClick);
  const isUser = useSelector(selectUser);
  const [avatar, setAvatar] = useState(isUser.avatar || null);
  const [avatarFile, setAvatarFile] = useState(null);
  const dispatch = useDispatch();
  console.log(avatarFile, avatar);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      gender: "",
      weight: 0,
      sportsActivity: 0,
      waterRate: 0,
    },
  });

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
      setAvatarFile(file);
    }
  };

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  useEffect(() => {
    if (isUser) {
      setValue("name", isUser.name || "");
      setValue("email", isUser.email || "");
      setValue("weight", isUser.weight || 0);
      setValue("sportsActivity", isUser.sportsActivity || 0);
      setValue("waterRate", isUser.waterRate || 0);
      setValue("gender", isUser.gender || "");
    }
    setAvatar(isUser.avatar || null);
  }, [isUser, setValue]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("gender", data.gender);
    formData.append("weight", data.weight);
    formData.append("sportsActivity", data.sportsActivity);
    formData.append("waterRate", data.waterRate);
    if (avatarFile) {
      formData.append("avatar", avatarFile);
    }

    dispatch(updateUser(formData)).then((response) => {
      if (response.meta.requestStatus === "fulfilled") {
        handleClose();
      }
    });
  };

  const requiredPerDay = () => {
    const weight = parseFloat(watch("weight")) || 0;
    const sportsActivity = parseFloat(watch("sportsActivity")) || 0;
    if (watch("gender") === "woman") {
      return (weight * 0.03 + sportsActivity * 0.4).toFixed(1);
    } else if (watch("gender") === "man") {
      return (weight * 0.04 + sportsActivity * 0.6).toFixed(1);
    }
    return 0;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h1 className={styles.setting}>Setting</h1>
      <div className={styles["avatar-upload-container"]}>
        <div className={styles["avatar-preview"]}>
          {avatar ? (
            <img
              src={avatar}
              loading="lazy"
              alt="Avatar"
              className={styles["avatar-image"]}
            />
          ) : (
            <div className={styles["avatar-placeholder"]}>Avatar</div>
          )}
        </div>
        <label className={styles["avatar-upload-label"]}>
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className={styles["avatar-upload-input"]}
          />
          <div className={styles["upload-icon-text"]}>
            <LuUpload />
            <span className={styles["upload-text"]}>upload a photo</span>
          </div>
        </label>
      </div>

      <div className={styles.main}>
        <div>
          <div>
            <label className={`${styles.label} ${styles.gender}`}>
              Your gender identity
            </label>
            <div className={styles["radio-container"]}>
              <label className={styles["radio-gender"]}>
                <input
                  className={styles.radio}
                  type="radio"
                  name="gender"
                  value="woman"
                  {...register("gender")}
                />
                <span className={styles["radio-checkmark"]}></span>
                Woman
              </label>

              <label className={styles["radio-gender"]}>
                <input
                  className={styles.radio}
                  type="radio"
                  name="gender"
                  value="man"
                  {...register("gender")}
                />
                <span className={styles["radio-checkmark"]}></span>
                Man
              </label>
            </div>
            {errors.gender && <p>{errors.gender.message}</p>}
          </div>

          <div>
            <label className={`${styles.label} ${styles.name}`}>
              Your name:
            </label>
            <input className={styles.input} type="text" {...register("name")} />
            {errors.name && <p>{errors.name.message}</p>}
          </div>

          <div>
            <label className={`${styles.label} ${styles.email}`}>Email:</label>
            <input
              className={styles.input}
              type="email"
              {...register("email")}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div>
            <label className={`${styles.label} ${styles.norma}`}>
              My daily norma
            </label>
            <div className={styles["container-formula"]}>
              <div>
                <p>For woman</p>
                <p className={styles.formula}>V=(M*0.03) + (T*0.4)</p>
              </div>

              <div>
                <p>For man</p>
                <p className={styles.formula}>V=(M*0.04) + (T*0.6)</p>
              </div>
            </div>
            <div className={styles["textarea-container"]}>
              <div className={styles["styled-text"]}>
                <span className={styles.highlight}>*</span> V is the volume of
                the water norm in liters per day, M is your body weight, T is
                the time of active sports, or another type of activity
                commensurate in terms of loads (in the absence of these, you
                must set 0)
              </div>
            </div>
          </div>

          <div className={styles.sign}>
            <svg
              className={styles.svg}
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="22"
              fill="none"
            >
              <path
                fill="#9BE1A0"
                d="M1.263 12.75c.084.87.226 1.516.42 1.943.198.425.548.637 1.054.637.094 0 .179-.015.263-.032.086.017.17.032.265.032.504 0 .856-.212 1.052-.637.196-.427.335-1.073.42-1.943l.45-6.718c.083-1.31.125-2.249.125-2.819 0-.776-.202-1.382-.608-1.817C4.296.961 3.76.745 3.097.745c-.035 0-.062.007-.097.009-.033-.002-.06-.01-.094-.01-.665 0-1.2.217-1.607.652-.406.436-.61 1.042-.61 1.817 0 .57.042 1.51.126 2.82l.448 6.717Zm1.754 5.036c-.644 0-1.191.203-1.646.609-.454.407-.681.9-.681 1.48 0 .654.23 1.169.687 1.543.46.374.995.561 1.607.561.623 0 1.167-.184 1.632-.554.464-.368.696-.886.696-1.55 0-.579-.222-1.073-.666-1.48-.445-.406-.987-.61-1.63-.61"
              />
            </svg>
            <p className={styles.hours}>Active time in hours</p>
          </div>
        </div>

        <div className={styles["second-main"]}>
          <div>
            <label className={`${styles.label} ${styles.weight}`}>
              Your weight in kilograms:
            </label>
            <input
              className={styles.input}
              type="number"
              {...register("weight")}
              min="0"
              step="any"
            />
            {errors.weight && <p>{errors.weight.message}</p>}
          </div>

          <div>
            <label className={`${styles.label} ${styles.active}`}>
              The time of active participation in sports:
            </label>
            <input
              className={styles.input}
              type="number"
              {...register("sportsActivity")}
              min="0"
              step="any"
            />
            {errors.sportsActivity && <p>{errors.sportsActivity.message}</p>}
          </div>

          <div>
            <label className={`${styles.label} ${styles.amount}`}>
              The required amount of water in liters per day: {requiredPerDay()}{" "}
              L
            </label>
            <p className={`${styles.label} ${styles["water-drink"]}`}>
              Write down how much water you will drink:
            </p>
            <input
              className={styles.input}
              type="number"
              {...register("waterRate")}
              min="0"
              step="any"
            />
            {errors.waterRate && <p>{errors.waterRate.message}</p>}
          </div>
        </div>
      </div>

      <button
        className={styles.button}
        disabled={stopClick === "pending"}
        type="submit"
      >
        Save
      </button>
    </form>
  );
};

export default UserSettingForm;

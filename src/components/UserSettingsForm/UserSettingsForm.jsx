import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import css from "./UserSettingsForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateUser, currentUser } from "../../redux/auth/operations.js";
// import { selectIsLoading } from '../../redux/auth/selectors.js';
import { selectUser } from "../../redux/auth/operations.js";

const UserSettingForm = ({ handleClose }) => {
  const isUser = useSelector(selectUser);
  const [avatar, setAvatar] = useState(isUser.avatar || null);
  // const [gender, setGender] = useState("woman");
  const [defaultState, setDefaultState] = useState({
    avatar: isUser.avatar || null,
    gender: isUser.gender || "woman",
    email: isUser.email || "",
    name: isUser.name || "",
    weight: isUser.weight || 0,
    sportsActivity: isUser.sportsActivity || "",
    waterRate: isUser.waterRate || "",
  });
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);

  const schema = Yup.object().shape({
    avatar: Yup.string(),
    gender: Yup.string().required("Gender is required"),
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    weight: Yup.string().required("Weight is required"),
    sportsActivity: Yup.string().required("Active time is required"),
    waterRate: Yup.string().required("Water intake is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultState,
  });

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  useEffect(() => {
    if (isUser) {
      setDefaultState({
        gender: isUser.gender || "woman",
        email: isUser.email || "",
        name: isUser.name || "",
        weight: isUser.weight || 0,
        sportsActivity: isUser.sportsActivity || "",
        waterRate: isUser.waterRate || "",
      });
      setAvatar(isUser.avatar || null);
    }
  }, [isUser]);

  const onSubmit = (data) => {
    const formData = {
      ...data,
      avatar,
    };

    dispatch(updateUser(formData)).then((response) => {
      if (response.meta.requestStatus === "fulfilled") {
        handleClose();
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <h1 className={css.setting}>Setting</h1>
      <div className={css.avatarUploadContainer}>
        <div className={css.avatarPreview}>
          {avatar ? (
            <img src={avatar} alt="Avatar" className={css.avatarImage} />
          ) : (
            <div className={css.avatarPlaceholder}>Avatar</div>
          )}
        </div>
        <label className={css.avatarUploadLabel}>
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className={css.avatarUploadInput}
          />
          <div className={css.uploadIconText}>
            <svg
              className={css.uploadIcon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 34 32"
              // width="20"
              // height="20"
            >
              <path d="M28.8 20v5.333A2.668 2.668 0 0 1 26.133 28H7.466a2.668 2.668 0 0 1-2.667-2.667V20M23.467 10.667 16.8 4l-6.667 6.667M16.8 4v16" />

            </svg>
            <span className={css.uploadText}>upload a photo</span>
          </div>
        </label>
      </div>

      <div className={css.main}>
        <div>
          <div>
            <label className={`${css.label} ${css.gender}`}>
              Your gender identity
            </label>
            <div className={css.radioContainer}>
              <label className={css.radioGender}>
                <input
                  className={css.radio}
                  type="radio"
                  name="gender"
                  value="woman"
                  {...register("gender")}
                  checked={defaultState.gender === "woman"}
                  onChange={() =>
                    setDefaultState((prevState) => ({
                      ...prevState,
                      gender: "woman",
                    }))
                  }
                />
                <span className={css.radioCheckmark}></span>
                Woman
              </label>

              <label className={css.radioGender}>
                <input
                  className={css.radio}
                  type="radio"
                  name="gender"
                  value="man"
                  {...register("gender")}
                  checked={defaultState.gender === "man"}
                  onChange={() =>
                    setDefaultState((prevState) => ({
                      ...prevState,
                      gender: "man",
                    }))
                  }
                />
                <span className={css.radioCheckmark}></span>
                Man
              </label>
            </div>
            {errors.gender && <p>{errors.gender.message}</p>}
          </div>

          <div>
            <label className={`${css.label} ${css.name}`}>Your name:</label>
            <input
              className={css.input}
              type="text"
              {...register("name")}
              defaultValue={defaultState.name}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>

          <div>
            <label className={`${css.label} ${css.email}`}>Email:</label>
            <input
              className={css.input}
              type="email"
              {...register("email")}
              defaultValue={defaultState.email}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div>
            <label className={`${css.label} ${css.norma}`}>
              My daily norma
            </label>
            <div className={css.containerFormula}>
              <div>
                <p>For woman</p>
                <p className={css.formula}>V=(M*0.03) + (T*0.4)</p>
              </div>

              <div>
                <p>For man</p>
                <p className={css.formula}>V=(M*0.04) + (T*0.6)</p>
              </div>
            </div>
            <div className={css.textareaContainer}>
              <div className={css.styledText}>
                <span className={css.highlight}>*</span> V is the volume of the
                water norm in liters per day, M is your body weight, T is the
                time of active sports, or another type of activity commensurate
                in terms of loads (in the absence of these, you must set 0)
              </div>
            </div>
          </div>

          <div className={css.sign}>
            <svg
              className={css.svg}
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
            <p className={css.hours}>Active time in hours</p>
          </div>
        </div>

        <div className={css["second-main"]}>
          <div>
            <label className={`${css.label} ${css.weight}`}>
              Your weight in kilograms:
            </label>
            <input
              className={css.input}
              type="number"
              {...register("weight")}
            />
            {errors.weight && <p>{errors.weight.message}</p>}
          </div>

          <div>
            <label className={`${css.label} ${css.active}`}>
              The time of active participation in sports:
            </label>
            <input
              className={css.input}
              type="number"
              {...register("sportsActivity")}
            />
            {errors.activeTime && <p>{errors.activeTime.message}</p>}
          </div>

          <div>
            <label className={`${css.label} ${css.amount}`}>
              The required amount of water in liters per day:
            </label>
            <p className={`${css.label} ${css.waterDrink}`}>
              Write down how much water you will drink:
            </p>
            <input
              className={css.input}
              type="number"
              {...register("waterRate")}
            />
            {errors.waterIntake && <p>{errors.waterIntake.message}</p>}
          </div>
        </div>
      </div>

      <button className={css.button} type="submit">
        Save
      </button>
    </form>
  );
};

export default UserSettingForm;

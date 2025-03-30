import { useEffect, useState } from "react";
import { IRegisterScreenProps } from "./Register.type";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../helpers/firebaseConfig";
import { Alert } from "react-native";
import { useAppNavigator } from "../../routes/AppNavigator.handler";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login } from "../../redux/authSlice";

export const useViewModel = ({ navigation, route }: IRegisterScreenProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPwdError, setConfirmPwdError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [secureText, setSecureText] = useState(true);
  const [loading, setLoading] = useState(false);
  const { navigate, popToTop } = useAppNavigator();

  const dispatch = useDispatch();

  const validateEmail = (inputEmail: string) => {
    setEmail(inputEmail);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputEmail)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };
  const validatePassword = (inputPassword: string) => {
    setPassword(inputPassword);
    if (inputPassword.length < 6) {
      setPasswordError("Password must be at least 6 characters");
    } else {
      setPasswordError("");
    }
  };

  const validateConfirmPasswords = (confirmPwd: string) => {
    setConfirmPassword(confirmPwd);
    if (password !== confirmPwd) {
      setConfirmPwdError("Passwords do not match.");
      return;
    }

    setConfirmPwdError("");
  };

  const handleRegister = async () => {
    try {
      if (
        !emailError &&
        !passwordError &&
        email !== "" &&
        password !== "" &&
        confirmPassword !== ""
      ) {
        setLoading(true);
        const data = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const token = await data.user.getIdToken();
        if (token) {
          dispatch(login(token));
          await AsyncStorage.setItem("authToken", token);
          console.log("Login successful", token);

          setLoading(false);
          navigate("Main");
        }
      }
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

  const toLoginScreen = () => {
    navigate("Login");
  };

  return {
    email,
    password,
    confirmPwdError,
    confirmPassword,
    emailError,
    passwordError,
    secureText,
    loading,
    setSecureText,
    validateEmail,
    validatePassword,
    handleRegister,
    toLoginScreen,
    validateConfirmPasswords,
  };
};

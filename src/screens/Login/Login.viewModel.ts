import { useEffect, useState } from "react";
import { ILoginScreenProps } from "./Login.type";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../helpers/firebaseConfig";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { useAppNavigator } from "../../routes/AppNavigator.handler";
import { login } from "../../redux/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useViewModel = ({ navigation, route }: ILoginScreenProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [secureText, setSecureText] = useState(true);
  const [loading, setLoading] = useState(false);
  const { navigate, popToTop } = useAppNavigator();

  const dispatch = useDispatch();

  useEffect(() => {}, []);

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

  const handleLogin = async () => {
    setLoading(true);

    if (!emailError && !passwordError && email !== "" && password !== "") {
      try {
        const data = await signInWithEmailAndPassword(auth, email, password);
        const token = await data.user.getIdToken();
        if (token) {
          dispatch(login(token));
          await AsyncStorage.setItem("authToken", token);
          console.log("Login successful", token);

          setLoading(false);
          navigate("Main");
        }
      } catch (error: any) {
        setLoading(false);
        Alert.alert("Login Failed", error.message);
      }
    } else {
      setLoading(false);
      alert("Please enter valid credentials ❌");
    }
  };

  const toRegisterScreen = () => {
    navigate("Register");
  };

  return {
    email,
    password,
    emailError,
    passwordError,
    secureText,
    loading,
    setSecureText,
    validateEmail,
    validatePassword,
    handleLogin,
    toRegisterScreen,
  };
};

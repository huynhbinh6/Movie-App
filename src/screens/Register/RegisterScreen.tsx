import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { styles } from "./Register.style";
import { IRegisterScreenProps } from "./Register.type";
import { useViewModel } from "./Register.viewModel";

const RegisterScreen = ({ navigation, route }: IRegisterScreenProps) => {
  const {
    email,
    password,
    emailError,
    confirmPassword,
    passwordError,
    secureText,
    confirmPwdError,
    loading,
    setSecureText,
    validateEmail,
    validatePassword,
    handleRegister,
    toLoginScreen,
    validateConfirmPasswords
  } = useViewModel({ navigation, route });
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={require("../../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Register
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={[styles.input, emailError ? styles.inputError : null]}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={validateEmail}
          value={email}
        />
        {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[
              styles.input,
              passwordError ? styles.inputError : null,
              { flex: 1 },
            ]}
            placeholder="Enter your password"
            secureTextEntry={secureText}
            onChangeText={validatePassword}
            value={password}
          />
          {/* Toggle Password Visibility */}
          <TouchableOpacity
            style={{ position: "absolute", right: 10 }}
            onPress={() => setSecureText(!secureText)}
          >
            <Text style={styles.toggleText}>{secureText ? "👁️" : "🙈"}</Text>
          </TouchableOpacity>
        </View>
        {passwordError ? (
          <Text style={styles.error}>{passwordError}</Text>
        ) : null}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[
              styles.input,
              passwordError ? styles.inputError : null,
              { flex: 1 },
            ]}
            placeholder="Confirm your password"
            secureTextEntry={secureText}
            onChangeText={validateConfirmPasswords}
            value={confirmPassword}
          />
          {/* Toggle Password Visibility */}
          <TouchableOpacity
            style={{ position: "absolute", right: 10 }}
            onPress={() => setSecureText(!secureText)}
          >
            <Text style={styles.toggleText}>{secureText ? "👁️" : "🙈"}</Text>
          </TouchableOpacity>
        </View>
        {confirmPwdError ? (
          <Text style={styles.error}>{confirmPwdError}</Text>
        ) : null}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text>Already have an account? <Text onPress={toLoginScreen} style={styles.signup}>Sign in</Text></Text>
      </View>
    </View>
  );
};

export default RegisterScreen;

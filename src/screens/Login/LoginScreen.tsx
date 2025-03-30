import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { styles } from "./Login.style";
import { ILoginScreenProps } from "./Login.type";
import { useViewModel } from "./Login.viewModel";

const LoginScreen = ({ navigation, route }: ILoginScreenProps) => {
  const {
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
  } = useViewModel({ navigation, route });
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#fff' }}>
      <Image
        source={require("../../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Login
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        {loading ? (
          <ActivityIndicator size={14} color={'#fff'} />
        ) : (
          <Text style={styles.buttonText}>Login</Text>
        )}
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text>
          Don't have an account?{" "}
          <Text onPress={toRegisterScreen} style={styles.signup}>
            Sign up
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

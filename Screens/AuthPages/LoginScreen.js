import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import { Button } from "react-native-elements";
import BgImage from "../../components/BgImage";
import InputDefault from "../../components/InputDefault";
import InputPassword from "../../components/InputPassword";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [nameActiveInput, setNameActiveInput] = useState("");
  const { navigate } = useNavigation();

  const signIn = () => {
    console.debug("SignIn!");
    console.debug("Email:", email);
    console.debug("Password:", password);
    navigation.navigate("Home");
  };

  const handleActive = (focus, name) => {
    if (focus === "onFocus") {
      name === "email"
        ? setNameActiveInput("email")
        : setNameActiveInput("password");
      return setIsShowKeyboard(true);
    }
    if (focus === "onBlur") {
      setNameActiveInput("");
      setIsShowKeyboard(false);
    }
  };

  const handleUseKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const handleSubmit = () => {
    validationSchema
      .validate({ email, password })
      .then(() => {
        signIn();
      })
      .catch((error) => {
        console.log("Validation Error:", error.message);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={handleUseKeyboard}>
      <View style={styles.container}>
        <BgImage>
          <View
            style={{
              ...styles.contentContainer,
              paddingBottom: isShowKeyboard
                ? Platform.OS == "ios"
                  ? 260
                  : 32
                : 110,
            }}
          >
            <Text style={styles.title}>Увійти</Text>
            <InputDefault
              nameActiveInput={nameActiveInput}
              placeholder="Адреса електронної пошти"
              setChange={setEmail}
              handleActive={handleActive}
              name="email"
              value={email}
            />
            <InputPassword
              nameActiveInput={nameActiveInput}
              setPassword={setPassword}
              password={password}
              handleActive={handleActive}
            />
            <TouchableOpacity style={styles.buttonContainer}>
              <Button
                title="Увійти"
                buttonStyle={styles.button}
                onPress={handleSubmit}
              />
            </TouchableOpacity>
            <View style={styles.registerContainer}>
              <Text style={styles.registerText}>Немає акаунту?</Text>
              <TouchableOpacity onPress={() => {}}>
                <Text
                  style={[styles.registerText, styles.registerLink]}
                  onPress={() => navigation.navigate("Regestration")}
                >
                  Зареєструватися
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </BgImage>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },
  contentContainer: {
    backgroundColor: "#fff",
    width: "100%",
    alignItems: "center",
    paddingTop: 32,
    paddingHorizontal: 10,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  title: {
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",
    marginBottom: 16,
  },

  buttonContainer: {
    width: "100%",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    height: 50,
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  registerText: {
    fontWeight: "400",
    fontSize: 16,
    color: "rgba(27, 67, 113, 1)",
  },
  registerLink: {
    color: "rgba(27, 67, 113, 1)",
    marginLeft: 5,
  },
});

export default LoginScreen;

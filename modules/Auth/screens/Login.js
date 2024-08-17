import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  Alert
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Button, Icon, Input } from "../../../components";
import { Images, argonTheme } from "../../../constants";
import { useDispatch } from "react-redux";
import { login } from "../slice";
import { attemptLogin } from "../api";

const { width, height } = Dimensions.get("screen");

const Login = ({ navigation }) => {

  const [checkedPolicy, setCheckedPolicy] = React.useState(false);
  const [username, setUserName] = React.useState("");
  const [password, setPassWord] = React.useState("");

  const dispatch = useDispatch();

  const handleLogin = async () => {
    // Basic validation
    if (username === "" || password === "") {
      Alert.alert("Error", "Please enter both username and password.");
      return;
    }
    // Example authentication logic
    const data = await attemptLogin(username, password);
    if (data.success)
      dispatch(login(data)); // Dispatch login action
    else
      Alert.alert("Error", "Invalid username or password.");
  };

  return (

    <Block safe flex middle>
      <StatusBar />
      <Block flex>
        <Block flex={0.2} middle>
          {/* <Image styles={styles.logo} source={Images.Logo} /> */}
          <Text style={styles.title}>AGAPE INTERNET SOLUTIONS</Text>
        </Block>
        <Block flex center>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior="padding"
            enabled
          >
            <Block width={width * 0.8} style={{ marginBottom: 15 }}>
              <Input
                borderless
                placeholder="Username"
                value={username}
                onChangeText={setUserName}
                iconContent={
                  <Icon
                    size={16}
                    color={argonTheme.COLORS.ICON}
                    name="user"
                    family="Feather"
                    style={styles.inputIcons}
                  />
                }
              />

            </Block>

            <Block width={width * 0.8}>
              <Input
                password
                borderless
                placeholder="Password"
                value={password}
                onChangeText={setPassWord}
                iconContent={
                  <Icon
                    size={16}
                    color={argonTheme.COLORS.ICON}
                    name="lock"
                    family="Feather"
                    style={styles.inputIcons}
                  />
                }
              />
            </Block>
            <Block row center width={width * 0.75} style={styles.passwordCheck}>
              <Checkbox
                checkboxStyle={{
                  borderWidth: 3
                }}
                color={argonTheme.COLORS.BLACK}
                label="I agree with the"
              />
              <Text
                style={{ width: 100, color: argonTheme.COLORS.PRIMARY, marginLeft: 5 }}
              >
                Privacy Policy
              </Text>
            </Block>
            <Block middle>
              <Button style={styles.createButton} onPress={handleLogin} >
                <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                  Sign In
                </Text>
              </Button>
            </Block>
          </KeyboardAvoidingView>
        </Block>
      </Block >
    </Block >
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 0,
    paddingTop: 15,
    paddingBottom: 15
  },
  createButton: {
    width: '100%',
    marginTop: 25,
    backgroundColor: argonTheme.COLORS.BLACK,
  }
});

export default Login;
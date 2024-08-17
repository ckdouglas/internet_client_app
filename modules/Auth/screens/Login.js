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
    <Block flex middle>
      <StatusBar />
      <Block safe flex middle>
        <Block style={styles.registerContainer}>
          <Block flex>
            <Block flex={0.2} middle>
              <Image styles={styles.logo} source={Images.Logo} />

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
                <Block row width={width * 0.75}>
                  <Checkbox
                    checkboxStyle={{
                      borderWidth: 3
                    }}
                    color={argonTheme.COLORS.BLACK}
                    label="I agree with the"
                  />
                  <Button
                    style={{ width: 100 }}
                    color="transparent"
                    textStyle={{
                      color: argonTheme.COLORS.GRADIENT_START,
                      fontSize: 14
                    }}
                  >
                    Privacy Policy
                  </Button>
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
          </Block>
        </Block>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.875,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: '100%',
    marginTop: 25,
    backgroundColor: argonTheme.COLORS.BLACK,
  }
});

export default Login;


/**


To implement the login part of your application using React Navigation and Redux, you need to:

-Create the login screen.
-Set up Redux for managing authentication state.
-Handle the login logic, including form submission and authentication checks.
-Navigate users based on their authentication status.

 */
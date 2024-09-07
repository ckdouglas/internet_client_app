import React from "react";
import {
  StyleSheet,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  Alert,
  ActivityIndicator
} from "react-native";
import { Block, Checkbox, Text } from "galio-framework";

import { Button, Icon, Input } from "../../../components";
import { argonTheme } from "../../../constants";
import { attemptLogin } from "../api";
import { useDispatch } from "react-redux";
import { login } from "../slice";

const { width } = Dimensions.get("screen");

const Login = ({ }) => {
  const [checkedPolicy, setCheckedPolicy] = React.useState(false);
  const [username, setUserName] = React.useState("AG01091");
  const [password, setPassWord] = React.useState("CqmP1");
  const [loading, setLoading] = React.useState(false);
  const  dispatch = useDispatch();

  const handleLogin = async () => {
    if (username === "" || password === "") {
      Alert.alert("Error", "Please enter both username and password.");
      return;
    }

    setLoading(true);
    await attemptLogin(username, password).then(() => {
      dispatch(login());
    }).catch((e) => {
      Alert.alert("Error", "Invalid username or password. Try again.");
    }).finally(() => {
      setLoading(false);
    });
  };

  return (

    <Block safe flex middle>
      <StatusBar />
      <Block flex>
        <Block flex={0.2} middle>
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
              <Button style={styles.createButton} onPress={handleLogin}>
                {loading ? <ActivityIndicator /> : <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                  Sign In
                </Text>}
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
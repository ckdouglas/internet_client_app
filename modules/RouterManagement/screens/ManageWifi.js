import { Block } from "galio-framework";
import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { Input } from "../../../components";
import { argonTheme } from "../../../constants";

const ManageWifi = () => {
  const [name, setName] = useState(null);
  const [password, setPassWord] = useState(null);


  return (<Block>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      enabled
    >
      <Text>Name</Text>
      <Input
        borderless
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <Text>Password</Text>
      <Input
        borderless
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassWord}
      />
      <Block middle>
        <Button style={manageWifiStyles.createButton} onPress={handleLogin} >
          <Text bold size={14} color={argonTheme.COLORS.WHITE}>
            Save
          </Text>
        </Button>
      </Block>
    </KeyboardAvoidingView>
  </Block>)
}

const manageWifiStyles = StyleSheet.create({
  createButton: {
    width: '100%',
    marginTop: 25,
    backgroundColor: argonTheme.COLORS.BLACK,
  }
})

export default ManageWifi;

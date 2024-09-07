import { Block, Text, Button, Input } from "galio-framework";
import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";

import { argonTheme } from "../../../constants";

const ManageWifi = () => {
  const [name, setName] = useState(null);
  const [password, setPassWord] = useState(null);

  return (<Block safe flex style={{ margin: 16 }}>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      enabled
    >
      <View>
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
          <Button style={manageWifiStyles.createButton} onPress={() => console.log("Save")} >
            <Text bold size={14} color={argonTheme.COLORS.WHITE}>
              Save
            </Text>
          </Button>
        </Block>
      </View>
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

import { Block, Text, theme } from "galio-framework";
import { ScrollView, StyleSheet, Image } from "react-native";

import { DrawerItem as DrawerCustomItem } from "../../../components";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../Auth/slice";
import { Images } from "../../../constants";


function CustomDrawerContent({
  drawerPosition,
  navigation,
  profile,
  focused,
  state,
  ...rest
}) {
  const screens = ["Dashboard", "Finance", "Payment", "Statistics", "Router Management", "Tickets",  "FAQs"];
  // disabled "Speed Test",
  const dispatch = useDispatch();

  return (
    <Block
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <Block flex={0.06} style={styles.header}>
        <Image styles={styles.logo} source={Images.Logo} />
      </Block>
      <Block flex style={{ paddingLeft: 8, paddingRight: 14 }}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {screens.map((item, index) => {
            return (
              <DrawerCustomItem
                title={item}
                key={index}
                navigation={navigation}
                focused={state.index === index ? true : false}
              />
            );
          })}
          <Block
            flex
            style={{ marginTop: 24, marginVertical: 8, paddingHorizontal: 8 }}
          >
            <Block
              style={{
                borderColor: "rgba(0,0,0,0.2)",
                width: "100%",
                borderWidth: StyleSheet.hairlineWidth,
              }}
            />
            <Text color="#8898AA" style={{ marginTop: 16, marginLeft: 8 }}>

            </Text>
          </Block>
        </ScrollView>
        <DrawerCustomItem onPress={() => dispatch(logout())} title="Log out" navigation={navigation} />
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 3,
    justifyContent: "center",
    marginTop: 28
  },
});

export default CustomDrawerContent;

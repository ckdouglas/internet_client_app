import { Block, Text, Button } from "galio-framework";
import React, { useState } from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { argonTheme } from "../../../constants";
import { useNavigation } from "@react-navigation/native";

const Router_Management = () => {
  const [routerOn, setRouterOn] = useState(true);
  const navigation = useNavigation();

  return (
    <>
      <Block style={styles.router}>
        <MaterialCommunityIcons
          name="circle"
          style={{
            color: routerOn ? argonTheme.COLORS.SUCCESS : argonTheme.COLORS.WARNING,
            marginRight: 12
          }}
          size={24}
        />
        <Text >{routerOn ? "Router On" : "Router Off"}</Text>
      </Block>
      <View style={styles.container}>
        <Block row style={styles.cardContainer}>
          <Block style={styles.card}>
            <Button
              color="transparent"
              round
              size="large"
              shadowless
              style={styles.button}
              onPress={() => navigation.navigate("Manage WI-FI")}>
              <MaterialCommunityIcons
                name="wifi-cog"
                size={24}
              />
              <Text>Manage Wifi</Text>
            </Button>
          </Block>

          <Block style={styles.card}>
            <Button
              color="transparent"
              round
              size="large"
              shadowless
              style={styles.button}
              onPress={() => navigation.navigate("Devices List")}>
              <MaterialCommunityIcons
                name="devices"
                size={24}
              />
              <Text>View Devices</Text>
            </Button>
          </Block>
        </Block>
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
  },
  cardContainer: {
    width: '100%',
    justifyContent: 'space-around',
  },
  router: {
    borderRadius: 5,
    elevation: 5,
    backgroundColor: 'white',
    marginHorizontal: 8,
    marginVertical: 16,
    padding:8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  card: {
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 5,
    elevation: 5,
    backgroundColor: 'white',
  },
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Router_Management;

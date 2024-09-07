import React from "react";
import { Block, Card, Text } from "galio-framework";
import { Icon } from "../../../components";
import { StyleSheet, TouchableOpacity } from "react-native";
import { argonTheme } from "../../../constants";

const QuickMenu = ({ menuItems }) => {
  return (
    <Block style={{ margin: 10 }}>
      <Text style={{ fontWeight: 'bold' }}>QUICK ACCESS MENU</Text>
      <Card
        style={{
          marginTop: 16,
          paddingTop: 0,
          backgroundColor: 'white',
        }}
      >
        <Block
          row
          space="between"
          middle
          style={{
            padding: 10,
            marginTop: -24,
          }}
        >
          {
            menuItems.slice(0, 2).map((item) => <TouchableOpacity style={styles.card} center key={item.label} onPress={item.onPress}>
              <Icon
                name={item.icon}
                family="MaterialIcons"
                size={30}
                color="white"
              />
              <Text style={{ color: 'white' }}>{item.label}</Text>
            </TouchableOpacity>)
          }
        </Block>
        <Block
          row
          space="between"
          middle
          style={{
            padding: 10,
            marginTop: -24
          }}
        >
          {
            menuItems.slice(2, 4).map((item) => <TouchableOpacity style={styles.card} center key={item.label} onPress={item.onPress}>
              <Icon
                name={item.icon}
                family="MaterialIcons"
                size={30}
                color="white"
              />
              <Text style={{ color: 'white' }}>{item.label}</Text>
            </TouchableOpacity>)
          }
        </Block>
      </Card>
    </Block>)
}

const styles = StyleSheet.create({
  card: {
    borderColor: argonTheme.COLORS.PRIMARY,
    backgroundColor: argonTheme.COLORS.PRIMARY,
    borderWidth: 1,
    padding: 20,
    flex: 1,
    margin: 10,
    alignItems: 'center',
    borderRadius: 6
  }
})

export default QuickMenu;

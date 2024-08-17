import React from "react";
import { Block, Card, Text } from "galio-framework";
import { Icon } from "../../../components";
import { TouchableOpacity } from "react-native";

const QuickMenu = ({ menuItems }) => {
  return (
    <Block style={{margin: 10}}>
      <Text style={{fontSize: 18}}>Quick Menu</Text>
      <Card style={{
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
            marginTop: -24
          }}
        >
          {
            menuItems.map((item) => <TouchableOpacity center key={item.label} onPress={item.onPress}>
              <Icon
                name={item.icon}
                family="MaterialIcons"
                size={24}
              />
              <Text>{item.label}</Text>
            </TouchableOpacity>)
          }
        </Block>
      </Card>
    </Block>)
}

export default QuickMenu;

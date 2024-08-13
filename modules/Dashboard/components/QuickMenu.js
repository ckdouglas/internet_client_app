import React from "react";
import { Block, Card, Text } from "galio-framework";
import { Icon } from "../../../components";

const QuickMenu = ({ menuItems }) => {
  return (
    <Block>
      <Text>Quick Menu</Text>
      <Card style={{
        margin: 10,
        marginTop: 16,
        paddingTop: 0,
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
            menuItems.map((item) => <Block center key={item.name}>
              <Icon
                name={item.icon}
                family="MaterialIcons"
                size={24}
              />
              <Text>{item.label}</Text>
            </Block>)
          }
        </Block>
      </Card>
    </Block>)
}

export default QuickMenu;

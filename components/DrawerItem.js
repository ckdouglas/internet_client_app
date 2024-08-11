import React from "react";
import { StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Block, Text, theme } from "galio-framework";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Icon from "./Icon";
import defaultTheme from "../constants/Theme";
import AntDesign from '@expo/vector-icons/AntDesign';

class DrawerItem extends React.Component {
  renderIcon = () => {
    const { title, focused } = this.props;

    switch (title) {
      case "Dashboard":
        return (
          <Icon
            name="shop"
            family="ArgonExtra"
            size={14}
            color={focused ? defaultTheme.COLORS.WHITE : defaultTheme.COLORS.PRIMARY}
          />
        );
      case "Finance":
        return (
          <MaterialCommunityIcons
            name="finance"
            size={24}
            color={focused ? defaultTheme.COLORS.WHITE : defaultTheme.COLORS.PRIMARY} />
        );
      case "Payment":
        return (
          <Icon
            name="payment"
            family="MaterialIcons"
            size={20}
            color={focused ? defaultTheme.COLORS.WHITE : defaultTheme.COLORS.PRIMARY}
          />
        );
      case "Statistics":
        return (
          <Icon
            name="chart-pie-35"
            family="ArgonExtra"
            size={14}
            color={focused ? defaultTheme.COLORS.WHITE : defaultTheme.COLORS.PRIMARY}
          />
        );
      case "Router Management":
        return (
          <Icon
            name="router"
            family="MaterialIcons"
            size={20}
            color={focused ? defaultTheme.COLORS.WHITE : defaultTheme.COLORS.PRIMARY}
          />
        );
      case "FAQs":
        return (
          <AntDesign
            name="questioncircle"
            size={24}
            color={focused ? defaultTheme.COLORS.WHITE : defaultTheme.COLORS.PRIMARY}
          />
        );

      default:
        return null;
    }
  };

  render() {
    const { focused, title, navigation } = this.props;

    const containerStyles = [
      styles.defaultStyle,
      focused ? [styles.activeStyle, styles.shadow] : null
    ];

    return (
      <TouchableOpacity
        style={{ height: 60 }}
        onPress={() =>
          title == "FAQs"
            ? Linking.openURL(
              "https://demos.creative-tim.com/argon-pro-react-native/docs/"
            ).catch(err => console.error("An error occurred", err))
            : navigation.navigate(title)
        }
      >
        <Block flex row style={containerStyles}>
          <Block middle flex={0.1} style={{ marginRight: 5 }}>
            {this.renderIcon()}
          </Block>
          <Block row center flex={0.9}>
            <Text
              size={15}
              bold={focused ? true : false}
              color={focused ? defaultTheme.COLORS.WHITE : "rgba(0,0,0,0.5)"}
            >
              {title}
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 16,
    paddingHorizontal: 16
  },
  activeStyle: {
    backgroundColor: defaultTheme.COLORS.ACTIVE,
    borderRadius: 4
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.1
  }
});

export default DrawerItem;

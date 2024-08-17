import { Block, Text } from "galio-framework";
import React from "react";
import { StyleSheet } from "react-native";

const Devices = () => {
  const devices = [
    {
      name: 'Device 1',
      ip: '12345'
    },
    {
      name: 'Device 2',
      ip: '6789'
    },
    {
      name: 'Device 3',
      ip: '017834'
    },
    {
      name: 'Device 4',
      ip: '74673'
    },
    {
      name: 'Device 5',
      ip: '645360'
    },
  ]

  return (
    <Block flex safe >
      <Block style={styles.container}>
        {
          devices.map((item) => <Block style={styles.card}>
            <Text>{`Name - ${item.name}`}</Text>
            <Text>{`IP - ${item.ip}`}</Text>
          </Block>)
        }
      </Block>
    </Block>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  card: {
    marginHorizontal: 10,
    borderRadius: 5,
    elevation: 5,
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 6
  }
})


export default Devices;

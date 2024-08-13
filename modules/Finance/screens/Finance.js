import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Block, Button, Text } from 'galio-framework';

const Finance = () => {
  return (
    <View style={styles.container}>
      <Block row style={styles.cardContainer}>
        <Block style={styles.card}>
          <Button
            color="transparent"
            round
            size="large"
            shadowless
            style={styles.button}
            onPress={() => console.log('Invoices Pressed')}>
            <Text color="info">Reciepts</Text>
          </Button>
        </Block>

        <Block style={styles.card}>
          <Button
            color="transparent"
            round
            size="large"
            shadowless
            style={styles.button}
            onPress={() => console.log('Statements Pressed')}>
            <Text color="success">Invoices</Text>
          </Button>
        </Block>
      </Block>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingTop: 20, // Adjust padding as needed to position at the top
  },
  cardContainer: {
    width: '100%',
    justifyContent: 'space-around',
  },
  card: {
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: 'white',
  },
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Finance;

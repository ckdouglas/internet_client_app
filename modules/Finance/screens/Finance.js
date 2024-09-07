import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Block, Button, Text } from 'galio-framework';

const Finance = ({ navigation }) => {
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
            onPress={() => navigation.navigate('Reciepts')}>
            <Text color="info">Receipts</Text>
          </Button>
        </Block>

        <Block style={styles.card}>
          <View style={styles.shadowWrapper}>
            <Button
              color="transparent"
              round
              size="large"
              shadowless
              style={styles.button}
              onPress={() => navigation.navigate('Invoices')}>
              <Text color="success">Invoices</Text>
            </Button>
          </View>
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
    backgroundColor: '#fff',
    paddingTop: 20, // Adjust padding as needed to position at the top
  },
  cardContainer: {
    width: '100%',
    justifyContent: 'space-around',
  },
  card: {
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 5, // Elevation for Android shadow
    borderRadius: 5, // Matching the card's border radius
  },
  shadowWrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Finance;

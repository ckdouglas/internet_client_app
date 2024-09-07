import React from 'react';
import { ScrollView, View, TextInput, TouchableOpacity } from 'react-native';
import { Block, Text } from 'galio-framework';

const paymentDetails = {
  accountBalance: '0.00 Sh',
  totalAmountDue: '100',
};

const PaymentScreen = ({navigation}) => {
  return (
    <Block safe flex style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Payment Information Card */}
        <Block style={styles.paymentCard}>

          <Text style={styles.headerLabel}>Account Balance</Text>
          <Text style={styles.accountBalance}>{paymentDetails.accountBalance}</Text>

          <Text style={styles.amountDueLabel}>Amount To Pay</Text>

          <Block row style={styles.inputContainer}>
            <View style={styles.currencyBox}>
              <Text style={styles.currencyText}>Sh</Text>
            </View>
            <TextInput
              style={styles.amountInput}
              value={paymentDetails.totalAmountDue}
              keyboardType="numeric"
            />
            <TouchableOpacity style={styles.payButton} onPress={() => {navigation.navigate('Pay')}}>
              <Text style={styles.payButtonText}>Pay</Text>
            </TouchableOpacity>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  contentContainer: {
    flexGrow: 1,
    //justifyContent: 'center',
    marginTop: 20,
    alignItems: 'center',
  },
  paymentCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8,
  },
  headerLabel: {
    fontSize: 16,
    color: '#888',
    marginBottom: 5,
  },
  accountBalance: {
    fontSize: 24,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  amountDueLabel: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencyBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: '#f5f5f5',
  },
  currencyText: {
    fontSize: 16,
    color: '#333',
  },
  amountInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  payButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    marginLeft: 0,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
};

export default PaymentScreen;

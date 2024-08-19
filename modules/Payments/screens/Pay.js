import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Block, Text } from 'galio-framework';
import { Picker } from '@react-native-picker/picker';

const PaymentForm = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [months, setMonths] = useState('');
    const [amount, setAmount] = useState('');

    const handlePayment = () => {
        if (phoneNumber && amount && months) {
            // Simulate a successful payment
            Alert.alert('Payment Successful', 'Your payment has been processed.', [
                { text: 'OK', onPress: () => navigation.navigate('PaymentPage') }
            ]);
        } else {
            Alert.alert('Payment Failed', 'Please complete all fields.', [
                { text: 'OK' }
            ]);
        }
    };

    return (
        <Block safe flex style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                    style={styles.input}
                    placeholder="07xxxxxxxx"
                    keyboardType="phone-pad"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                />
                <Text style={styles.label}>Months</Text>
                <Picker
                    selectedValue={months}
                    style={styles.picker}
                    onValueChange={(itemValue) => setMonths(itemValue)}
                >
                    <Picker.Item label="Select months" value="" />
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                    <Picker.Item label="5" value="5" />
                    <Picker.Item label="6" value="6" />
                </Picker>
                <Text style={styles.label}>Amount</Text>
                <TextInput
                    style={styles.input}
                    placeholder="2000"
                    keyboardType="numeric"
                    value={amount}
                    onChangeText={setAmount}
                />
                <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
                    <Text style={styles.payButtonText}>Pay</Text>
                </TouchableOpacity>
            </View>
        </Block>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    formContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 8,
    },
    label: {
        fontSize: 16,
        color: '#333',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    picker: {
        height: 50,
        width: '100%',
        marginBottom: 15,
    },
    payButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
    },
    payButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default PaymentForm;

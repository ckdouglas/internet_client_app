import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const NumberPicker = ({ value, onChange }) => {
    const increment = () => onChange(value + 1);
    const decrement = () => {
        if (value > 1) {
            onChange(value - 1);
        }
    };

    const handleChangeText = (text) => {
        // Only allow numeric input
        const numericValue = text.replace(/[^0-9]/g, '');
        onChange(parseInt(numericValue || '0', 10));
    };

    return (
        <View style={styles.pickerContainer}>
            <TouchableOpacity
                onPress={decrement}
                style={[styles.button, value <= 1 && styles.disabledButton]}
                disabled={value <= 1}
            >
                <Text style={[styles.buttonText, value <= 1 && styles.disabledButtonText]}>-</Text>
            </TouchableOpacity>
            <TextInput
                style={styles.valueContainer}
                value={String(value)}
                onChangeText={handleChangeText}
                keyboardType="numeric"
                textAlign="center"
            />
            <TouchableOpacity onPress={increment} style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const Pay = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [months, setMonths] = useState(1); // Default to 1 month
    const [amount, setAmount] = useState('2000'); // Amount as text input
    const [baseAmount] = useState('2000'); // Base amount

    const handlePayment = () => {
        if (phoneNumber && amount && months) {
            Alert.alert('Payment Successful', `Your payment of ${amount} has been processed.`, [
                { text: 'OK' }
            ]);
        } else {
            Alert.alert('Payment Failed', 'Please complete all fields.', [
                { text: 'OK' }
            ]);
        }
    };

    const handlePhoneNumberChange = (text) => {
        // Only allow numeric input
        const numericValue = text.replace(/[^0-9]/g, '');
        setPhoneNumber(numericValue);
    };

    const handleAmountChange = (text) => {
        // Only allow numeric input
        const numericValue = text.replace(/[^0-9]/g, '');
        setAmount(numericValue);

        if (numericValue) {
            const newMonths = Math.max(Math.floor(parseInt(numericValue) / parseInt(baseAmount)), 1);
            setMonths(newMonths);
        } else {
            setMonths(1); // Reset to 1 if input is cleared
        }
    };

    const handleMonthsChange = (newMonths) => {
        setMonths(newMonths);
        const newAmount = parseInt(baseAmount) * newMonths;
        setAmount(String(newAmount));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
                style={styles.input}
                placeholder="07xxxxxxxx"
                keyboardType="numeric"
                value={phoneNumber}
                onChangeText={handlePhoneNumberChange}
            />

            <Text style={styles.label}>Months</Text>
            <NumberPicker value={months} onChange={handleMonthsChange} />

            <Text style={styles.label}>Amount</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter amount"
                keyboardType="numeric"
                value={amount}
                onChangeText={handleAmountChange}
            />

            <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
                <Text style={styles.payButtonText}>Pay</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        marginTop: 25
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
    pickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    button: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 15,
        backgroundColor: '#f0f0f0',
    },
    disabledButton: {
        backgroundColor: '#ddd',
        borderColor: '#aaa',
    },
    buttonText: {
        fontSize: 18,
        color: '#333',
    },
    disabledButtonText: {
        color: '#aaa',
    },
    valueContainer: {
        width: 50,
        textAlign: 'center',
        fontSize: 18,
        color: '#333',
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

export default Pay;

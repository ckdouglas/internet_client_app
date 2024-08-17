import React, { useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Block, Text, Input, Icon } from 'galio-framework';
import DatePicker from '../../../components/DatePicker';

const payments = [
    { id: '202401009260', date: '2024-07-11', amount: '4500.00 Sh' },
    { id: '202401007629', date: '2024-06-12', amount: '4500.00 Sh' },
    { id: '202401005985', date: '2024-05-08', amount: '4500.00 Sh' },
    { id: '202401004501', date: '2024-04-08', amount: '4500.00 Sh' },
    { id: '202401002926', date: '2024-03-06', amount: '2500.00 Sh' },
    { id: '202401001499', date: '2024-02-05', amount: '2500.00 Sh' },
    { id: '202401009260', date: '2024-07-11', amount: '4500.00 Sh' },
    { id: '202401007629', date: '2024-06-12', amount: '4500.00 Sh' },
    { id: '202401005985', date: '2024-05-08', amount: '4500.00 Sh' }
];

const Reciepts = ({ navigation }) => {

    const [startDate, setStartDate] = useState('2024-08-10');
    const [endDate, setEndDate] = useState('2024-08-11');
    
    const renderItem = ({ item }) => (
        <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate('View Reciept', { item })}
        >
            <Block style={styles.paymentCard}>
                <Text style={styles.paymentLabel}>Payment</Text>
                <Block row space="between" style={styles.paymentDetails}>
                    <Text style={styles.paymentId}># {item.id}</Text>
                    <Text style={styles.paymentDate}>Date {item.date}</Text>
                </Block>
                <Text style={styles.paymentAmount}>Total {item.amount}</Text>
            </Block>
        </TouchableOpacity>
    );

    return (
        <Block safe flex style={styles.container}>
            {/* Date Range Input */}
            <DatePicker
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
            />
            <FlatList
                data={payments}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.paymentList}
            />
        </Block>
    );
};

const styles = {
    container: {
        padding: 20,
        backgroundColor: '#f4f4f4',
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    searchContainer: {
        marginBottom: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },
    searchInput: {
        flex: 1,
        height: 40,
        fontSize: 16,
    },
    paymentList: {
        paddingBottom: 20,
    },
    paymentCard: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    paymentLabel: {
        backgroundColor: '#4caf50',
        color: '#fff',
        padding: 5,
        borderRadius: 4,
        marginBottom: 10,
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        fontSize: 14,
    },
    paymentDetails: {
        marginBottom: 5,
    },
    paymentId: {
        color: '#333',
        fontSize: 14,
    },
    paymentDate: {
        color: '#333',
        fontSize: 14,
    },
    paymentAmount: {
        color: '#333',
        fontSize: 16,
        fontWeight: 'bold',
    },
};

export default Reciepts;

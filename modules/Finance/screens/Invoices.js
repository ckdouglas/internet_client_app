import React, { useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Block, Text, Input, Icon } from 'galio-framework';
import DatePicker from '../../../components/DatePicker';

const invoices = [
    { id: '202401009260', date: '2024-07-12', amount: '4500.00 Sh', paymentDate: '2024-07-11' },
    { id: '202401007629', date: '2024-06-12', amount: '4500.00 Sh', paymentDate: '2024-06-12' },
    { id: '202401005985', date: '2024-05-08', amount: '4500.00 Sh', paymentDate: '2024-05-08' },
    { id: '202401004501', date: '2024-04-08', amount: '4500.00 Sh', paymentDate: '2024-04-08' },
    { id: '202401002926', date: '2024-03-06', amount: '2500.00 Sh', paymentDate: '2024-03-06' },
    { id: '202401001499', date: '2024-02-05', amount: '2500.00 Sh', paymentDate: '2024-02-05' },
    { id: '202401009260', date: '2024-07-12', amount: '4500.00 Sh', paymentDate: '2024-07-11' },
    { id: '202401007629', date: '2024-06-12', amount: '4500.00 Sh', paymentDate: '2024-06-12' },
    { id: '202401005985', date: '2024-05-08', amount: '4500.00 Sh', paymentDate: '2024-05-08' },
    { id: '202401004501', date: '2024-04-08', amount: '4500.00 Sh', paymentDate: '2024-04-08' },
    { id: '202401002926', date: '2024-03-06', amount: '2500.00 Sh', paymentDate: '2024-03-06' },
    { id: '202401001499', date: '2024-02-05', amount: '2500.00 Sh', paymentDate: '2024-02-05' }
];

const Invoices = ({ navigation }) => {
    
    const [startDate, setStartDate] = useState('2024-08-10');
    const [endDate, setEndDate] = useState('2024-08-11');

    const renderItem = ({ item }) => (
        <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate('View Invoice', { item })}
        >
            <Block style={styles.invoiceCard}>
                <Block row space="between" style={styles.invoiceHeader}>
                    <Text style={styles.invoiceLabel}>Recurring invoice</Text>
                    <Text style={styles.paidLabel}>Paid</Text>
                </Block>
                <Block row space="between" style={styles.invoiceDetails}>
                    <Text style={styles.invoiceId}># {item.id}</Text>
                    <Text style={styles.invoiceDate}>Date {item.date}</Text>
                </Block>
                <Block row space="between" style={styles.invoiceDetails}>
                    <Text style={styles.invoiceAmount}>Total {item.amount}</Text>
                    <Text style={styles.paymentDate}>Payment date {item.paymentDate}</Text>
                </Block>
            </Block>
        </TouchableOpacity>
    );

    return (
        <Block safe flex style={styles.container}>
            <DatePicker
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
            />
            <FlatList
                data={invoices}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.invoiceList}
            />
        </Block>
    );
};

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    header: {
        marginBottom: 20,
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
    invoiceList: {
        paddingBottom: 20,
    },
    invoiceCard: {
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
    invoiceHeader: {
        marginBottom: 10,
    },
    invoiceLabel: {
        backgroundColor: '#333',
        color: '#fff',
        padding: 5,
        borderRadius: 4,
        fontWeight: 'bold',
        fontSize: 14,
    },
    paidLabel: {
        backgroundColor: '#4caf50',
        color: '#fff',
        padding: 5,
        borderRadius: 4,
        fontWeight: 'bold',
        fontSize: 14,
    },
    invoiceDetails: {
        marginBottom: 5,
    },
    invoiceId: {
        color: '#333',
        fontSize: 14,
    },
    invoiceDate: {
        color: '#333',
        fontSize: 14,
    },
    invoiceAmount: {
        color: '#333',
        fontSize: 16,
        fontWeight: 'bold',
    },
    paymentDate: {
        color: '#333',
        fontSize: 14,
    },
};

export default Invoices;

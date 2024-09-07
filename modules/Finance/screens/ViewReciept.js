import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Block, Text, Button } from 'galio-framework';
import { StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';


const ViewReceipt = () => {
    const route = useRoute();
    const {item} = route.params

    const handlePrint = () => {
        // Implement the functionality to print or save as PDF
        console.log('Print PDF');
    };

    return (
        <Block safe flex style={styles.container}>
            <Block card style={styles.card}>
                {/* Payment Details */}
                <ScrollView contentContainerStyle={styles.detailsContainer}>
                    <Block row space="between" style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Number:</Text>
                        <Text style={styles.detailValue}>{item.receipt_number}</Text>
                    </Block>
                    <Block row space="between" style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Receipt date:</Text>
                        <Text style={styles.detailValue}>{item.date}</Text>
                    </Block>
                    <Block row space="between" style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Transaction ID:</Text>
                        <Text style={styles.detailValue}>{item.field_1}</Text>
                    </Block>
                    <Block row space="between" style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Amount:</Text>
                        <Text style={styles.detailValue}>{item.amount}</Text>
                    </Block>
                    <Block row space="between" style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Comment:</Text>
                        <Text style={styles.totalValue}>{item.comment}</Text>
                    </Block>
                </ScrollView>
                {/* Print Button */}
                <TouchableOpacity onPress={handlePrint} style={styles.buttonContainer}>
                    <Button color="green" style={styles.printButton}>
                        Print PDF
                    </Button>
                </TouchableOpacity>
            </Block>
        </Block>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
    },
    card: {
        width: '90%',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: '#fff',
    },
    detailsContainer: {
        paddingVertical: 20,
    },
    detailRow: {
        marginBottom: 15,
    },
    detailLabel: {
        fontSize: 16,
        color: '#333',
    },
    detailValue: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
    },
    totalValue: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
    },
    buttonContainer: {
        marginTop: 20,
    },
    printButton: {
        width: '100%',
    },
});

export default ViewReceipt;

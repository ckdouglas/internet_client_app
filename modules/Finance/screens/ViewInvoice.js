import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Block, Text, Button } from 'galio-framework';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { generateInvoiceHTML } from '../utils';

const ViewInvoice = () => {
    const route = useRoute();
    const { item: invoice } = route.params;


    const printToPDF = async () => {
        const html = generateInvoiceHTML(invoice);
        const { uri } = await Print.printToFileAsync({ html, base64: false });
        await Sharing.shareAsync(uri);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.section}>
                <View style={styles.row}>
                    <Text style={styles.label}>Number:</Text>
                    <Text style={styles.value}>{invoice.number}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Invoice date:</Text>
                    <Text style={styles.value}>{invoice.date_created}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Payment date:</Text>
                    <Text style={styles.value}>{invoice.date_payment}</Text>
                </View>
            </View>

            <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderText}>Description</Text>
                <Text style={styles.tableHeaderText}>Qty</Text>
                <Text style={styles.tableHeaderText}>Unit</Text>
                <Text style={styles.tableHeaderText}>Tax(%)</Text>
            </View>

            {invoice.items.map((item, index) => (
                <View key={index} style={styles.tableRow}>
                    <Text style={styles.tableDataText}>{item.description}</Text>
                    <Text style={styles.tableDataText}>{item.quantity}</Text>
                    <Text style={styles.tableDataText}>{item.tax}</Text>
                </View>
            ))}

            <View style={styles.section}>
                <View style={styles.row}>
                    <Text style={styles.label}>Total without tax:</Text>
                    <Text style={styles.value}>{invoice.total}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Tax:</Text>
                    <Text style={styles.value}>0.0000</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Total:</Text>
                    <Text style={styles.value}>{invoice.total}</Text>
                </View>
            </View>

            {/* Print Button */}
            <Button color="green" t style={styles.printButton} title="Download Invoice" onPress={printToPDF}>Print PDF</Button>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    section: {
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    label: {
        fontSize: 16,
        color: '#666',
    },
    value: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f4f4f4',
        padding: 12,
        marginBottom: 8,
    },
    tableHeaderText: {
        fontWeight: 'bold',
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    tableDataText: {
        fontSize: 16,
    },
    buttonContainer: {
        marginTop: 20,
    },
    printButton: {
        width: '100%',

    },
});

export default ViewInvoice;

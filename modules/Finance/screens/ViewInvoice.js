import React from 'react';
import { ScrollView, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Block, Text, Button } from 'galio-framework';
import { useNavigation } from '@react-navigation/native';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';

const ViewInvoice = ({ navigation }) => {

    // Data object for the invoice
    const invoiceData = {
        number: '202401009260',
        documentDate: '2024-07-12',
        paymentDate: '2024-07-11',
        items: [
            {
                description: 'HOME 17MBPS',
                qty: 1,
                unit: '0.0', // Assuming '0.0' is for the unit price or unit description
                tax: '0.0',
            },
        ],
        totalWithoutTax: '4500.00 Sh',
        tax: '0.00 Sh',
        total: '4500.00 Sh',
    };

    const generateInvoiceHTML = () => {
        const itemsHTML = invoiceData.items.map(item => `
            <tr class="item">
                <td>${item.description}</td>
                <td>${item.qty}</td>
                <td>${item.unit}</td>
                <td>${item.tax}</td>
            </tr>
        `).join('');

        return `
            <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 20px;
                    }
                    .invoice-box {
                        width: 100%;
                        padding: 30px;
                        border: none;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
                        font-size: 16px;
                        line-height: 24px;
                        color: #555;
                    }
                    .invoice-box table {
                        width: 100%;
                        line-height: inherit;
                        text-align: left;
                    }
                    .invoice-box table td {
                        padding: 5px;
                        vertical-align: top;
                    }
                    .invoice-box table tr td:nth-child(2) {
                        text-align: right;
                    }
                    .invoice-box table tr.top table td {
                        padding-bottom: 20px;
                    }
                    .invoice-box table tr.top table td.title {
                        font-size: 45px;
                        line-height: 45px;
                        color: #333;
                    }
                    .invoice-box table tr.information table td {
                        padding-bottom: 40px;
                    }
                    .invoice-box table tr.heading td {
                        background: #eee;
                        border-bottom: 1px solid #ddd;
                        font-weight: bold;
                    }
                    .invoice-box table tr.details td {
                        padding-bottom: 20px;
                    }
                    .invoice-box table tr.item td {
                        border-bottom: 1px solid #eee;
                    }
                    .invoice-box table tr.item.last td {
                        border-bottom: none;
                    }
                    .invoice-box table tr.total td:nth-child(2) {
                        border-top: 2px solid #eee;
                        font-weight: bold;
                    }
                    .signature {
                        margin-top: 30px;
                        font-family: 'Brush Script MT', cursive;
                        font-size: 20px;
                        text-align: right;
                        color: #555;
                    }
                </style>
            </head>
            <body>
                <div class="invoice-box">
                    <table>
                        <tr class="top">
                            <td colspan="2">
                                <table>
                                    <tr>
                                        <td class="title">
                                            <img src="LOGO_URL" style="width:100%; max-width:156px;">
                                        </td>
                                        <td>
                                            Invoice #: ${invoiceData.number}<br>
                                            Document Date: ${invoiceData.documentDate}<br>
                                            Payment Date: ${invoiceData.paymentDate}
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr class="heading">
                            <td>Item</td>
                            <td>Details</td>
                        </tr>
                        ${itemsHTML}
                        <tr class="total">
                            <td>Total without tax:</td>
                            <td>${invoiceData.totalWithoutTax}</td>
                        </tr>
                        <tr class="total">
                            <td>Tax:</td>
                            <td>${invoiceData.tax}</td>
                        </tr>
                        <tr class="total">
                            <td>Total:</td>
                            <td>${invoiceData.total}</td>
                        </tr>
                    </table>
                    <div class="signature">
                        <p>Your Reliable Internet Partner</p>
                    </div>
                </div>
            </body>
            </html>
        `;
    };

    const printToPDF = async () => {
        const html = generateInvoiceHTML();
        const { uri } = await Print.printToFileAsync({ html, base64: false });
        await Sharing.shareAsync(uri);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.section}>
                <View style={styles.row}>
                    <Text style={styles.label}>Number:</Text>
                    <Text style={styles.value}>{invoiceData.number}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Document date:</Text>
                    <Text style={styles.value}>{invoiceData.documentDate}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Payment date:</Text>
                    <Text style={styles.value}>{invoiceData.paymentDate}</Text>
                </View>
            </View>

            <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderText}>Description</Text>
                <Text style={styles.tableHeaderText}>Qty</Text>
                <Text style={styles.tableHeaderText}>Unit</Text>
                <Text style={styles.tableHeaderText}>Tax(%)</Text>
            </View>

            {invoiceData.items.map((item, index) => (
                <View key={index} style={styles.tableRow}>
                    <Text style={styles.tableDataText}>{item.description}</Text>
                    <Text style={styles.tableDataText}>{item.qty}</Text>
                    <Text style={styles.tableDataText}>{item.unit}</Text>
                    <Text style={styles.tableDataText}>{item.tax}</Text>
                </View>
            ))}

            <View style={styles.section}>
                <View style={styles.row}>
                    <Text style={styles.label}>Total without tax:</Text>
                    <Text style={styles.value}>{invoiceData.totalWithoutTax}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Tax:</Text>
                    <Text style={styles.value}>{invoiceData.tax}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Total:</Text>
                    <Text style={styles.value}>{invoiceData.total}</Text>
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

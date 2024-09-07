const generateInvoiceHTML = (invoice) => {
    const itemsHTML = invoice.items.map(item => `
        <tr class="item">
            <td>${item.description}</td>
            <td>${item.quantity}</td>
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
                                        Invoice #: ${invoice.number}<br>
                                        Document Date: ${invoice.date_created}<br>
                                        Payment Date: ${invoice.date_payment}
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
                        <td>${invoice.total}</td>
                    </tr>
                    <tr class="total">
                        <td>Tax:</td>
                        <td>${invoice.tax}</td>
                    </tr>
                    <tr class="total">
                        <td>Total:</td>
                        <td>${invoice.total}</td>
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

export { generateInvoiceHTML }
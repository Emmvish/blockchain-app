import React from 'react';

const Address = ({addressData}) => {
    return (
        <div>
            <table>
                {
                    (addressData.addressTransactions.length > 0) ? (
                    <tr style={{backgroundColor: "goldenrod"}}>
                        <td className="tab-head">Sender</td>
                        <td className="tab-head">Receiver</td>
                        <td className="tab-head">Amount</td>
                    </tr>) : ''
                }
                {   
                    addressData.addressTransactions.map((tx, index) => {
                        if(index%2===0) {
                            return (
                                <tr className="primary-row">
                                    <td>{tx.sender}</td>
                                    <td>{tx.recipient}</td>
                                    <td>{tx.amount}</td>
                                </tr>
                            )
                        } else {
                            return (
                                <tr className="alternate-row">
                                    <td>{tx.sender}</td>
                                    <td>{tx.recipient}</td>
                                    <td>{tx.amount}</td>
                                </tr>
                            )
                        }
                    })
                }
            </table>
            <h3>Balance: {addressData.addressBalance}</h3>
        </div>
    )
}

export default Address;
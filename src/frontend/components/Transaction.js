import React from 'react';

const Transaction = (props) => {
    return (
        <table>
            <tr className="primary-row">
                <td>Sender</td>
                <td>{props.transaction.sender}</td>
            </tr>
            <tr className="alternate-row">
                <td>Recepient</td>
                <td>{props.transaction.recipient}</td>
            </tr>
            <tr className="primary-row">
                <td>Amount</td>
                <td>{props.transaction.amount}</td>
            </tr>
            <tr className="alternate-row">
                <td>Block Index</td>
                <td>{props.block.index}</td>
            </tr>
        </table>
    )
}

export default Transaction;
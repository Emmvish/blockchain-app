import React from 'react';

const Block = (props)=>{
    return (
        <table>
            <tr className="primary-row">
                <td>Block Hash</td>
                <td>{props.block.hash}</td>
            </tr>
            <tr className="alternate-row">
                <td>Index</td>
                <td>{props.block.index}</td>
            </tr>
            <tr className="primary-row">
                <td>Timestamp</td>
                <td>{props.block.timestamp}</td>
            </tr>
            <tr className="alternate-row">
                <td>Nonce</td>
                <td>{props.block.nonce}</td>
            </tr>
            <tr className="primary-row">
                <td>Previous Block Hash</td>
                <td>{props.block.previousBlockHash}</td>
            </tr>
            <tr className="alternate-row">
                <td>Number of Transactions</td>
                <td>{props.block.transactions.length}</td>
            </tr>
        </table>
    )
}

export default Block;
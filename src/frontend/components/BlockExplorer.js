import React, { useState } from 'react';

import Address from './Address';
import Block from './Block';
import Transaction from './Transaction';
import Selection from './Selection';

const BlockExplorer = () => {
    
    const [comp, setComp] = useState("");
    const [data, setData] = useState({});

    const selectComponent = (val) => {
        setComp(val);
    }

    const putData = (data) => {
        setComp("");
        setData(data);
    }
    
    return (
        <div>
            <Selection selectComponent={selectComponent} putData={putData}/>
            <div className="container">
                { (comp === 'block') ? (<div><Block block={data.block}/></div>) : (<div></div>) }
                { (comp === 'address') ? (<div><Address addressData={data.addressData}/></div>) : (<div></div>) }
                { (comp === 'transaction') ? (<div><Transaction transaction={data.transaction} block={data.block}/></div>) : (<div></div>) }
            </div>
        </div>
    )
}

export default BlockExplorer;
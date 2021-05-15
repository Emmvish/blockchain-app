import axios from 'axios';
import React, { useState } from 'react';

const Selection = (props) => {
    
    const [query, setQuery] = useState("");
    const [term, setTerm] = useState("");
    const [placeholder, setPlaceholder] = useState("");

    const findPlaceHolder = (qr) => {
        switch(qr){
            case 'transaction':
                setPlaceholder('Enter Transaction ID')
                return;
            case 'block':
                setPlaceholder('Enter Block Hash')
                return;
            case 'address':
                setPlaceholder('Enter Address')
                return;
            default: 
                setPlaceholder('');
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        axios.get(`/${query}/${term}`).then((res)=>{
            setTerm("");
            for(const key in res.data) {
                if(res.data[key] === null){
                    throw new Error();
                }
            }
            props.putData(res.data);
            props.selectComponent(query);
        }).catch(()=>{
            alert(`This ${query} was NOT found in the Blockchain!`)
            setTerm("");
        })
    }
    
    return (
        <div className="container">
            <h1>BLOCK EXPLORER APP</h1>
            <form onSubmit={onSubmit}>
                <select value={query} onChange={(e)=>{ e.persist(); setQuery(e.target.value); findPlaceHolder(e.target.value); }}>
                    <option value="">Select a Query Method...</option>
                    <option value="block">Block Hash</option>
                    <option value="transaction">Transaction ID</option>
                    <option value="address">Address</option>
                </select>
                <input type="text" placeholder={placeholder} value={term} onChange={(e)=>{ e.persist(); setTerm(e.target.value); }}/> 
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Selection;
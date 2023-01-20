import React, { useState } from "react";

const BANK_API = "https://my-json-server.typicode.com/aligarad/server/transactions"

function AddTransaction( {addTransaction} ){
    const [date, setDate] = useState(new Date())
    const [amount, setAmount] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    function handleDateChange(event) {
        setDate(event.target.value);
    }
    function handleAmountChange(event) {
        setAmount(event.target.value);
    }
    function handleDescriptionChange(event) {
        setDescription(event.target.value);
    }
    function handleCategoryChange(event) {
        setCategory(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
      
      
        const formData = { date: date, amount:amount, description: description, category:category };
        fetch(BANK_API, {
          method: "POST",
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify(formData)
        })
          .then((r)=>r.json())
          .then((data)=>addTransaction(data))
      
    }
    
    return (
        <>
    
            <form onSubmit={handleSubmit}>
                <label htmlFor="date">Date:</label>
                <input placeholder="Enter Date" type="text" onChange={handleDateChange} value={date} />
                <label htmlFor="Amount">Amount:</label>
                <input placeholder="Enter Amount" type="text" onChange={handleAmountChange} value={amount} />
                <label htmlFor="description">Description:</label>
                <input placeholder="Enter Description" type="text" onChange={handleDescriptionChange} value={description} />
                <label htmlFor="category">Category:</label>
                <input placeholder="Enter Category" type="text" onChange={handleCategoryChange} value={category} />
                <button type="submit">Add Transaction</button>
            </form>
        </>
    )
}
export default AddTransaction;
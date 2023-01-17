import React from "react";
import { useState,useEffect } from "react";

const Form = ({className, removeTransaction}) => {
   

    let [category,setCategory] = useState(null)
    let [description,setDescription] = useState(null)
    let [amount,setAmount] = useState(null)
    let [date,setDate] = useState(null)

    let handleDescription = (value) => {
        setDescription(value)
        console.log(value)
    }
    let handleDate= (value) => {
        setDate(value)
        console.log(value)
    }
    let handleAmount = (value) => {
        setAmount(value)
        console.log(value)
    }
    let handleCategory = (value) => {
        setCategory(value)
        console.log(value)
    }
 
    let newObj = {
        date,
        description,
        category,
        amount
    }

    let handleSubmit = () =>{
        fetch("http://localhost:8001/transactions",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newObj)
        })
        .then((response) =>{ console.log(response)})
    }

    let logAns = (e) => {
    e.preventDefault()
    console.log(newObj)}


    return ( 
        <form className={className}>
            <button onClick={removeTransaction} id="remove-transaction">X</button>
        <select onClick = {(e)=>{
            handleCategory(e.target.value)
        }} id="categories">
            <option>Food</option>
            <option>Fashion</option>
            <option>Gift</option>
            <option>Transportation</option>
            <option>Food</option>
         </select>
         <br/>
           <label for = "textarea">Description</label>
           <br/>
           <textarea onChange = {(e)=>{handleDescription(e.target.value)}} value = {description}></textarea>
           <br/>
           <label for = "amountInput">Amount </label>
           <br/>
           <input onChange = {(e)=>{handleAmount(e.target.value)}} value = {amount} type="number" id="amountInput"></input>
           <br/>
           <label for = "amountInput">Date</label>
           <br/>
           <input onChange = {(e)=>{handleDate(e.target.value)}} value = {date} type="date" id="dateInput"></input>
           <br/>
           <button onClick={handleSubmit} id = "submit-button" type="submit">submit</button>
        </form>
     );
}
 
export default Form;
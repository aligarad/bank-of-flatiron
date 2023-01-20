import React from "react";

const BANK_API = "https://my-json-server.typicode.com/levy-web/flatiron-bank/transactions"


function Transactions({id, date, amount, description, category, onDeleteTodo}){
    function handleDelete() {
        // persist changes on server
        fetch(`${BANK_API}/${id}`, {
            method: "DELETE"
        })
        // then use onDeleteTodo to remove todo from state
        onDeleteTodo(id)
        
    }
    
    
    return(
        <>
            <table className="tableTransactions">
                <tbody>
                    <tr>            
                        <td>{date}</td>
                        <td>{amount}</td>
                        <td>{description}</td>
                        <td>{category}</td>
                        <td><button onClick={handleDelete} type="button">X</button></td>
                    </tr>
                </tbody>
            </table>
            
        </>
        
    )
}
export default Transactions;
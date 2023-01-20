import React, {useState} from 'react';
import Transactions from './Transaction.js';


function Bank({item, onDeleteTodo}){
    const [filterBy, setFilterBy] = useState("");

    const itemsToDisplay = item.filter((item) => {
        if ( filterBy === "") {
            return true
        }else{
            let searchData = item.description.toLowerCase().includes(filterBy)
            if(searchData){
                return true

            }            

        }

         
      });
    
      const itemsData = itemsToDisplay.map((listItem) => (
        <Transactions onDeleteTodo={onDeleteTodo}
        key={listItem.id}
        id={listItem.id}
        date={listItem.date} 
        amount={listItem.amount} 
        description={listItem.description} 
        category={listItem.category}/>
        

      ));
      
      function handleSearch(event) {
        setFilterBy(event.target.value.toLowerCase());
    
      }

    return(
        <div>

            <div className='searchSection'>
            <input  placeholder="Search Transaction" type="text" onChange={handleSearch} value={filterBy} />
            </div>           
            
            <table className="tableTransactions">
                <caption>BANK TRANSACTIONS</caption>
                <tbody>
                    <tr>
                    <th>DATE</th>
                    <th>AMOUNT</th>
                    <th>DESCRIPTION</th>
                    <th>CATEGORY</th>
                    <th>DELETE</th>
                    </tr>
                </tbody>
            </table>
            {itemsData}
        </div>
    )
}

export default Bank;
import React, { useState } from 'react'
import { IoBagCheck } from "react-icons/io5";
import { ImCross } from "react-icons/im";
function Output({setItems,items}) {

  if (!Array.isArray(items)) {
    return <p>No items to display</p>; // Fallback UI if items is not an array
  }

  return (
    <>
      <div className='output-container'>
        {items.map((item,index)=>(
            <Item 
                item={item} 
                key={index} 
                index={index} 
                setItems={setItems} 
                items={items}
            />
        ))}
      </div>
    </>
  )
}

function Item({item,index,setItems,items})
{
    const [clickyes,setClickYes]=useState(false);
    function handleDelete(index)
    {
        setItems((prevItems) => prevItems.filter((_, i) => i !== index));
    }
    return(
        <>
            <div className='item'>
                <p style={{ textDecoration: clickyes ? "line-through" : "none" }}>{item}</p>
    
                <IoBagCheck className='bag-btn-css' onClick={()=>setClickYes(!clickyes)} />
                <ImCross className='delete-btn-css' onClick={()=>handleDelete(index)}/>
            </div>
        </>
    )
}
export default Output

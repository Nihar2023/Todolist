import { useState } from "react"


function Input({items,setItems}) {
    const [name,setName]=useState("");
    function handleADDtaskbtn()
    {
        if(name)
        {
            if(items.includes(name))
            {
                setName('');
                return;
            }
            setItems([...items,name]);
            setName('');
        }
    }
  return (
    <>
      <div className="input-div">

        <input
            type="text"
            placeholder="enter the items..."
            onChange={(e)=>setName(e.target.value)} 
            value={name} 
            required 
            onKeyDown={(e)=>e.key==="Enter"? handleADDtaskbtn():''}
            className="input"
        />

        <button 
            onClick={handleADDtaskbtn} 
            style={{marginLeft:'10px'}}
            className="ADDtask-css"
        >Add Task</button>
      </div>

    </>
  )
}

export default Input

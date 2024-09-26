import { useState } from 'react'
import './App.css'
import Input from './Input';
import Output from './Output';
import { useEffect } from 'react';

const todokey="reacttodo";
function App() {
  const [items, setItems] = useState(() => {
    const rawtodos = localStorage.getItem(todokey);
    return rawtodos ? JSON.parse(rawtodos) : [];  // Ensure we return an array
  });

  // Store updated items in localStorage whenever 'items' changes
  useEffect(() => {
    localStorage.setItem(todokey, JSON.stringify(items));
  }, [items]); // Only update when 'items' changes
  return (
    <>
      <div className='container'>
        <div className='main-container'>
            <h1>Todo List</h1>
            <Input 
              items={items} 
              setItems={setItems}
            />

            <Output 
              items={items} 
              setItems={setItems}
            />
            
            {items.length>=1?<button onClick={()=>setItems([])} className='ClearAll-btn-css'>Clear All</button>:''}
        </div>
      </div>
    </>
  )
}

export default App

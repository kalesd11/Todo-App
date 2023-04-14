import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

function Todos() {
  const add = useSelector((state) => state.add);

  return (
    <div className="container">
     {add.length===0 ?<h2>No List</h2>:

      add.map((item, index) => {
        return item.newValue!==""?
      <Todo
        key={index}
        value={item}
        index={index + 1}
       
      />  :''  
      })
      }
    </div>
  );
}

export default Todos;

import { Modal } from "react-bootstrap";
import React, { useState } from "react";
import { ModalBody, ModalFooter } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../State/Actions";
import { Link } from "react-router-dom";

function NewQuiz() {
  let add = useSelector((state) => state.add);
  let dispatch = useDispatch();

 
  const [value, setValue] = useState("");
  const [show,setShow]=useState(false)
  
  const onChange = (e) => setValue(e.target.value);
  add ={ id: new Date().getTime(), newValue: value, isDone: false };
  return (
    <div className="container">
     
      <div>
        <form
          className="d-flex"
          onSubmit={(e) => {
            dispatch(actions.addTodo(add));
            e.preventDefault();
            setValue("");
            setShow(true)
          }}
        >
          <input
            type="text"
            placeholder="New Todo"
            value={value}
            className="form-control m-3 "
            onChange={onChange}
          />
          <button type="submit" className="btn btn-outline-success m-3" disabled={value?false:true}>
            Submit
          </button>
        </form>
      </div>
      <Modal show={show}>
      <ModalBody><b>Your Quiz Created Successfully</b></ModalBody>
      <ModalFooter>
      <Link to='/myquiz'>
      <button className="btn btn-outline-primary" onClick={()=>{setShow(false)}}>View</button>
      </Link>
       
        <button className="btn btn-outline-success" onClick={()=>setShow(false)}>Done</button>
      </ModalFooter>
      </Modal>
    </div>
  );
}

export default NewQuiz;

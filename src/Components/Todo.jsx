import React, { useState } from 'react'
import { Modal, ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap'
import { useDispatch} from 'react-redux'
import { actions } from '../State/Actions'


function Todo(props) {
  const [show,setShow]=useState(false)
  const [value,setValue]=useState('')
  // let add = useSelector(state=>state.add)
  const dispatch = useDispatch()
 

  return (
    <div className='container'>
      <div className="row m-3">
        <div className="col-1">
          {props.index}
        </div>
        <div className="col-1">
          <input type="checkbox" checked={props.value.isDone} onChange={()=>dispatch(actions.isChecked(props.value))}/>
        </div>
        <div className="col-6" style={{textDecoration:props.value.isDone?'line-through':'',
                                        fontStyle:props.value.isDone?"italic":''}}>
        <b> {props.value.newValue}</b>
        </div>
        <div className="col-2">
          <button className='btn btn-warning ' onClick={()=>setShow(true)}>Edit</button>
        </div>
        <div className="col-2">
          <button className='btn btn-danger' onClick={()=>dispatch(actions.Delete(props.value))}>Delete</button>
        </div>
      </div>
      <Modal show={show}>
        <ModalTitle>
          <h3>Edit Your Todo No {props.index}</h3>
        </ModalTitle>
        <ModalBody>
          <input type="text" value={value} placeholder={props.value.newValue} className='form-control' onChange={(e)=>setValue(e.target.value)}/>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-light"  onClick={()=>setShow(false)}>Cancel</button>
          <button className="btn btn-success" onClick={()=>{dispatch(actions.Edit(props.value,value));setShow(false);setValue('')}}>Update</button>  
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default Todo
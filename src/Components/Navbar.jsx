import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [show1,setShow1]=useState(false)
    const [show2,setShow2]=useState(true)
  return (
    <div>
        <nav className="navbar navbar-expand-md navbar-light bg-opacity-50 bg-secondary">
      <div className="container">
      <Link className="navbar-brand text-danger" to="/"><b>Quizzy</b></Link>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item m-2">
                    <Link className="btn btn-outline-dark" to="/" onClick={()=>{setShow1(false);setShow2(true)}} aria-current="page">Home <span className="visually-hidden">(current)</span></Link>
                </li>

               
            </ul>
            <ul className="d-flex list-unstyled">
                  
                <li className="nav-item">
                    <Link className="btn btn-info m-2 " hidden={show1} to="new_quiz" onClick={()=>{setShow1(true);setShow2(false)}} aria-current="page">New Quiz<span className="visually-hidden">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="btn btn-danger m-2 " hidden={show2} to="/" onClick={()=>{setShow2(true);setShow1(false)}} aria-current="page">Cancle<span className="visually-hidden">(current)</span></Link>
                </li>

                <li className="nav-item">
                    <Link className="btn btn-info m-2 " to="myquiz" aria-current="page">MyQuiz<span className="visually-hidden">(current)</span></Link>
                </li>
            </ul>
        </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
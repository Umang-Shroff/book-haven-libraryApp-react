import React from 'react'
import { useLocation } from "react-router-dom";
import './Bookid.css'
import { useNavigate } from "react-router-dom";

function Bookid(){

  const state = useLocation();
 
    // TO SHOW OBJECT OF CLICKED BOOK
    // console.log(state.state)

  const navigate = useNavigate();

  return (
    <>
    <div className="wrapper">
      <button className="button" onClick={()=>navigate('/books')}>Back</button>
      <div className="centerCard">
          <div className="imagetag"><img alt=""/></div>
          <div className="inputdiv">
            <h2>Title:  <p className="inputs">{state.state.title}</p></h2>
            <h2>ISBN:  <p className="inputs">{state.state.isbn}</p></h2>
            <h2>Page:<p className="inputs">{state.state.page}</p></h2>
            <h2>Authors:   <p className="inputs">{state.state.author}</p></h2>
          </div>
      </div>
    </div>
    </>
  );
}

export default Bookid

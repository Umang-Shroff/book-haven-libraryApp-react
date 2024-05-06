import React, { useEffect, useState } from 'react'
import './Books.css'
import {useNavigate} from 'react-router-dom';

const Books = () => {

  const [datas,setDatas] = useState([]);

  useEffect(()=>{
    fetch('https://softwium.com/api/books')
    .then(response=>response.json())
    .then(data=>setDatas(data))
  },[])

  const navigate = useNavigate();
  function handleClick(bookid, booktitle, bookisbn, bookauthor, bookpage){
    
    navigate('/books/id', { state: { id: bookid, title: booktitle, isbn: bookisbn, author: bookauthor, page: bookpage } });
  }

  return (
  <>
     <p style={{position:'relative', marginBottom:'50px'}}></p>
    <div className="row">
    {
      
      datas.map((book)=>{
        return <div className="column">
        <div key={book.id} className="card" 
          onClick={()=>{handleClick(book.id, book.title, book.isbn, book.authors[0], book.pageCount)}}
          >
            <div className="image"> 
              <img alt=""/> 
              <div className="middle">
                <div className="txt">View</div>
              </div>
            </div>
            
            <div className="info">
              {book.title}
              <p>Author: <span className="booksdivspan">{book.authors[0]}</span></p>
              <p>Page : <span className="booksdivspan">{book.pageCount}</span></p>
            </div>
          </div>
        </div>
        
      })
    }
</div>

  {/* FOR SHOWING DATA FROM API IN CONSOLE UNFILTERED */}
    {/* <div>
      {datas.map((book)=>{
        console.log(book)
      })}
    </div> */}
    
  </>
  )
}

export default Books
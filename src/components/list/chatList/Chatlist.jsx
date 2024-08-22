import React, { useState } from 'react'
import './chatlist.css'
import AddUser from './addUser/AddUser'

const Chatlist = () => {
    const[addMode, setAddMode] = useState(false)
  return (
    <div className='chatlist'>
         <img src={addMode ? "./minus.png" : "./plus.png"} alt="" className='add'
            onClick={() => setAddMode((prev) => !prev)}/>
        <div className="search">
            <div className="searchBar">
                <img src="/search.png" alt="" />
                <input type="text" placeholder="Search" />
            </div>
           
        </div>
        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hai</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hai</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hai</p>
            </div>
        </div>
        {addMode && <AddUser/>}
    </div>
  )
}

export default Chatlist
import React, { useState } from 'react'
import Modal from '../../components/Modal/Modal'

import "./State.css"

const State = () => {

const [bg, setbg] = useState("red")
const [counter, setcounter] = useState(0)
const [modalShow, setModalShow] =useState(false)


  return (
    <>
    <div style={{backgroundColor : bg}} className="main-body">
        <div className="color btn">
            <div className="counter">
                <h1>{counter}</h1>
                <button onClick={()=> setcounter( counter >= 20 ? 0 : counter + 1)}>+ +</button>
                <button onClick={()=> setcounter (counter <= 0 ? 20 : counter - 1)}>- -</button>
            </div>
            <button onClick={()=>setbg("red") }>red</button>
            <button onClick={()=> setbg ("green")}>green</button>
            <button onClick={()=> setbg ("orange")}>orange</button>
            <button onClick={()=> setbg ("orange")}>pink</button>
            <button onClick={()=> setbg ("tomato")}>tomato</button>
            <button onClick={()=> setbg ("Brown")}>Brown</button>
            <button onClick={()=> setbg ("Yellow")}>Yellow</button>
            <button onClick={()=> setbg ("Purple")}>Purple</button>
            <hr />

            {modalShow &&  (<Modal tittle="Sorobindo" status={setModalShow}>
              <h1>Lorem ipsum dolor sit amet.</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, neque!</p>
            </Modal>

                )}
           
            <button onClick={()=> setModalShow(true)}>Modal</button>
        </div>
        
    </div>
    

    
    </>
  )
}

export default State
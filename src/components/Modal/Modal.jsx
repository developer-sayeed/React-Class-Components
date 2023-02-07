import React from 'react'
import "./Modal.scss"

const Modal = ({children, tittle, status}) => {
  return (
    <>
    
    <div className="modal-blur">
        <div className="modal-wraper">
            <div className="modal-main">
              <div className="modal-header">
                <h3>{tittle}</h3>
                <span onClick={()=> status(false)}><i class='bx bx-x'></i></span>
              </div>
              <div className="modal-content">
             {children}</div>
            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Modal
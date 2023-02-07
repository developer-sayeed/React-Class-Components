import React, { useState } from 'react'
import Modal from '../../components/Modal/Modal'

const NewPost = () => {

    const [modalShow, setModalShow] =useState(false)
  return (
    <>
       {modalShow &&  (<Modal tittle="Sorobindo" status={setModalShow}>
              <h1>Lorem ipsum dolor sit amet.</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, neque!</p>
            </Modal>

                )}
    
    </>
  )
}

export default NewPost
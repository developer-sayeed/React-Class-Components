 
const Aleart = ({msg, type, hide}) => {
  return (
    <>
     <p className={`alert alert-${type}  d-flex justify-content-between`}>{msg} <button onClick={ ()=> hide({status : false, msg :"" ,type : ""})} className='btn btn-close'> </button> </p>

    </>
  )
}

export default Aleart
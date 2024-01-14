// import MainLayout from "./components/layouts/MainLayout"

import { useState } from "react"
import Button from "./components/ui/Button"
import Container from "./components/ui/Container"
import Modal from "./components/ui/Modal";

function App() {
  const [modal, setModal] = useState(false);

  const handleModalClose = ()=>{
    setModal((pre)=>!pre);
  }
  
  return (
    <div>
      <Container>
        {/* <h1>react reusable cimponents</h1> */}
        {/* <MainLayout></MainLayout> */}
        <div className=" h-screen w-full flex justify-center items-center">
        {/* <h1>react reusable components</h1>
          <button className="btn btn-primary">This is btn</button>
          <button className="btn btn-danger">This is btn2</button> */}
          {/* <Button className='bg-slate-400' Outline={false}></Button> */}
          <Button onClick={()=>setModal((pre)=>!pre)} variant='ghost'>open modal</Button>
          <Modal isOpen={modal} onClose={handleModalClose}>
            <Modal.Header> 
              <h1>this is modal title</h1>
              <Modal.CloseButton></Modal.CloseButton>
            </Modal.Header>          
            <p>this is modal content</p>
          </Modal>
        </div>
      </Container>
    </div>
  )
}

export default App

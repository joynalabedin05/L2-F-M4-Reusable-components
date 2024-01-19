// import MainLayout from "./components/layouts/MainLayout"

// import { useState } from "react"
// import Button from "./components/ui/Button"
import Container from "./components/ui/Container"
// import Modal from "./components/ui/Modal";
// import NormalForm from "./components/normalForm/NormalForm";
import Form from "./components/reusableForm/Form";
import { FormSection, FormSubmit, Input } from "./components/reusableForm";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";


function App() {
  // const [modal, setModal] = useState(false);

  // const handleModalClose = ()=>{
  //   setModal((pre)=>!pre);
  // }

  const {register, handleSubmit, formState:{ errors}} = useForm<TTest>();

  const onSubmit = (data: FieldValues)=>{
    console.log(data);
  }

  const TestSchema = z.object({
    name: z.string(),
    email: z.string().email(),
  });

  type TTest = z.infer<typeof TestSchema>
  
  return (
    <div>
      <Container>
        {/* <h1>react reusable cimponents</h1> */}
        {/* <MainLayout></MainLayout> */}
        {/* <div className=" h-screen w-full flex justify-center items-center"> */}
        {/* <h1>react reusable components</h1>
          <button className="btn btn-primary">This is btn</button>
          <button className="btn btn-danger">This is btn2</button> */}
          {/* <Button className='bg-slate-400' Outline={false}></Button> */}
          {/* <Button onClick={()=>setModal((pre)=>!pre)} variant='ghost'>open modal</Button> */}
          {/* <Modal isOpen={modal} onClose={handleModalClose}>
            <Modal.Header> 
              <h1>this is modal title</h1>
              <Modal.CloseButton></Modal.CloseButton>
            </Modal.Header>          
            <p>this is modal content</p>
          </Modal> */}
        {/* </div> */}

        {/* module-5 normal form */}

          {/* <NormalForm></NormalForm> */}

          <Form  onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}>
            <FormSection>
            <div className="w-full max-w-md">
            <label className="block" htmlFor="">Name</label>
            <input className="w-full" type="text" id="name" {...register('name')} />
            {
              errors.name && <span className="text-xs text-red-500">
                {errors.name.message}
              </span> 
            }
           </div>
            </FormSection>
            <Input type="email" register={register('email')} errors={errors} label="Email"></Input>
            <FormSubmit></FormSubmit>
          </Form>


      </Container>
    </div>
  )
}

export default App

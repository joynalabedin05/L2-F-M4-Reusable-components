import { useForm } from "react-hook-form";
import cn from "../../utils/cn";
import Button from "../ui/Button";


const NormalForm = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data)=>{
        console.log(data);
    }

    const double  = true;
    return (
        <form className={cn("border border-gray-300  shadow-sm rounded-md max-w-full p-5 mx-auto", {
          "max-w-5xl": double,
          "max-w-md": !double,
        })} onSubmit={handleSubmit(onSubmit)}>
          <div className={cn(" grid grid-cols-1 justify-items-center gap-5", {
            "md:grid-cols-2": double,
       
          })}>
          <div className="w-full max-w-md">
            <label className="block" htmlFor="">Name</label>
            <input className="" type="text" id="name" {...register('name')} />
           </div>
          <div className="w-full max-w-md">
            <label className="block" htmlFor="">Email</label>
            <input className="w-full" type="text" id="name" {...register('name')} />
           </div>
          <div className="w-full max-w-md">
            <label className="block" htmlFor="">Password</label>
            <input className="w-full" type="text" id="name" {...register('name')} />
           </div>
          <div className="w-full max-w-md">
            <label className="block" htmlFor="">Password</label>
            <select>
            <option>one</option>
            <option>two</option>
            <option>three</option>
           </select>
           </div>         
          <div className="w-full max-w-md">
            <label className="block" htmlFor="">Password</label>
           <textarea name="" id="" cols="30" rows="2"></textarea>
           </div>         
          <div className="w-full max-w-md">
            <label className="block" htmlFor="">Password</label>
          <input className=" " type="checkbox" name="" id="" />
           </div>         
          </div>
          <div className={cn(" grid grid-cols-1 justify-items-center gap-5", {
            "md:grid-cols-2 col-start-2": double,
       
          })}>
           <div className="w-full max-w-screen-md col-start-1 md:col-start-2 flex justify-end my-5">
            <Button className="w-full md:w-fit" type="submit">submit</Button>
            </div>
           </div>
        </form>
    );
};

export default NormalForm;
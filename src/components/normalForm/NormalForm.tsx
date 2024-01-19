import { FieldValues, useForm, FormProvider } from "react-hook-form";
import cn from "../../utils/cn";
import Button from "../ui/Button";
import {zodResolver} from '@hookform/resolvers/zod';
import { TNormalForm, signUpSchema } from "./validation";
import InputField from "./InputField";


const NormalForm = () => {
    const methods = useForm<TNormalForm>({
      // defaultValues: {name: 'mir', email: "fg@gmail"},
      resolver: zodResolver(signUpSchema) 
    });
    const onSubmit = (data: FieldValues)=>{
        console.log(data);
    }

    const {register, handleSubmit,watch, formState: {errors}} = methods;

    console.log(watch('name'));

    const double  = true;
    return (
      <FormProvider {...methods}>
        <form className={cn("border border-gray-300  shadow-sm rounded-md max-w-full p-5 mx-auto", {
          "max-w-5xl": double,
          "max-w-md": !double,
        })} onSubmit={handleSubmit(onSubmit)}>
          <div className={cn(" grid grid-cols-1 justify-items-center gap-5", {
            "md:grid-cols-2": double,
       
          })}>
          <div className="w-full max-w-md">
          <label className="block" htmlFor="">Something</label>

            <InputField></InputField>
           </div> 
           
          <div className="w-full max-w-md">
            <label className="block" htmlFor="">Email</label>
            <input className="w-full" type="email" id="email" {...register('email')} />
            {
              errors.email && <span className="text-xs text-red-500">
                {errors.email.message}
              </span> 
            }
           </div>
          <div className="w-full max-w-md">
            <label className="block" htmlFor="">Password</label>
            <input className="w-full" type="password" id="password" {...register('password', {minLength: 8})} />
            {
              errors.password && <span className="text-xs text-red-500">{errors.password.message}</span> 
            }
           </div>
          {/* <div className="w-full max-w-md">
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
           </div>          */}
          </div>
          <div className={cn(" grid grid-cols-1 justify-items-center gap-5", {
            "md:grid-cols-2 col-start-2": double,
       
          })}>
           <div className="w-full max-w-screen-md col-start-1 md:col-start-2 flex justify-end my-5">
            <Button className="w-full md:w-fit" type="submit">submit</Button>
            </div>
           </div>
        </form>
        </FormProvider>
    );
};

export default NormalForm;
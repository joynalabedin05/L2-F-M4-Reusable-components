import { useFormContext } from "react-hook-form";


const InputField = () => {
    const {register, watch} = useFormContext();
    console.log(watch('something'));
    return (
        <div>
            <input type="text" id="" {...register('something')} />
            {/* <label className="block" htmlFor="">Name</label> 
            <input className="" type="text" id="name" {...register('name')} />
            {
              errors.name && <span className="text-xs text-red-500">
                {errors.name.message}
              </span> 
            }  */}
        </div>
    );
};

export default InputField;
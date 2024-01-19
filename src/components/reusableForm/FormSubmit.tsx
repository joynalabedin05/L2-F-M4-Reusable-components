import { useContext } from "react";
import cn from "../../utils/cn";
import Button from "../ui/Button";
import { FormElementContex } from ".";


export const FormSubmit = () => {
    const {double}  = useContext(FormElementContex)
    return (
        <div className={cn(" grid grid-cols-1 justify-items-center gap-5", {
            "md:grid-cols-2 col-start-2": double,
       
          })}>
           <div className="w-full max-w-screen-md col-start-1 md:col-start-2 flex justify-end my-5">
            <Button className="w-full md:w-fit" type="submit">submit</Button>
            </div>
           </div>
    );
};


import { useContext } from "react";
import cn from "../../utils/cn";
import { FormElementContex } from ".";


export const FormSection = ({children}) => {
    const {double} = useContext(FormElementContex);
    return (
        <div  className={cn(" grid grid-cols-1 justify-items-center gap-5", {
            "md:grid-cols-2": double,
       
          })}>
           {children}
        </div>
    );
};


import { createContext } from "react";
import cn from "../../utils/cn";
import { TForm } from "../../types";

export const FormElementContex  = createContext<{double: boolean} | null>(null);
const Form = ({children, onSubmit, double=false}: TForm) => {
    
    return (
        <FormElementContex.Provider value={{double}}>
         <form onSubmit={onSubmit} className={cn("border border-gray-300  shadow-sm rounded-md max-w-full p-5 mx-auto", {
            "max-w-5xl": double,
            "max-w-md": !double,
          })}>
            {children}
        </form>
    </FormElementContex.Provider>
        
    );
};

export default Form;
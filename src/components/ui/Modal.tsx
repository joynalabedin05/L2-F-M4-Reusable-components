import { MouseEvent, ReactNode, createContext, useContext, useRef } from "react";
import cn from "../../utils/cn";
import { createPortal } from "react-dom";

const ModalContext = createContext<TModalContext | null>(null);

type TModalContext = {
    onClose: ()=>void;
}
type TModal ={
    isOpen: boolean;
    onClose: ()=>void;
    children: ReactNode;
}

type TCloseButton = {
    children?: ReactNode;
}
type THeader = TCloseButton;
const Modal = ({isOpen, onClose ,children}: TModal) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const handleOutsideClose = (e:MouseEvent )=>{
        console.log(e.target);
         if(!containerRef.current?.contains(e.target as Node)){
        onClose();
    }
    }

   
    return createPortal(
        <ModalContext.Provider value={{onClose}}>
            <div className={cn("fixed flex justify-center items-center inset-0 bg-gray-500/70 invisible Z-[999]", {
                'visible': isOpen,
            })}
            onClick={handleOutsideClose}
            >  
            <div ref={containerRef} className="bg-white w-full max-w-sm rounded-md p-4">
                {children}
            </div>  
            </div>
        </ModalContext.Provider>
       , document.getElementById('portal') as Element
    );
};

const CloseButton = ({children}: TCloseButton)=>{
    const {onClose} = useContext(ModalContext) as TModalContext;
    return <button className="ml-auto" onClick={onClose}>
       {
        children? children: ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 bg-red-500 text-white rounded-md">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>)
       }
  </button>
}

const Header = ({children}: THeader)=>{
    return <div className="flex justify-between items-center mb-3 w-full">{children}</div>
}
Modal.CloseButton = CloseButton;
Modal.Header = Header;

export default Modal;
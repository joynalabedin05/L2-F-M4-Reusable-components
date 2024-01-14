
// import {twMerge} from 'tailwind-merge';
// import {clsx} from 'clsx';
import cn from '../../utils/cn';
import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from 'react';

// `bg-red-400 ${className} ${variant=='outline'? 'border border-purple-500 bg-opacity-15': ''}`

type TRef = HTMLButtonElement;
type TVariant = 'solid'| 'ghost'| 'outline';
type TButtonOptions = {
    variant?: TVariant;
}

type TButton = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement > & TButtonOptions;

const Button = forwardRef<TRef, TButton>(({className, variant='solid',children, ...rest}, ref) => {
    const getVariant = (variant: TVariant)=>{
        switch (variant) {
            case 'outline': 
                return 'btn-outline';       
            case 'ghost': 
                return 'btn-ghost';       
            default:
                return 'btn-solid';
        }
    }
    return (
        // <button className={cn(
        //     'bg-red-500 btn-outline',
        //     {
        //         'border border-purple-400 bg-opacity-10': Outline,
        //     },
        //     className
        // )}>
        //     click
        // </button>
        <button ref={ref} {...rest} className={cn(
           getVariant(variant),
            className
        )}>
            {children}
        </button>
    );
});

export default Button;
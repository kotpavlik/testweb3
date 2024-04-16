'use client'
import React from 'react';


interface PrimaryButtonType {
    name: string
    disabled?: boolean
    buttonHandler?: () => void
    onSubmit?: (e?: React.FormEvent<HTMLFormElement>) => void;
    type?: "button" | "submit" | "reset" | undefined

}

const MyButton = React.memo(({ name, buttonHandler, disabled, type }: PrimaryButtonType) => {

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={buttonHandler}
            className='relative bg-amber-400 text-zinc-700 font-bold text-center overflow-hidden outline-none rounded-l-lg px-4 py-5 uppercase border-none cursor-pointer transition-all  before:absolute before:bottom-0 before:left-0 before:w-full before:h-full before:opacity-0 before:bg-gradient-to-t from-amber-300 hover:before:opacity-100 hover:scale-[1.1] active:scale-[1]'
        >
            <span
                className='relative z-10'>
                {name}
            </span>
        </button>
    );
})
export default MyButton;
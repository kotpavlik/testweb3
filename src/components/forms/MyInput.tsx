'use client'
import { HTMLInputTypeAttribute, useState } from "react";
import Image from 'next/image';
import eye_open from '../../public/svg/eye-svgrepo-com.svg';
import eye_closed from '../../public/svg/eye-closed-svgrepo-com.svg';

type PropsType = {
    id?: string
    name?: string
    type?: HTMLInputTypeAttribute
    label?: string
    value: string
    onChange?: {
        (e: React.ChangeEvent<any>): void;
        <T_1 = string | React.ChangeEvent<any>>(field: T_1): T_1 extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
    }
}


const MyInput = ({ label, id, name, type, value, onChange }: PropsType) => {

    const [focused, setFocused] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('')
    const [eye, setChangeEye] = useState<'password' | 'text'>('password')

    const handleFocus = () => {
        setFocused(true);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        const val = e.currentTarget.value
        setInputValue(val)
        setFocused(false)
    };


    const handleChangeEye = () => {
        eye === 'password' ? setChangeEye('text') : setChangeEye('password')
    }


    return (
        <div className="relative ">
            <input
                onFocus={handleFocus}
                onBlur={(e) => handleBlur(e)}
                onChange={onChange}
                id={id}
                name={name}
                type={name === 'password' ? eye : name}
                value={value}
                className="w-full py-4 px-3 border-solid border-b-[1.5px] border-b-black z-10 relative bg-transparent  focus:outline-none focus:border-amber-400"
            />
            <label className={`absolute left-3 top-4 cursor-text font-bold z-0 transition-all 
            ${focused || inputValue.length > 0 ? "top-[-12px]  text-amber-400 text-sm" : " text-gray-400"
                }`}>{label}</label>
            {name === 'password' ? eye === 'password' ?
                <div className="">
                    <Image onClick={handleChangeEye} src={eye_closed} alt="eye" className="w-6 absolute top-4 right-4 cursor-default z-20 " ></Image>
                </div> :
                <div className="">
                    <Image onClick={handleChangeEye} src={eye_open} alt="eye" className="w-6 absolute top-4 right-4 cursor-default z-20" ></Image>
                </div>
                : ''
            }
        </div>

    );
}
export default MyInput
'use client'
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import loginPNG from '../public/loginPNG.png';
import { motion } from 'framer-motion';
import bgCode from '../public/code.jpeg';
import MyInput from './forms/MyInput';
import MyButton from './forms/MyButton';
import { loginTC } from '@/redux/loginReducer/loginReducer';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';

type InitialValuesType = {
    email: string
    password: string
}

const Login = () => {

    const dispatch = useAppDispatch()
    const status = useAppSelector(state => state.App.status)
    const initialize = useAppSelector(state => state.App.initialized)
    const auth = useAppSelector(state => state.Login.auth)
    const router = useRouter()


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email('invalid email address').required('required'),
            password: Yup.string()
                .min(8, 'must be 8 characters long')
                .required('required')
        }),
        onSubmit: (values: InitialValuesType) => {
            dispatch(loginTC(values))
        }
    })

    if (auth) {
        redirect('/profile')
    }

    const redirectToRegistration = () => {
        router.push('/registration')
    }

    return (
        <div className=' w-screen h-screen' >
            <div className='flex'>
                <div className='w-1/2 h-screen bg-slate-50 relative overflow-hidden' >
                    <motion.h1
                        animate={{ x: -604 }}
                        transition={{ ease: "easeOut", duration: 1 }}
                        className='absolute top-4 right-[-600px] text-[80px] max-w-full leading-[110px] font-extrabold text-amber-400 drop-shadow-lg  z-10 uppercase cursor-default'>Loginization</motion.h1>
                    <form onSubmit={formik.handleSubmit}
                        className='flex flex-col items-end justify-center h-full'>
                        <div
                            className='relative mb-6 min-w-[350px]'>
                            <MyInput
                                name='email'
                                id='email'
                                label='Email'
                                type='text'
                                onChange={formik.handleChange}
                                value={formik.values.email} />
                            {formik.touched.email && formik.errors.email &&
                                <div className=' absolute top-[15px] left-[-200px] font-bold text-sm text-white animate-puls'>
                                    {formik.errors.email}
                                </div>}
                        </div>

                        <div className='relative mb-6 min-w-[350px]'>
                            <MyInput
                                name='password'
                                id='password'
                                label='Password'
                                type='password'
                                onChange={formik.handleChange}
                                value={formik.values.password} />
                            {formik.touched.password && formik.errors.password &&
                                <div className=' absolute top-[15px] left-[-200px] font-bold text-sm text-white animate-puls'>
                                    {formik.errors.password}
                                </div>}
                        </div>
                        <MyButton name='login' type='submit' />
                        <div className='mt-6'>
                            <MyButton name='registration' type='button' buttonHandler={redirectToRegistration} />
                        </div>
                    </form>

                </div>

                <div className='w-1/2 h-screen shadow-2xl relative overflow-hidden' >

                    <motion.span
                        animate={{ x: [0, 1160] }}
                        transition={{ ease: "easeOut", duration: 1 }}
                        className='absolute top-10 left-[-1160px] text-[150px] max-w-full leading-[110px] font-extrabold text-amber-400 drop-shadow-lg  z-10 uppercase cursor-auto'>
                        Hello Sweaty</motion.span>
                    <Image src={bgCode} alt='loginization'
                        className='object-cover opacity-5 w-full h-full z-0 absolute top-0 ' />
                    <Image src={loginPNG} alt='loginization'
                        className='object-contain w-full h-full  z-20 relative hover:scale-110  transition ease-in-out duration-300' />
                    <motion.span
                        animate={{ x: -830 }}
                        transition={{ ease: "easeOut", delay: .2, duration: .5 }}
                        className='absolute bottom-10 xl:text-[80px] text-[150px] right-[-800px] max-w-full leading-[110px] font-extrabold text-amber-400 drop-shadow-lg  z-30 uppercase cursor-default transition ease-in-out duration-300  hover:drop-shadow-[-2px_-2px_15px_rgba(230,0,0,1)] '>
                        Go Login</motion.span>

                </div>
            </div>
        </div>

    );
}
export default Login



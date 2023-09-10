'use client'

import Button from "@/app/components/Button"
import Input from "@/app/components/inputs/Input"
import { useState, useCallback, useEffect } from "react"
import { useForm, FieldValues, SubmitHandler } from "react-hook-form"
import AuthSocialButton from "./AuthSocialButton"
import { BsGithub, BsGoogle } from 'react-icons/bs'

import axios from "axios"
// import ToasterContext from "@/app/context/ToasterContext"
import { toast } from "react-hot-toast"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"


type Variant = 'Login' | 'Register'

const AuthForm = () => {

    const router = useRouter()
    const [variant, setvVariant] = useState<Variant>('Login')
    const [isLoading, setIsLoading] = useState(false)
    const session = useSession()

    useEffect(() => {
        // if(session?.status === 'authenticated'){ console.log('Authenticated') }
        
    }, [session?.status],)

    const toggleVariant = useCallback(() => {
        if (variant == 'Login') {
            setvVariant('Register')
        } else {
            setvVariant('Login')
        }
    }, [variant])

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true)

        if (variant === 'Register') {
            axios.post('./api/register', data)
                .then(()=>{
                    signIn('credentials', data)
                })
                .catch(() => toast.error('Something went wrong'))
            // .finally(()=> setIsLoading(false))
        }

        if (variant == 'Login') {
            //NextAuth Signin
            signIn('credentials', {
                ...data,
                redirect: false
            })
                .then(callback => {
                    if (callback?.error) toast.error('Invalid Credentials')

                    if (callback?.ok && !callback?.error) {
                        toast.success('Logged in')
                        router.push('/users');
                    }
                })
                .finally(() => setIsLoading(false))
        }
    }

    const socialaction = (action: string) => {
        setIsLoading(true)

        //nextAuth Social signin
    }

    return (
        <div
            className="
                mt-8
                sm:mx-auto
                sm:max-w-md
            "
        >
            <div
                className="
                 bg-white
                 px-4
                 py-8
                 shadow
                 sm:rounded-lg
                 sm:px-10
                ">
                <form
                    className="
                      space-y-6
                     "
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {variant == 'Register' && (
                        <Input
                            label="Name"
                            id="name"
                            errors={errors}
                            register={register}
                            disabled={isLoading}
                        />)}
                    <Input
                        label="Email address"
                        id="email"
                        type="email"
                        errors={errors}
                        register={register}
                        disabled={isLoading}
                    />
                    <Input
                        label="Password"
                        id="password"
                        type="password"
                        errors={errors}
                        register={register}
                        disabled={isLoading}
                    />
                    <div className="relative flex justify-center text-sm">
                        <Button>
                            {variant == 'Login' ? 'Sign in' : 'Register'}
                        </Button>
                    </div>

                </form>
                <div
                    className="
                      mt-6
                     "
                >
                    <div className="relative">
                        <div className="
                             absolute
                             inset-0
                             flex
                             items-center
                             ">
                            <div
                                className="
                                  w-full
                                  border-gray-300"
                            />

                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-2 text-gray-500">
                                or continue with
                            </span>
                        </div>


                        <div className="mt-6 flex gap-2">
                            <AuthSocialButton
                                icon={BsGithub}
                                onClick={() => socialaction('github')}
                            />
                            <AuthSocialButton
                                icon={BsGoogle}
                                onClick={() => socialaction('google')}
                            />
                        </div>

                    </div>

                    <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
                        <div>
                            {variant == 'Login' ? 'New to ChatBook?' : 'Already have an account?'}
                        </div>
                        <div
                            onClick={toggleVariant}
                            className="
                              underline cursor-pointer
                             "
                        >
                            {variant == 'Login' ? 'Create an account' : 'Login to your account'}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AuthForm
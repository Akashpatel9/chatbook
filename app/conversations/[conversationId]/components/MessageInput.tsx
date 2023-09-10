'use client'

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

interface MessageInputProps {
    id: string,
    register: UseFormRegister<FieldValues>,
    placeholder?: string,
    errors : FieldErrors,
    type? : string,
    required?: boolean
}

const MessageInput: React.FC<MessageInputProps> = ({
    id,
    register,
    placeholder,
    errors,
    required,
    type
}) => {
    return (
        <div
            className="relative w-full"
        >
            <input 
                type={type}
                id={id}
                autoComplete={id}
                {...register(id, {required})}
                placeholder={placeholder}
                className="text-black font-light py-2 px-4 bg-neutral-100 w-full rounded-full focus:outline-none"
            />
        </div>
    )
}

export default MessageInput
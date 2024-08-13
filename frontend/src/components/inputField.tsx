import { Input, InputGroup } from '@chakra-ui/react'
import './components.css';
import React from 'react';

interface InputFieldProps {
    placeholder: string;
    value: string;
    className: string;
    onChange: (e: string) => void;
}

function InputField({ className, placeholder, value, onChange }: InputFieldProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    }

    return (
        <InputGroup className={className}>
            <Input 
            placeholder={placeholder}
            className={className} 
            value={value}
            onChange={handleChange}
            />
        </InputGroup>
    )
}

export default InputField;
import { Input, InputGroup } from '@chakra-ui/react'
import './components.css';
import React from 'react';

interface InputFieldProps {
    placeholder: string;
    value: string;
    onChange: (e: string) => void;
}

function InputField({ placeholder, value, onChange }: InputFieldProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    }

    return (
        <InputGroup>
            <Input 
            placeholder={placeholder}
            className="inputField" 
            value={value}
            onChange={handleChange}
            />
        </InputGroup>
    )
}

export default InputField;
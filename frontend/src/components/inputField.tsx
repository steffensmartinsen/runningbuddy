import { Input, InputGroup } from '@chakra-ui/react'
import './components.css';
import React from 'react';

interface InputFieldProps {
    placeholder: string;
}

const InputField = (props: InputFieldProps) => {
    return (
        <InputGroup>
            <Input placeholder={props.placeholder} className="inputField" />
        </InputGroup>
    )
}

export default InputField;
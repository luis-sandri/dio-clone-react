import { ButtonContainer  } from './styles.ts';
import React from 'react';
import {IButton } from './types.ts';
const Button = ({title, variant='primary', onClick, type="button", ...rest}: IButton) => {
    return (
        <ButtonContainer variant={variant} onClick={onClick} type={type as "button" | "reset" | "submit"} {...rest}>
            {title}
        </ButtonContainer>
    )
}

export default Button;
import { ButtonContainer  } from './styles';
import React from 'react';

const Button = ({title, variant='primary', onClick, ...rest}) => {
    return (
        <ButtonContainer $variant={variant} onClick={onClick} {...rest}>
            {title}
        </ButtonContainer>
    )
}

export { Button };
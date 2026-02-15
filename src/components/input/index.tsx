import { ErrorText, IconContainer, InputContainer, InputText}  from './styles.ts';
import { Controller } from 'react-hook-form';
import { IInput } from './types.ts';
const Input = ({leftIcon, control, errorMessage, name, ...rest}: IInput) => {
  return (
    <>
    <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller 
        name={name}
        control={control}
        rules={{ required: true}}
        defaultValue=""
        render={({ field }) => <InputText {...field} {...rest} />}
        />
    </InputContainer>
    {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  )
}

export default Input;



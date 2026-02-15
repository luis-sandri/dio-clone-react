import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/index.tsx';
import Header from '../../components/header/index.tsx';
import Input from '../../components/input/index.tsx';
import { MdEmail, MdLock } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { Container, Column, CreateText, ForgetPassowrd, Row, Title, TitleLogin, Wrapper, SubTitleLogin } from './styles.ts'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'; 
import { api } from  '../../services/api.ts'
import { IFormData } from '../cadastro/types.ts';
import { IUser } from './types.ts';

const schema = yup.object({
    email: yup.string().email('Field a valid email').required('Required field'),
    password: yup.string().min(8, 'At least 8 characters').required('Required field'),
}).required(); 
 
const Login = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors, isValid } } = useForm(
        {resolver: yupResolver(schema),
            mode: 'onChange',
        }
    );
    const onSubmit = async (formData: IFormData) => {
        try{
            const response = await api.get(`/users`);
            console.log('All Users:', response.data);
            
            const user = response.data.find((u: IUser) => 
                u.email === formData.email && u.password === formData.password
            );
            
            console.log('Found User:', user);
            
            if(user){
                navigate('/feed')
            } else {
                alert('Email or password invalid')
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error ocurred, please try again')
        }
    };

    return (
        <>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas. 
                </Title>
            </Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name='email' control={control} errorMessage={errors?.email?.message} placeholder='E-mail' leftIcon={<MdEmail />}/>
                        <Input name='password' control={control} errorMessage={errors?.password?.message} placeholder='Senha' type='password' leftIcon={<MdLock />}/><br />
                        <Button title='Entrar' variant='secondary' type='submit' disabled={isValid === false}></Button>
                    </form>
                    <Row>
                        <ForgetPassowrd>Esqueci minha senha</ForgetPassowrd>
                        <CreateText>Criar conta</CreateText>
                    </Row>
                </Wrapper>
        </Container>
        </>
    )
}

export default Login;
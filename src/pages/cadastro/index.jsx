import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/button';
import { Header } from '../../components/header';
import { Input } from '../../components/input';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { Login ,Container, Column, CreateText, ForgetPassowrd, Row, Title, TitleLogin, Wrapper, SubTitleLogin } from './styles'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'; 
import { api } from  '../../services/api'

const schema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Field a valid email').required('Required field'),
    password: yup.string().min(8, 'At least 8 characters').required('Required field'),
}).required(); 
 
const Cadastro = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm(
        {resolver: yupResolver(schema),
            mode: 'onChange',
        }
    );
    const onSubmit = async formData => {
        try{
            const response = await api.post('/users', {
                name: formData.name,
                email: formData.email,
                password: formData.password
            });
            
            console.log('User created:', response.data);
            alert('Cadastro realizado com sucesso!');
            navigate('/feed');
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
                    <TitleLogin>Começe agora grátis</TitleLogin>
                    <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>
                    <form name='form' onSubmit={handleSubmit(onSubmit)}>
                        <Input name='name' control={control} errorMessage={errors?.name?.message} placeholder='Nome Completo' leftIcon={<MdPerson />}/>
                        <Input name='email' control={control} errorMessage={errors?.email?.message} placeholder='E-mail' leftIcon={<MdEmail />}/>
                        <Input name='password' control={control} errorMessage={errors?.password?.message} placeholder='Senha' type='password' leftIcon={<MdLock />}/><br />
                        <Button title='Criar minha conta' variant='secondary' type='submit'></Button>
                    </form>
                        <br />
                        <p>Ao clicar em "criar minha conta grátis", delcaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</p>
                        <Row>
                            <Login>Fazer login</Login>
                        </Row>
                </Wrapper>
        </Container>
        </>
    )
}

export { Cadastro };
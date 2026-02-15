import React from 'react'
import { BuscarInputContainer, Row, Container, Input, Menu, Wrapper, MenuRight, ImgSize, UserPicture } from './styles'
import { Button } from '../button';
import logo from '../../assets/diologo.png'
import { retrato } from '../../assets';
    const Header = ({auth, image}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <ImgSize src={logo} alt='Logo DIO' className='ImgSize'/>
                {auth ? (
                <>        
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...' />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </>
                ) : null }

            </Row>
            <Row>
                {auth ? (
                    <UserPicture src={retrato}/>
                ) : (
                 <>
                    <MenuRight href='#'>Home</MenuRight>
                    <Button title='Entrar'></Button>
                    <Button title='Cadastrar'></Button>
                </>
                )}

            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }
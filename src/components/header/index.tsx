import React from 'react'
import { BuscarInputContainer, Row, Container, Input, Menu, Wrapper, MenuRight, ImgSize, UserPicture } from './styles.ts'
import Button from '../button/index.tsx';
import { diologo } from '../../assets';
import { retrato } from '../../assets';
import { IHeader } from './types.ts';
    const Header = ({auth}: IHeader) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <ImgSize src={diologo} alt='Logo DIO' className='ImgSize'/>
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

export default Header
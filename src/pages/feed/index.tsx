
import Header from '../../components/header/index.tsx';
import Card from '../../components/card/index.tsx';
import UserInfo from '../../components/userInfo/index.tsx';
import { Container, Column, Title, TitleHighlight } from './styles.ts'
import { retrato } from '../../assets'
const Feed = () => {
    return (
        <>
        <Header auth={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight>TOP 5 DA SEMANA</TitleHighlight>
                <UserInfo percentual={86} name='Luis' image={retrato}/>
                <UserInfo percentual={66} name='Luis' image={retrato}/>
                <UserInfo percentual={55} name='Luis' image={retrato}/>
                <UserInfo percentual={40} name='Luis' image={retrato}/>
                <UserInfo percentual={33} name='Luis' image={retrato}/>
            </Column>
            
        </Container>
        </>
    )
}

export default Feed;
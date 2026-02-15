
import { Header } from '../../components/header';
import { Card } from '../../components/card';
import { UserInfo } from '../../components/userInfo';
import { Container, Column, Title, TitleHighlight } from './styles'
import { retrato, banner } from '../../assets'
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
                <UserInfo percentual={86} nome='Luis' image={retrato}/>
                <UserInfo percentual={66} nome='Luis' image={retrato}/>
                <UserInfo percentual={55} nome='Luis' image={retrato}/>
                <UserInfo percentual={40} nome='Luis' image={retrato}/>
                <UserInfo percentual={33} nome='Luis' image={retrato}/>
            </Column>
            
        </Container>
        </>
    )
}

export { Feed };
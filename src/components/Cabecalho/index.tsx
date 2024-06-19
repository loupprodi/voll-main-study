import logo from './assets/logo.png';
import perfil from './assets/perfil.png';
import {Container, Header, LinkEstilizado} from './styles';

export const Cabecalho = () => {
    return (
        <Header>
            <img src={logo} alt="logo voll" />
            <Container>
                <img src={perfil} alt="imagem pefil usuario" />
                <LinkEstilizado href="#">sair</LinkEstilizado>
            </Container>
        </Header>
    )
}
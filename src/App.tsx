import './App.css';
import { Container } from '@mui/material';
import { Cabecalho } from "./components/Cabecalho"
import { Titulo } from './components/Titulo';
import { Tabela } from './components/Tabela';
import { useDadosConsulta } from './hook/useDadosConsulta';
import { Rodape } from './components/Rodape';
import { useDadosProfissional } from './hook/useDadosProfissional';
import { Grafico } from './components/Grafico';
import { Avaliacao } from './components/Avaliacao';
import { Botao } from './components/Botao/styles';
import { Subtitulo } from './components/Subtitulo/styles';

export const App = () => {
  const { dados: consultas, erro: consultasErro } = useDadosConsulta();
  const { dados: profissionais, erro: profissionaisErro} = useDadosProfissional();
  if(consultasErro || profissionaisErro){
    console.log('ocorreu um erro na requisição')
  }

  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Administrativa</Titulo>
        <Botao>Cadastrar especialista</Botao>
        <Titulo imagem="consulta">Consultas do Dia</Titulo>
        <Tabela consultas={consultas} />
        <Titulo imagem="grafico">Consultas mensais por especialista</Titulo>
        <Subtitulo>Dezembro/22</Subtitulo>
        <Grafico consultas={consultas} profissionais={profissionais} />
        <Titulo imagem="avaliacao">Avaliações de especialistas</Titulo>
        <Avaliacao profissionais={profissionais} />
      </Container>
      <Rodape />
    </>
  )
}
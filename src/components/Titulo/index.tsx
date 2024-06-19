import avalicao from './assets/avaliacao.png';
import consulta from './assets/consulta.png';
import grafico from './assets/grafico.png';
import { ContainerEstilizado, SpanEstilizado, TituloEstilizado } from './styles';

interface Props {
    imagem?: string,
    children?: React.ReactNode
}
interface IImagens{
    avaliacao: string,
    grafico: string,
    consulta: string,
}

export const Titulo = ({imagem, children}: Props) => {
    const listaDeImagens: IImagens ={
        avaliacao: avalicao,
        grafico: grafico,
        consulta: consulta,
    }
    return(
        <ContainerEstilizado>
          {imagem && <SpanEstilizado imagem={listaDeImagens[imagem as keyof IImagens]}/> }          
                <TituloEstilizado>{children}</TituloEstilizado>
        </ContainerEstilizado>
    )
}
import { Rating } from "@mui/material";
import { IProfissional } from "../../../../types/IProfissional";
import {ContainerEstilizado, ImagemEstilizada, ItemEstilizado, ListaEstilizada, ParagrafoEstilizado, ParagrafoNomeEstilizado} from'./styles'

export const Card = ({profissional}:{profissional: IProfissional}) =>{
    return(
        <ContainerEstilizado>
            <ListaEstilizada>
                <ItemEstilizado>
                    <ImagemEstilizada src={profissional.imagem} 
                    alt={`Foto de perfil do profissional ${profissional.nome}`} />
                </ItemEstilizado>
                <ItemEstilizado>
                    <ParagrafoNomeEstilizado>{profissional.nome}</ParagrafoNomeEstilizado>
                    <ParagrafoEstilizado>{profissional.especialidade}</ParagrafoEstilizado>
                </ItemEstilizado>
                <ItemEstilizado>
                    <Rating
                    name="simples-controlled"
                    value={profissional.nota}
                    readOnly={true}
                    />
                </ItemEstilizado>
            </ListaEstilizada>
        </ContainerEstilizado>
    );
}
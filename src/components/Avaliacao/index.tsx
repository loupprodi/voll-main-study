import { IProfissional } from "../../types/IProfissional"
import { Card } from "./components/Card"

import { SecaoCard } from "./styles";
import { Botao} from "../Botao/styles";

export const Avaliacao = ({ profissionais }: { profissionais: IProfissional[] | null }) => {
    return (
        <>
            <SecaoCard>
                {profissionais?.map((profissional) => {
                    return <Card profissional={profissional} />
                })}
            </SecaoCard>
            <Botao>Ver mais</Botao>
        </>
    )
}
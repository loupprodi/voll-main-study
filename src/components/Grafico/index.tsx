import { BarChart, ResponsiveContainer, XAxis, YAxis, Bar } from "recharts"
import { IProfissional } from "../../types/IProfissional"
import { IConsulta } from "../../types/IConsulta"
import { useDadosGrafico } from "./useDadosGrafico"
import { SecaoEstilizada } from "./styles"

interface Props {
    profissionais: IProfissional[] | null,
    consultas: IConsulta[] | null,
}

interface IDados {
    nome: string,
    consultas: number
}

export const Grafico = ({ profissionais, consultas }: Props) => {
    let dados: Array<IDados> = useDadosGrafico({ profissionais, consultas });


    return (
        <SecaoEstilizada>
            <ResponsiveContainer width="100%" height={350}>
                <BarChart
                    layout="vertical"
                    data={dados}
                    margin={{ top: 25, right: 40, left: 40, bottom: 20 }}
                >
                    <XAxis type="number"></XAxis>
                    <YAxis type="category" dataKey="nome"></YAxis>
                    <Bar dataKey="consultas" fill="#083860" barSize={30}></Bar>
                </BarChart>
            </ResponsiveContainer>
        </SecaoEstilizada>
    )
}
import { Paper, Table, TableBody, TableContainer, TableHead, TableRow } from "@mui/material"
import { IConsulta } from "../../types/IConsulta"
import { CelulaEstilizada, LinhaEstilizada } from "./styles"


export const Tabela = ({ consultas }: { consultas: IConsulta[] | null }) => {
    return (
        <>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="tabela-customizada">
                <TableHead>
                    <TableRow>
                        <CelulaEstilizada>Data</CelulaEstilizada>
                        <CelulaEstilizada>Horário</CelulaEstilizada>
                        <CelulaEstilizada>Profissional</CelulaEstilizada>
                        <CelulaEstilizada>Especialidade</CelulaEstilizada>
                        <CelulaEstilizada>Paciente</CelulaEstilizada>
                        <CelulaEstilizada>Modalidade</CelulaEstilizada>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {consultas?.map((linha) => {
                        return (
                            <LinhaEstilizada>
                                <CelulaEstilizada component="th" scope="row">{new Date(linha.data).toLocaleDateString()}</CelulaEstilizada>
                                <CelulaEstilizada>{linha.horario}</CelulaEstilizada>
                                <CelulaEstilizada>{linha.profissional[0].nome}</CelulaEstilizada>
                                <CelulaEstilizada>{linha.profissional[0].especialidade}</CelulaEstilizada>
                                <CelulaEstilizada>{linha.paciente}</CelulaEstilizada>
                                <CelulaEstilizada>{linha.modalidade}</CelulaEstilizada>
                            </LinhaEstilizada>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </>
    )   
}
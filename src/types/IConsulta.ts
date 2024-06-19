import { IProfissional } from "./IProfissional";

export interface IConsulta{
    id: number,
    data: string,
    horario: string,
    profissional:Array<IProfissional>,
    especialidade: string,
    paciente: string,
    modalidade: string,
}
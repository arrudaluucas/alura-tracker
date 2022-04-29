import IProjeto from "./IProjeto";

export default interface ITarefa {
    id: string,
    duracaoEmsegundos: number,
    descricao: string,
    projeto?: IProjeto
}
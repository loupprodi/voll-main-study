import styled from "styled-components";

export const SpanEstilizado = styled.span<{imagem: string}>`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 25px;
    height: 25px;
    background-image: ${props => props.imagem ? `url(${props.imagem})`:'none' };
`

export const TituloEstilizado = styled.h2`
    color: var(--azul-claro);
`
export const ContainerEstilizado = styled.div`
    display:flex;
    align-items: center;
`
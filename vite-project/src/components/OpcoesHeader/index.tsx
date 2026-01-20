import { IconsList } from '../IconsHeader';
import styled from 'styled-components';

const OptionsContainer = styled.ul`
    display: flex;
    `

export default function OpcoesHeader() {
    const opcoesTexto = ['Categorias', 'Minha Estante', 'Favoritos'];


    return (
        <>
        <OptionsContainer className='options'>
          {opcoesTexto.map((opcaoTexto) => (
            <IconsList key={opcaoTexto}>
              {opcaoTexto}
            </IconsList>
          ))}
        </OptionsContainer>
        </>
    );
}
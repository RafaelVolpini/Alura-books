import Sacola from '../../images/sacola.svg';
import Profile from '../../images/perfil.svg';
import styled from 'styled-components';

 const IconsContainer = styled.ul`
    display: flex;
    padding: 0 0;
`
    
export const IconsList = styled.li`
  min-width: 120px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
`

export default function IconsHeader () {

    const icones = [Sacola, Profile];



    return (
      <>
        <IconsContainer>
          {icones.map((icone) => (
            <IconsList key={icone}>
              <img src={icone} alt='icone' ></img>
            </IconsList>
          ))}
        </IconsContainer>
      </>
    );
}
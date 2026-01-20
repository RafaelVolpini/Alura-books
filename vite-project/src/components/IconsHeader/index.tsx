import Sacola from '../../images/sacola.svg';
import Profile from '../../images/perfil.svg';
import './style.css'

export default function IconsHeader () {

    const icones = [Sacola, Profile];

    return (
      <>
        <ul className='icones'>
          {icones.map((icone) => (
            <li key={icone} className='option'>
              <img src={icone} alt='icone' ></img>
            </li>
          ))}
        </ul>
      </>
    );
}
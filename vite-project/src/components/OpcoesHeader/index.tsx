import Sacola from '../../images/sacola.svg';
import Profile from '../../images/perfil.svg';
import './style.css'


export default function OpcoesHeader() {
    const opcoesTexto = ['Categorias', 'Minha Estante', 'Favoritos'];


    return (
        <>
        <ul className='options'>
          {opcoesTexto.map((opcaoTexto) => (
            <li key={opcaoTexto} className='option'>{opcaoTexto}</li>
          ))}
        </ul>

        
        </>
    );
}
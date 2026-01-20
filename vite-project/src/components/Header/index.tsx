import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import IconsHeader from "../IconsHeader";
import './style.css';


export default function Header () {
    return (
        <header className='App-header'>
            <Logo/>
            <OpcoesHeader/>
            <IconsHeader/>
        </header>
    );
}
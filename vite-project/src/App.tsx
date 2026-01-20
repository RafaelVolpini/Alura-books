import './App.css'
import Logo from './components/Logo';
import OpcoesHeader from './components/OpcoesHeader';
import IconsHeader from './components/IconsHeader';

function App() {


  return (
    <>
    <div className="App">
      <header className='App-header'>
        <Logo></Logo>
        <OpcoesHeader></OpcoesHeader>
        <IconsHeader></IconsHeader>
        
      </header>
    </div>
    </>
  )
}

export default App

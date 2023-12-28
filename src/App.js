import { HashRouter } from 'react-router-dom';

import Container from './common/Container';
import ContainerFoto from './common/ContainerFoto';
import Header from './common/Header';
import HeaderContainer from './common/HeaderContainer';
import SectionKontakt from './common/SectionKontakt';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />

        <HeaderContainer></HeaderContainer>
        <Container />

        <ContainerFoto />
       <SectionKontakt></SectionKontakt>
      </HashRouter>
    </div>
  );
}

export default App;

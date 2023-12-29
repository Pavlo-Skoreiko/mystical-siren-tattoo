import { BrowserRouter as Router } from 'react-router-dom';

import Container from './common/Container';
import ContainerFoto from './common/ContainerFoto';
import Header from './common/Header';
import HeaderContainer from './common/HeaderContainer';
import SectionKontakt from './common/SectionKontakt';
import ScrollToTopOnMount from './ScrollToTopOnMount';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <HeaderContainer />

        <ScrollToTopOnMount />

        <Container />
        <ContainerFoto />
        <SectionKontakt />
        
      </Router>
    </div>
  );
}

export default App;

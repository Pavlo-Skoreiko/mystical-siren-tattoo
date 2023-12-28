import YourComponent from './BlinkingText';
import HeaderTitle from './HeaderTitle';
import { HeaderCistern } from './styled';

const HeaderContainer = () => (
  <HeaderCistern>
    <YourComponent />
    <HeaderTitle>
            <a>Launching Soon</a>
          </HeaderTitle>
  </HeaderCistern>

  
 
);

export default HeaderContainer;

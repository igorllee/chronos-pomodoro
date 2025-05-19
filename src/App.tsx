import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
// import { TimerIcon } from 'lucide-react';

function App() {
  return (
    <>
      <Container>
        <Heading>Logo</Heading>
      </Container>
      <Container>
        <Heading>Menu</Heading>
      </Container>
    </>
  );
}

export default App;

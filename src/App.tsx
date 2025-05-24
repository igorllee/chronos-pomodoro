import { Menu } from './components/Menu';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Countdown } from './components/Countdown';
import { Input } from './components/Input';
import { Cycles } from './components/Cycles';
import { Button } from './components/Button';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';

import './styles/theme.css';
import './styles/global.css';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <Countdown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <Input
              id='task'
              type='text'
              labelText='Task'
              placeholder='Digite algo'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <Button icon={<PlayCircleIcon />} color='green' />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default App;

import Hello from './components/Hello'
import About from './components/About';
import Project from './components/Project'
import OnTheWeb from './components/OnTheWeb'
import Footer from'./components/Footer'
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import useRWD from "./components/useRWD";


const Theme = styled.div`
padding-left: 10%;
padding-right: 10%;
`;
const App = () => {
  const winsize = useRWD();

  return (
    <Theme >
      <Hello />
      <About />
      <OnTheWeb />
      <Project wininfo = {winsize} />
      <Footer />
    </Theme>
  );
}

export default App;

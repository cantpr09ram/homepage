import Hello from './components/Hello'
import About from './components/About';
import Project from './components/Project'
import OnTheWeb from './components/OnTheWeb'
import Footer from'./components/Footer'
import styled from '@emotion/styled';


const Theme = styled.div`
padding-left: 10%;
padding-right: 10%;
`;
function App() {
  return (
    <Theme >
      <Hello />
      <About />
      <Project/>
      <OnTheWeb />
      <Footer />
    </Theme>
  );
}

export default App;

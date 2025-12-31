// to run program do cd my-react-app, npm run dev;
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Intro from './Intro.jsx'

function App() {

  return(
    // required by react to wrap components in an empty div
    <> 
    <Header></Header>
    <Intro></Intro>
    <Footer></Footer>
    </>
  );
}

export default App

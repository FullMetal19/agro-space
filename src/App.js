import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './views/Home';
import { Signin } from './views/Signin';
import { Signup } from './views/Signup';
import { Panel } from './views/Panel';
import { ChatBot } from './views/ChatBot';
import { Service } from './views/Service';
import { Profil } from './views/Profil';
import { Dashboard } from './views/Dashboard';
import { Calendar } from './views/Calendar';
import { Itk } from './views/Itk';
import { Network } from './views/Network';
import { Notification } from './views/Notification';
import { Settings } from './views/Settings';
import { Error } from './views/404';
import { Welcome } from './views/Welcome';

function App() 
{
  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={ <Home /> }> </Route>

        <Route path="/connexion" element={ <Signin /> }> </Route>  

        <Route path="/demande-activation-compte" element={ <Welcome /> }> </Route>

        <Route path="/nouveau-compte" element={ <Signup /> }> </Route>

        <Route path="/panel" element={ <Panel /> }> </Route>

        <Route path="/chatbot" element={ <ChatBot /> }> </Route>

        <Route path="/services" element={ <Service /> }> </Route>

        <Route path="/profile" element={ <Profil /> }> </Route>

        <Route path="/panel/:pid" element={ <Dashboard /> }> </Route>

        <Route path="/panel/:pid/calendrier" element={ <Calendar /> }> </Route>

        <Route path="/panel/:pid/itk" element={ <Itk /> }> </Route>

        <Route path="/panel/:pid/reseau" element={ <Network /> }> </Route>

        <Route path="/panel/:pid/notification" element={ <Notification /> }> </Route>

        <Route path="/panel/:pid/parametre" element={ <Settings /> }> </Route>
    
        <Route path="*" element={ <Error />  } ></Route>

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

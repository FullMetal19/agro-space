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
import ProtectedRoute from './config/ProtectedRoute';

function App() 
{
  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={ <Home /> }> </Route>

        <Route path="/connexion" element={ <Signin /> }> </Route>  

        <Route path="/demande-activation-compte" element={ <Welcome /> }> </Route>

        <Route path="/nouveau-compte" element={ <Signup /> }> </Route>

        <Route path="/panel" element={ <ProtectedRoute> <Panel /> </ProtectedRoute> }> </Route>

        <Route path="/chatbot" element={ <ProtectedRoute> <ChatBot /> </ProtectedRoute> }> </Route>

        <Route path="/services" element={ <ProtectedRoute> <Service /> </ProtectedRoute> }> </Route>

        <Route path="/profile" element={ <ProtectedRoute> <Profil /> </ProtectedRoute> }> </Route>

        <Route path="/panel/:pid" element={ <ProtectedRoute> <Dashboard /> </ProtectedRoute> }> </Route>

        <Route path="/panel/:pid/calendrier" element={ <ProtectedRoute> <Calendar /> </ProtectedRoute> }> </Route>

        <Route path="/panel/:pid/itk" element={ <ProtectedRoute> <Itk /> </ProtectedRoute> }> </Route>

        <Route path="/panel/:pid/reseau" element={ <ProtectedRoute> <Network /> </ProtectedRoute> }> </Route>

        <Route path="/panel/:pid/notification" element={ <ProtectedRoute> <Notification /> </ProtectedRoute> }> </Route>

        <Route path="/panel/:pid/parametre" element={ <ProtectedRoute> <Settings /> </ProtectedRoute> }> </Route>
    
        <Route path="*" element={ <Error />  } ></Route>

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

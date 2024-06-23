import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import MainContainer from './Components/MainContainer';
import ChatArea from './Components/ChatArea'
import Welcome from './Components/Welcome';
import CreateGroups from './Components/CreateGroups';
import Users from './Components/Users';
import Groups from './Components/Groups';
import Signup from './Components/Signup';


function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='app' element={<MainContainer />}>
          <Route path='welcome' element={<Welcome />} ></Route>
          <Route path='chat/:_id' element={<ChatArea />}></Route>
          <Route path='users' element={<Users />} ></Route>
          <Route path='groups' element={<Groups />} ></Route>
          <Route path='create-groups' element={<CreateGroups />} ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

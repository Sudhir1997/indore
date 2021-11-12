import {   BrowserRouter,Switch,Route,Routes } from "react-router-dom";
import {Signup} from './components/signup.js';
import {Dashboard} from './components/dashboard.js';
import {Login} from './components/login.js';

function App() {
  return (
    <BrowserRouter>
<Routes>
<Route path="/dashboard" component={Dashboard}></Route>
<Route path="/login" component={Login}></Route>
<Route path="/" component={Signup}></Route>
</Routes>
    </BrowserRouter>

  );
}

export default App;

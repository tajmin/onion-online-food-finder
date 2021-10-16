import logo from './logo.svg';
import './App.css';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MealDetails from './components/MealDetails/MealDetails';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route path="/meal-details/:mealID">
            <MealDetails></MealDetails>
          </Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;

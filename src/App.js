import AllCars from "./cars/AllCars";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingleCar from "./cars/SingleCar";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Messages from "./messages/Messages";

function App() {
   return (
      <Router>
         <Navbar />
         <div className="main-content">
            <Switch>
               <Route exact path="/">
                  <AllCars />
               </Route>
               <Route exact path="/car">
                  <SingleCar />
               </Route>
               <Route path="/auth/login">
                  <Login />
               </Route>
               <Route path="/auth/register">
                  <Register />
               </Route>
               <Route>
                  <Messages />
               </Route>
            </Switch>
         </div>
         <Footer />
      </Router>
   );
}

export default App;

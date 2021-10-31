import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import AddFood from './Admin/AddFood/AddFood';
import ManageProduct from './Admin/ManageProduct/ManageProduct';
import DeliveryProvider from './contexts/DeliveryProvider';
import OrderProvider from './contexts/OrderProvider';
import FoodDetail from './components/FoodDetail/FoodDetail';
import UpdateProduct from './Admin/UpdateProduct/UpdateProduct';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import OrderSuccessful from './components/OrderSuccesfull/OrderSuccessful';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <AuthProvider>
      <OrderProvider>
        <DeliveryProvider>
          <Router>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/home">
                <Home></Home>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/contact">
                <Contact></Contact>
              </Route>
              <PrivateRoute path="/addFood">
                <AddFood></AddFood>
              </PrivateRoute>
              <PrivateRoute path='/manage-product'>
                <ManageProduct></ManageProduct>
              </PrivateRoute>
              <Route path="/placeOrder">
                <PlaceOrder></PlaceOrder>
              </Route>
              <Route path="/order-successful">
                <OrderSuccessful></OrderSuccessful>
              </Route>
              <PrivateRoute path="/foodDetail/:id">
                <FoodDetail></FoodDetail>
              </PrivateRoute>
              <PrivateRoute path="/update/:id">
                <UpdateProduct></UpdateProduct>
              </PrivateRoute>

              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
            <Footer></Footer>
          </Router>
        </DeliveryProvider>
      </OrderProvider>
    </AuthProvider>
  );
}

export default App;

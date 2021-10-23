import {Switch,Route} from "react-router";
import Homepage_02 from './pages/Homepage_02';
import ShopTwoPage_02  from "./pages/ShopTwoPage_02";
import ContactPage_02 from "./pages/ContactPage_02";
import SigninPage_02 from "./pages/SigninPage_02";
import Header_02 from "./components/Header_02";

function App_02() {
  return (

    <div>
      <Header_02/>
        <Switch>
          <Route path="/" exact>
            <Homepage_02/>
          </Route>
          <Route path="/shop_02" exact>
            <ShopTwoPage_02/>
          </Route>
          <Route path="/contact_02" exact>
            <ContactPage_02/>
          </Route>
          <Route path="/signin_02" exact>
            <SigninPage_02/>
          </Route>
        </Switch>
    </div>
  );
}

export default App_02;

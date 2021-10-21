import {Switch,Route} from "react-router-dom";
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
          <Route exact path="/" component={Homepage_02}/>
          <Route exact path="/shop_02" component={ShopTwoPage_02}/>
          <Route exact path="/contact_02" component={ContactPage_02}/>
          <Route exact path="/signin_02" component={SigninPage_02}/>
        </Switch>
    </div>
  );
}

export default App_02;

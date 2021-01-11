import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home/index';
import Error404 from './pages/error404/index';
import AdminPage from './pages/admin/index';
import AddProduct from './pages/admin/addProduct';
import AddBanner from './pages/admin/addBanner';
import Product from './pages/product/index';
import PrivacyPolicy from './pages/legal/privacyPolicy';
import TermsOfUse from './pages/legal/termsOfUse';

const App = () => {
  return (
    <Switch>
      <Route path="/product/:id" component={Product} />
      <Route path="/privacy-policy" exact component={PrivacyPolicy} />
      <Route path="/terms-of-use" exact component={TermsOfUse} />
      <Route path="/admin/add-banner" exact component={AddBanner} />
      <Route path="/admin/add-product" exact component={AddProduct} />
      <Route path="/admin" exact component={AdminPage} />
      <Route path="/" exact component={HomePage} />
      <Route path="/Error404" exact component={Error404} />
      <Redirect to="/Error404" />
    </Switch>
  );
}

export default App;
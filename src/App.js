import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import ListingDetail from './containers/ListingDetail';
import Listings from './containers/Listings';
import Login from './containers/SignUp';
import SignUp from './containers/Login';

import NotFound from './components/NotFound';

import Layout from './hocs/Layout';

import store from './store';

import './sass/main.scss';


const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/listings/' component={Listings} />
          <Route exact path='/listings/:id' component={ListingDetail} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  </Provider>
)

export default App;

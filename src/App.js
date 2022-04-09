import './App.css';
import Tabs from './components/tabs/Tabs';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "lightseagreen" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Dashboard
          </a>
        </div>
      </nav>
      <div className="container">
        <Tabs />
      </div>    
    </Provider>
  );
}

export default App;

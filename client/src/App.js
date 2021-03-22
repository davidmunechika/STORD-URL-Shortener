//Libraries
import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
//Pages
import Content from './pages/Content';
import RedirectPage from './pages/RedirectPage';
//Components
import Nav from './components/Nav';
//Styles
import GlobalStyle from './components/GlobalStyle';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <GlobalStyle />
          <Nav />
          <AnimatePresence exitBeforeEnter>
            <Content />
          </AnimatePresence>
        </Route>
        <Route path="/:slug">
          <RedirectPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

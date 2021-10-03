import React from 'react';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('../Pages/Home/Home'));
const About = lazy(() => import('../Pages/About/About'));
const Projects = lazy(() => import('../Pages/Projects/Projects'));
const Talks = lazy(() => import('../Pages/Talks/Talks'));
const Articles = lazy(() => import('../Pages/Articles/Articles'));
const Footer = lazy(() => import('../Footer/Footer'));

function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <Switch>
            <Route exact path='/'>
              <Suspense fallback={<div>Home Loading...</div>}>
                <Home />
              </Suspense>
            </Route>
            <Route exact path='/home'>
              <Suspense fallback={<div>Home Loading...</div>}>
                <Home />
              </Suspense>
            </Route>
            <Route path='/about'>
              <Suspense fallback={<div>About Loading...</div>}>
                <About />
              </Suspense>
            </Route>
            <Route path='/projects'>
              <Suspense fallback={<div>Projects Loading...</div>}>
                <Projects />
              </Suspense>
            </Route>
            <Route path='/talks'>
              <Suspense fallback={<div>Talks Loading...</div>}>
                <Talks />
              </Suspense>
            </Route>
            <Route path='/articles'>
              <Suspense fallback={<div>Articles Loading...</div>}>
                <Articles />
              </Suspense>
            </Route>
          </Switch>
        </div>
      </Router>
      <Suspense fallback={<div>Footer Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;

import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Start from './Pages/Start';
import Video from './Pages/Video';
import NotFound from './Pages/NotFound';

const App = () => {
  return <BrowserRouter>
    <Switch>
      <Route path="/video/:videoId" component={Video} />
      <Route path="/results/" component={Start} />
      <Route exact path="/" component={Start} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
}
export default App;


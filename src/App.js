import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';

import HomeDrawer from './components/homeComponent/homeDrawer/homeDrawer';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <HomeDrawer />
      </HashRouter>
    )
  }
}

export default App;
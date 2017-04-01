import React, {Component} from 'react';
import ListContainer from '../containers/ListContainer';
import withRedux from 'next-redux-wrapper';
import makeStore from '../store/store';

class App extends Component {
  render() {
    return(
      <div>
        <ListContainer />
      </div>
    );
  }
}

export default withRedux(makeStore, (state) => ({items: [], addingItem: false}))(App);

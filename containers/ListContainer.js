import React, {Component} from 'react';
import ListView from '../components/ListView';
import ItemForm from '../components/ListView';

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { addingItem: false };
  }
  render() {
    return this.state.addingItem ? (
      <ListView />
    ) : (
      <ItemForm />
    )
  }
}

export default ListContainer;


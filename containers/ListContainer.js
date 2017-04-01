import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import ListView from '../components/ListView';
import ItemForm from '../components/ListView';

const propTypes = {
  addingItem: PropTypes.bool,
  items: PropTypes.array
}

class ListContainer extends Component {
  render() {
    return this.state.addingItem ? (
      <ListView />
    ) : (
      <ItemForm />
    )
  }
}

const mapStateToProps = (state) => {
  return{
    items: state.items
  };
}

const mapDispatchToProps = (dispatch) => {
  return{

  }
  dispatch(addItem(name, link, notes));
}

ListContainer.proptypes = propTypes;

export default ListContainer;

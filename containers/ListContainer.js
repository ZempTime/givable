import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { toggleAddingItem, addItem } from '../actions/itemActions';
import ListView from '../components/ListView';
import ItemForm from '../components/ItemForm';

const propTypes = {
  addingItem: PropTypes.bool,
  items: PropTypes.array
}

class ListContainer extends Component {
  render() {
    const {toggleAddingItem, addingItem, handleSubmit} = this.props;

    return addingItem ? (
      <ItemForm toggleAddingItem={toggleAddingItem} />
    ) : (
      <ListView addingItem={addingItem} toggleAddingItem={toggleAddingItem} />
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
  addingItem: state.addingItem
})

const mapDispatchToProps = (dispatch) => ({
  toggleAddingItem() {
    dispatch(toggleAddingItem);
  }
})

ListContainer.proptypes = propTypes;

export default connect (mapStateToProps, mapDispatchToProps)(ListContainer);

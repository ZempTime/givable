import React, {Component} from 'react';
import ItemForm from './ItemForm';

class ListView extends Component {
  render() {
    const {addingItem, toggleAddingItem} = this.props;
    let addItemSection = null;
    if (addingItem) {
      addItemSection = <ItemForm toggleAddingItem={() => toggleAddingItem()} />
    } else {
      addItemSection = <a onClick={toggleAddingItem} href="#">+ Add an Item</a>
    }

    return(
      <div>
        <ol>
          <li>First Item</li>
          <li>Second Item</li>
        </ol>
        {addItemSection}
      </div>
    );
  }
}

export default ListView;

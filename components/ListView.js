import React, {Component} from 'react';
import ItemForm from './ItemForm';

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addingItem: false
    };
    this.toggleAddingItem = this.toggleAddingItem.bind(this);
  }
  toggleAddingItem() {
  }
  toggleAddingItem(event) {
    event.preventDefault();
    this.setState({addingItem: !this.state.addingItem});
  }
  render() {
    let addItemSection = null;
    if (this.state.addingItem) {
      addItemSection = <ItemForm toggleAddingItem={this.toggleAddingItem} />
    } else {
      addItemSection = <a onClick={this.toggleAddingItem} href="#">+ Add an Item</a>
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

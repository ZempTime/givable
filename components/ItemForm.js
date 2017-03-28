import React, {Component} from 'react';

class ItemForm extends Component {
  let {name, link, description} = this.props;
  render() {
    <div>
      <div>
        <label>
          Name
        </label>
        <input type="text" value={name} />
        <span>ex: Nutella Spreader</span>
      </div>
    </div>
  }
}

export default ItemForm;

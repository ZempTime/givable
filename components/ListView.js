import React, {Component} from 'react';
import Link from 'next/link'

class ListView extends Component {
  handleClick(event) {
    event.preventDefault()
  }
  render() {
    return(
      <div>
        <ol>
          <li>First Item</li>
          <li>Second Item</li>
        </ol>
        <a href="#" onClick={this.handleClick}>+ Add an Item</a>
      </div>
    );
  }
}

export default ListView;

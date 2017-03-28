import React, {Component} from 'react';
import Link from 'next/link'

class ListView extends Component {
  render() {
    return(
      <div>
        <ol>
          <li>First Item</li>
          <li>Second Item</li>
        </ol>
        <Link href="/items/new"><a>+ Add an Item</a></Link>
      </div>
    );
  }
}

export default ListView;

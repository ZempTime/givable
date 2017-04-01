import React, {Component} from 'react';

class ItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      link: '',
      notes: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    const { name, link, notes } = this.state;
    this.setState({ name: '', link: '', notes: '' });
  }
  render() {
    return(
      <div>
        <div>
          <label htmlFor="name">
          <p> Name </p>
          </label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          <p>ex: Nutella Spreader</p>
        </div>
        <div>
          <label htmlFor="link">
          <p> Link</p>
          </label>
          <input type="text" name="link" value={this.state.link} onChange={this.handleChange} />
          <p>ex: https://nutellaspreader.com </p>
        </div>
        <div>
          <label htmlFor="notes">
          <p> Link</p>
          </label>
          <textarea name="notes" value={this.state.notes} onChange={this.handleChange} />
          <p>ex: Best fit are the M spreaders, especially like color blue. </p>
        </div>

        <div>
          <input type="submit" value="Add Item" onClick={this.handleSubmit} />
        </div>
        <a href="#" onClick={this.props.toggleAddingItem}>Cancel</a>
      </div>
    )
  }
}

export default ItemForm;

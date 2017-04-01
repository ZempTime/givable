import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class ItemForm extends Component {
  submit = (values) => {
    console.log(values)
  }
  render() {
    return(
      <form onSubmit={this.submit}>
        <div>
          <label htmlFor="name"> Name </label>
          <Field name="name" component="input" type="text"/>
          <p>ex: Nutella Spreader</p>
        </div>
        <div>
          <label htmlFor="link"> Link </label>
          <Field name="link" component="input" type="text"/>
          <p>ex: https://nutellaspreader.com </p>
        </div>
        <div>
          <label htmlFor="notes"> Link </label>
          <Field name="notes" component="input" type="textarea"/>
          <p>ex: Best fit are the M spreaders, especially like color blue. </p>
        </div>

        <div>
          <button type="submit">Add Item</button>
        </div>
        <a href="#" onClick={() => this.props.toggleAddingItem()}>Cancel</a>
      </form>
    )
  }
}

ItemForm = reduxForm({
  form: 'item'
})(ItemForm);

export default ItemForm;

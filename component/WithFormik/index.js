import React, { Component } from 'react';
import { withFormik } from 'formik';
import Form from '../Form';
import validationSchema from './validations';

const WithFormik = withFormik({
    validateOnChange: true, // validate in every change input
    validateOnBlur: false, // not validate in every blur of input
    mapPropsToValues: (props) => ({ ...props.formData }),

    validationSchema: validationSchema,
  
    handleSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  
    displayName: 'withFormikYup',
    
})(Form);

export default class WithFormikForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: '',
      email: '',
      age: 0,
    };
  }

  render() {
      return (
          <WithFormik 
            formData={this.state}
          />
      )
  }

}
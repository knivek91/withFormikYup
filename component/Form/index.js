import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import FormStyles from './form.style';
import Input from './../Util/TextField';

const Form = ({
    values,
    errors,
    handleChange,
    handleSubmit,
    classes,
}) => (
            <div className={classes.container}>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <Input
                        label="Username"
                        id="username"
                        value={values.user}
                        error={errors.user}
                        handleChange={handleChange}
                    />
                    <Input
                        label="Age"
                        id="age"
                        type="number"
                        value={values.age}
                        error={errors.age}
                        handleChange={handleChange}
                    />
                    <Input
                        label="Email"
                        id="email"
                        value={values.email}
                        error={errors.email}
                        handleChange={handleChange}
                    />
                    <Input
                        label="Password"
                        id="password"
                        type="password"
                        value={values.password}
                        error={errors.password}
                        handleChange={handleChange}
                    />
                    <Button className={classes.btnSubmit}
                        variant="contained"
                        color="primary" 
                        type="submit">
                        Submit
                    </Button>
                </form>
            </div>
);

  export default withStyles(FormStyles)(Form);
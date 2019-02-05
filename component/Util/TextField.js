import React, {Fragment} from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import styles from './textfield.style';

const Input = ({
    type = "text",
    label,
    id,
    value,
    error,  
    handleChange,
    classes,
    ...props
}) => (
    <Fragment>
        <TextField className={classes.input}
            type={type}
            label={label}
            id={id}
            name={id}
            value={value}
            onChange={handleChange}
            {...props}
            />
        {error && <span className={classes.errorMessage}><small>{error}</small></span>}
    </Fragment>
);

export default withStyles(styles)(Input);
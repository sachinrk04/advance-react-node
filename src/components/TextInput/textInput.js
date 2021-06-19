import React from 'react';
import { TextField } from '@material-ui/core';

export default function TextInput(props) {
    const { label, value, onChange, disabled, className, name, required, pattern, helpText, min, max } = props;
    const [error, setError] = React.useState(false);
    function handleChange(event) {
        let val = event.target.value;
        let valid = false;
        if(pattern) {
            if(val.match(pattern)) {
                setError(false);
                valid = true;
                onChange(event, valid);
            }
            else {
                setError(true);
                if(!required && val === '') {
                    setError(false);
                    valid = true;
                }
                onChange(event, valid);
            };
        } else {
            val = Number(val);
            if( min !== undefined && max) {
                if((val > min) && (val < max)) {
                    setError(false);
                    valid = true;
                    onChange(event, valid);
                } else {
                    setError(true);
                    onChange(event, valid);
                }
            }
        }
    }
    return (
        <>
            {
                pattern ? 
                    <TextField
                        label={label}
                        className={className}
                        name={name}
                        error={error}
                        value={value}
                        margin="normal"
                        required={required}
                        disabled={disabled}
                        onChange={handleChange}
                        helperText={error ? helpText : ''}
                    /> : 
                    <TextField
                        type="number"
                        label={label}
                        className={className}
                        name={name}
                        error={error}
                        value={value}
                        margin="normal"
                        required={required}
                        disabled={disabled}
                        onChange={handleChange}
                        helperText={error ? helpText : ''}
                    />
            }
        </>
    );
}

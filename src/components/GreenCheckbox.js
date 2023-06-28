import { Checkbox, withStyles } from '@material-ui/core';
import * as React from 'react';

export const GreenCheckbox = withStyles({
    root: {
        color: 'gray',
        '&$checked': {
            color: '#01a76e',
        },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);
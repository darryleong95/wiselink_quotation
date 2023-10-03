import React from 'react'
import { useStyles } from '../styles'
import { TextField as NativeTextField } from '@material-ui/core';

const TextField = ({ handle, label, value, type, flexSize, name }) => {
    const classes = useStyles()
    const rows = (label == "Notes") ? 4 : 1
    const val = (flexSize == undefined ? '' : flexSize == 1 ? classes.size_1 : classes.size_2)

    return (
        <div className={val} style={{width: '100%'}}>
            <NativeTextField
                name={name}
                label={type=="number" && label}
                placeholder={label}
                className={`${classes.text_field} ${val}`}
                type={type}
                defaultValue={value}
                fullWidth={true}
                variant='outlined'
                onChange={(e) => handle(e, label)}
                InputProps={{
                    className: classes.text_font,
                }}
                minRows={rows}
                multiline={rows==4}
            />
        </div>
    )
}

export default TextField
import React, { Fragment, useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Header from '../header/index';
import admin from '../../services/adminService';

const useStyles = makeStyles({
    root: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderRadius: 0,
            },
        },
        width: 500
    },
    submitButton: {
        borderRadius: 0
    }
});

const AdminPage = props => {
    const classes = useStyles();
    const [adminKey, setAdminKey] = useState('');
    const [textFieldError, setTextFieldError] = useState(false);
    const [helperText, setHelperText] = useState('');

    const handleChange = e => {
        setAdminKey(e.target.value);

        if (textFieldError) {
            setTextFieldError(false);
            setHelperText('');
        }
    };

    const handleSubmit = async props => {
        try {
            const result = await admin.authenticate(adminKey);
            if (result.data.status === 'ok') {
                admin.saveKey(adminKey);
                props.history.replace('/admin/add-product');
            }
        }
        catch (e) {
            setTextFieldError(true);
            setHelperText(e.data.error);
        }
    };

    return (
        <Fragment>
            <Header {...props} />
            <Container width="sm" style={{ marginTop: 80 }} align="center">
                <Typography variant="h5" style={{ padding: 20 }}>
                    Admin Sign-in
                </Typography>
                <TextField
                    onChange={handleChange}
                    className={classes.root}
                    id="outlined-multiline-static"
                    label="Authorization Key"
                    multiline
                    rows={8}
                    variant="outlined"
                    error={textFieldError}
                    helperText={helperText}
                />
                <Box marginTop={1}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.submitButton}
                        onClick={() => handleSubmit(props)}
                    >Send Key</Button>
                </Box>
            </Container>
        </Fragment>
    );
}

export default AdminPage;
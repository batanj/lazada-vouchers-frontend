import React, { Fragment } from 'react';
import { Container, Typography } from '@material-ui/core';
import { SentimentVeryDissatisfiedSharp } from '@material-ui/icons';
import Header from '../header/index';

const Error404 = props => {
    return (
        <Fragment>
            <Header {...props} />
            <Container width="sm" style={{ marginTop: 80 }} align="center">
                <SentimentVeryDissatisfiedSharp style={{ fontSize: 120, color: "red", paddingBottom: 50 }} />
                <Typography variant="h3">
                    Error 404: Page not Found.
                </Typography>
            </Container>
        </Fragment>
    );
}

export default Error404;
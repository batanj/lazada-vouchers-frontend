import React from 'react';
import { Container, Typography, Button } from '@material-ui/core';

const Footer = props => {
    const buttonSwitcher = () => {
        const buttons = [];
        if (props.page !== "Terms of Use")
            buttons.push(<Button key="tos" size="small" style={{ borderRadius: 0 }} color="default" onClick={() => props.history.push('/terms-of-use')}>
                Terms of Use
        </Button>);

        if (props.page !== "Privacy Policy")
            buttons.push(<Button key="pp" size="small" style={{ borderRadius: 0 }} color="default" onClick={() => props.history.push('/privacy-policy')}>
                Privacy Policy
            </Button>);

        return buttons;
    }

    return (
        <Container align="center" style={{ padding: 20, marginTop: 20 }}>
            {buttonSwitcher()}
            <Typography variant="caption" display="block" style={{ marginTop: 40 }}><em>Since 2020</em></Typography>
        </Container>
    );
}

export default Footer;
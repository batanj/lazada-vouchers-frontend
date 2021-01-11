import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, InputBase, Button, Container } from '@material-ui/core';
import { SearchSharp } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        background: '#0F1111'
    },
    logo: {
        fontWeight: '900',
        fontSize: 24,
        minWidth: 230
    },
    search: {
        marginLeft: 40,
        display: 'flex',
        flex: 1,
        minWidth: 330
    },
    inputRoot: {
        background: '#fff',
        padding: 5,
        minWidth: window.innerWidth - 650
    },
    searchInput: {
        background: '#fff'
    },
    submitButton: {
        background: '#f08804',
        borderRadius: 0,
        padding: 9,
        top: -1,
        color: '#000',
        '&:hover': {
            background: '#f08804',
            color: '#fff'
        }
    },
    winButton: {
        backgroud: '#fff',
        color: '#0F146D',
        borderRadius: 0,
        padding: 8,
        top: -1,
        minWidth: 180,
        '&:hover': {
            background: '#f50057',
            color: '#fff'
        }
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        '&hover': {
            color: '#0F146D'
        }
    }
});

const Header = props => {
    const classes = useStyles();

    return (
        <Container maxWidth="sm">
            <AppBar position="fixed" classes={{ root: classes.root }}>
                <Toolbar>
                    <Typography className={classes.logo}>
                        <Link to="/" className={classes.link}>LAZADA VOUCHERS</Link>
                    </Typography>
                    <div className={classes.search}>
                        <form>
                            <InputBase
                                placeholder="Search a Product"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.searchInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                            <Button variant="contained" className={classes.submitButton}>
                                <SearchSharp />
                            </Button>
                        </form>
                    </div>
                    <div>
                        <Button variant="contained" className={classes.winButton} onClick={() => window.open("https://c.lazada.com.ph/t/c.YQ7w", "_blank")}>Win a Cash Wallet!</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </Container>
    );
}

export default Header;
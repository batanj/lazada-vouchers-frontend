import React, { Fragment, useState } from 'react';
import { Container, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Header from '../header/index';
import bannersService from '../../services/bannersService';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles({
    root: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderRadius: 0,
            },
        },
        width: '100%'
    },
    button: {
        borderRadius: 0
    },
    margin: {
        marginTop: 20
    },
    containerMargin: {
        marginTop: 80,
        paddingBottom: 50
    }
});

const AddBanner = props => {
    const classes = useStyles();
    const bannerObj = {
        location: '',
        image: '',
        title: '',
        description: '',
        affiliateLink: ''
    };
    const [banner, setBanner] = useState({ ...bannerObj });

    const handleSubmit = async () => {
        try {
            const result = await bannersService.post(banner);
            setBanner({ ...bannerObj });
            toast.success(`${result.data.title} @ ${result.data.location} has been added.`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        catch (e) {
            toast.error(e.data.error, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <Fragment>
            <Header {...props} />
            <Container maxWidth="sm" className={classes.containerMargin} align="center">
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={
                        () => props.history.push('/admin/add-product')
                    }
                    className={classes.button}
                >
                    Add a Product
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    disabled
                    className={classes.button}
                >
                    Add a Banner
                    </Button>
                <div align="left" className={classes.margin}>
                    <TextField
                        className={classes.root}
                        label="Location"
                        variant="outlined"
                        onChange={e => setBanner({ ...banner, location: e.target.value })}
                        value={banner.location}
                    />
                </div>
                <div align="left" className={classes.margin}>
                    <TextField
                        className={classes.root}
                        id="outlined-multiline-static"
                        label="Separate Image URLs by line."
                        multiline
                        rows={8}
                        variant="outlined"
                        onChange={e => setBanner({ ...banner, image: e.target.value })}
                        value={banner.image}
                    />
                </div>
                <div align="left" className={classes.margin}>
                    <TextField
                        className={classes.root}
                        label="Title"
                        variant="outlined"
                        onChange={e => setBanner({ ...banner, title: e.target.value })}
                        value={banner.title}
                    />
                </div>
                <div align="left" className={classes.margin}>
                    <TextField
                        className={classes.root}
                        label="Description"
                        variant="outlined"
                        multiline
                        rows={4}
                        onChange={e => setBanner({ ...banner, description: e.target.value })}
                        value={banner.description}
                    />
                </div>
                <div align="left" className={classes.margin}>
                    <TextField
                        className={classes.root}
                        label="Affiliate Link"
                        variant="outlined"
                        onChange={e => setBanner({ ...banner, affiliateLink: e.target.value })}
                        value={banner.affiliateLink}
                    />
                </div>
                <div className={classes.margin}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={handleSubmit}
                    >
                        Submit Banner
                    </Button>
                </div>
            </Container>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Fragment>
    );
}

export default AddBanner;
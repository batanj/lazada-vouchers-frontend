import React, { Fragment, useState } from 'react';
import { Container, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Header from '../header';
import Categories from './categories';
import Rating from './rating';
import productsService from '../../services/productsService';

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

const AddProduct = props => {
    const classes = useStyles();
    const [product, setProduct] = useState({
        categoryId: '',
        images: '',
        name: '',
        rating: 0,
        discount: 0,
        price: 0,
        affiliateLink: '',
        details: ''
    });

    const handleSubmit = async () => {
        try {
            const result = await productsService.post(product);
            toast.success(`${result.data.name} has been added.`, {
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
                    disabled
                    className={classes.button}
                >
                    Add a Product
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={
                        () => props.history.push('/admin/add-banner')
                    }
                    className={classes.button}
                >
                    Add a Banner
                    </Button>
                <div align="left" className={classes.margin}>
                    <Categories {...props} product={product} setProduct={setProduct} />
                </div>
                <div align="left" className={classes.margin}>
                    <TextField
                        className={classes.root}
                        id="outlined-multiline-static"
                        label="Separate Image URLs by line."
                        multiline
                        rows={8}
                        variant="outlined"
                        onChange={e => setProduct({ ...product, images: e.target.value })}
                    />
                </div>
                <div align="left" className={classes.margin}>
                    <TextField
                        className={classes.root}
                        label="Product Name"
                        variant="outlined"
                        onChange={e => setProduct({ ...product, name: e.target.value })}
                    />
                </div>
                <div align="left" className={classes.margin}>
                    <Rating {...props} setProduct={setProduct} product={product} />
                </div>
                <div align="left" className={classes.margin}>
                    <TextField
                        className={classes.root}
                        label="Discount"
                        variant="outlined"
                        onChange={e => setProduct({ ...product, discount: e.target.value })}
                    />
                </div>
                <div align="left" className={classes.margin}>
                    <TextField
                        className={classes.root}
                        label="Price"
                        variant="outlined"
                        onChange={e => setProduct({ ...product, price: e.target.value })}
                    />
                </div>
                <div align="left" className={classes.margin}>
                    <TextField
                        className={classes.root}
                        label="Affiliate Link"
                        variant="outlined"
                        onChange={e => setProduct({ ...product, affiliateLink: e.target.value })}
                    />
                </div>
                <div align="left" className={classes.margin}>
                    <TextField
                        className={classes.root}
                        label="Product Details"
                        variant="outlined"
                        multiline
                        rows={4}
                        onChange={e => setProduct({ ...product, details: e.target.value })}
                    />
                </div>
                <div className={classes.margin}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={handleSubmit}
                    >
                        Submit Product
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

export default AddProduct;
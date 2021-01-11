import React, { Fragment, useState, useEffect } from 'react';
import { Container, Typography, Grid, Paper } from '@material-ui/core';
import Header from '../header/index';
import Footer from '../footer/index';
import bannersService from '../../services/bannersService';
import productsService from '../../services/productsService';

const HomePage = props => {
    const [banners, setBanners] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getBanners() {
            const result = await bannersService.get("home-page-top-banner");
            if (result.data)
                setBanners([...result.data]);
        }

        async function getProducts() {
            const result = await productsService.get(10);
            if (result.data)
                setProducts([...result.data]);
        }

        getBanners();
        getProducts();
    }, []);

    const showTopBanners = () => {
        return banners.map((banner, index) =>
            <Grid item style={{ width: 250, marginTop: 20 }} key={index}>
                <Paper square style={{ padding: 5, cursor: "pointer" }} onClick={() => window.open(banner.affiliateLink, "_blank")}>
                    <img src={banner.image} alt={banner.title} width="240" />
                </Paper>
            </Grid>
        );
    };

    const showProducts = () => {
        return products.map(product =>
            <Grid item style={{ width: 250, marginTop: 20 }} key={product._id}>
                <Paper square style={{ padding: 5, cursor: "pointer" }} onClick={() => props.history.push(`/product/${product._id}`)}>
                    <div style={{ position: "relative" }}>
                        <Typography variant="h2" display="block" style={{
                            position: "absolute",
                            top: 100,
                            left: 60,
                            color: 'rgba(255,0,0,0.33)',
                            fontWeight: 'bold'
                        }}>
                            -{product.discount}%
                    </Typography>
                    </div>
                    <Typography variant="body1">
                        {product.name}
                    </Typography>
                    <img src={product.images.split('\n')[0]} alt={product.name} width="240" />
                </Paper>
            </Grid>
        );
    };


    return (
        <Fragment>
            <Header {...props} />
            <Container width="sm" style={{ marginTop: 80 }} align="center">
                <Typography variant="h1" style={{ fontSize: 32, fontWeight: "bold" }}>
                    Lazada Vouchers & Discount Coupons
                </Typography>
                <Typography variant="h2" style={{ fontSize: 20 }}>
                    Enjoy great savings when you buy a product using our codes.
                </Typography>
                <Grid container justify="space-between">
                    {showTopBanners()}
                </Grid>
                <Grid container justify="space-between">
                    {showProducts()}
                </Grid>
                <Typography variant="body1" style={{ textAlign: "justify", fontSize: 13, marginTop: 20 }}>
                    <strong>Get the best discounts our Lazada voucher codes & Coupons.</strong><br />
                    LazadaVouchers.com is where online shoppers go to find vouchers, coupon codes & promos where they can get discounts when they shop at Lazada Philippines. As one of the best website in the Philippines to get vouchers codes, we gather the best products with huge savings and list it here on our website. If you are looking for to save more money and just do not have the time to manually search Lazada Philippines then this website is for you, we are always on the lookout for the best deals available and our site is updated multiple times a day every day of the week to give you the latest discounts available.
                </Typography>
                <Typography variant="body1" style={{ textAlign: "justify", fontSize: 13, paddingTop: 10 }}>
                    <strong>How to use our Vouchers when shopping Lazada Philippines through our site?</strong><br />
                    Getting a discount on your chosen item is easy as 1 2 3. Find the product you want to buy through browsing our site or using the search bar at the top, then open the product page and click on the "Get Voucher Code" button. It will open the page from lazada with the voucher or coupon code already added.
                </Typography>
                <Typography variant="body1" style={{ textAlign: "justify", fontSize: 13, paddingTop: 10 }}>
                    <strong>Our Lazada vouchers just work.</strong><br />
                    All products listed in our site have either vouchers already applied or you get to have the coupon codes yourself. Either way, you get what you came here for, which is to save money on you purchase.
                </Typography>
            </Container>
            <Footer {...props} />
        </Fragment>
    );
}

export default HomePage;
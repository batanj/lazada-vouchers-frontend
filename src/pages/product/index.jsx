import React, { Fragment, useState, useEffect } from 'react';
import { Container, Typography, Button, Grid, Paper } from '@material-ui/core';
import { StarSharp, StarHalfSharp } from '@material-ui/icons';
import productsService from '../../services/productsService';
import Header from '../header';
import Footer from '../footer';

const Product = props => {
    const [product, setProduct] = useState({});
    const [details, setDetails] = useState([]);
    const [images, setImages] = useState([]);
    const [imgIndex, setImgIndex] = useState({ count: 0 });
    const productId = props.match.params.id;

    useEffect(() => {
        async function getProduct() {
            const { data } = await productsService.getSingle(productId);
            if (data) {
                setProduct({ ...data });
                setImages(data.images.split('\n'));
                setDetails(data.details.split('\n'));
            }
        }
        getProduct();
    }, [productId]);

    const swapIndex = () => {
        const count = imgIndex.count + 1;
        if (imgIndex.count < images.length - 1) {
            setImgIndex({ count: count });
            return;
        }

        setImgIndex({ count: 0 });
    };

    const showRating = () => {
        let stars = [];
        for (let i = 0; i < Math.floor(product.rating); i++)
            stars.push(<StarSharp key={i} />);
        if (product.rating % 1)
            stars.push(<StarHalfSharp key={5} />);
        return stars;
    };

    return (
        <Fragment>
            <Header {...props} />
            <Container width="sm" style={{ marginTop: 80 }}>
                <Typography
                    variant="h5"
                    display="block"
                    style={{ marginTop: 40, fontWeight: "bold" }}
                >
                    {product.name}
                </Typography>
                <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    <Grid item style={{ marginTop: 20 }}>
                        <Paper square style={{ padding: 5, cursor: "pointer" }} onClick={() => swapIndex()}>
                            <img src={images[imgIndex.count]} alt={`$(product.name)`} key={imgIndex.count} width="560" />
                        </Paper>
                        <Typography
                            display="block"
                            variant="caption"
                            style={{ marginTop: 10, textAlign: "center" }}
                        >
                            There are {images.length} images. Click on the image to swap.
                        </Typography>
                    </Grid>
                    <Grid item style={{ marginTop: 20, marginLeft: 20 }}>
                        <Typography
                            variant="h6"
                            display="block"
                            style={{ fontWeight: "bold" }}
                        >
                            ₱ {product.price}
                        </Typography>
                        <Button
                            variant="contained"
                            color="secondary"
                            style={{ borderRadius: 0 }}
                            size="large"
                            onClick={() => window.open(product.affiliateLink, "_blank")}
                        >
                            Get {product.discount}% Voucher
                        </Button>
                        <div style={{ display: "block", marginTop: 10, color: "gold" }}>
                            {showRating()}
                        </div>
                        {details.map((detail, index) => <Typography
                            display="block"
                            variant="body2"
                            style={{ marginTop: 10, textAlign: "left" }}
                            key={index}
                        >
                            &mdash; {detail}
                        </Typography>
                        )}
                    </Grid>
                </Grid>
            </Container>
            <Footer {...props} />
        </Fragment>
    );
}

export default Product;
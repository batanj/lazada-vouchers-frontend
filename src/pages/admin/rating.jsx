import React, { Fragment } from 'react';
import { Slider, Typography } from '@material-ui/core';

const Rating = props => {
    const handleChange = e => {
        props.setProduct({ ...props.product, rating: e.target.ariaValueNow });
    }

    return (
        <Fragment>
            <Typography id="discrete-slider" gutterBottom>
                Rating
            </Typography>
            <Slider
                defaultValue={0}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={0.1}
                marks
                min={0}
                max={5}
                onChange={handleChange}
            />
        </Fragment>
    );
}

export default Rating;
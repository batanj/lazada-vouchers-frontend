import React, { Fragment, useEffect, useState } from 'react';
import { FormControl, InputLabel, Select } from '@material-ui/core';
import categoriesService from '../../services/categoriesService';
import CategoryDialog from './categoryDialog';

const Categories = props => {
    const [categories, setCategories] = useState([]);
    const [categoryIndex, setCategoryIndex] = useState("-1");
    const [previousIndex, setPreviousIndex] = useState("-1");

    useEffect(() => {
        async function getCategories() {
            try {
                const result = await categoriesService.get();
                if (result)
                    setCategories(result.data.sort((a, b) => a.name > b.name ? 1 : -1));
            }
            catch (error) {

            }
        }
        getCategories();
    }, []);

    const convertArrayToObject = (array, key) => {
        const initialValue = {};
        return array.reduce((obj, item) => {
            return {
                ...obj,
                [item[key]]: item,
            };
        }, initialValue);
    };

    const setParentCategory = category => {
        const tmp = convertArrayToObject(categories, '_id');
        for (let tmpCategory = category; tmpCategory._id !== null; tmpCategory = tmp[tmpCategory._id]) {
            if (!tmpCategory.parentId)
                props.setProduct({ ...props.product, parentCategoryId: tmpCategory._id });
        }
    };

    const handleChange = e => {
        const currentIndex = e.target.value;

        setPreviousIndex(categoryIndex);
        setCategoryIndex(currentIndex);

        if (previousIndex > categoryIndex) {
            setPreviousIndex("-1");
        }

        if (currentIndex >= 0) {
            const selectedCategory = categories[currentIndex]._id;
            props.setProduct({ ...props.product, categoryId: selectedCategory });
            setParentCategory(selectedCategory);
        } else {
            delete props.product.categoryId
            props.setProduct({ ...props.product });
        }
    }

    const addCategory = category => {
        setCategories([category, ...categories]);
        setCategoryIndex("-1");
    }

    const showNone = () => {
        if (categoryIndex === "-1")
            return <option value="-1" disabled>None</option>
    }

    const showPrevious = () => {
        if (categoryIndex >= 0)
            return (
                <Fragment>
                    <option value={previousIndex}>&larr; Previous Category</option>
                    <option value={categoryIndex}>{categories[categoryIndex].name}</option>
                </Fragment>
            )
    }

    const showSelectables = () => {
        if (categoryIndex === "-1") {
            return categories.map(
                (category, index) => !category.parentId && <option value={index} key={category._id}>{category.name}</option>
            )
        }
        return categories.map(
            (category, index) => category.parentId === categories[categoryIndex]._id && <option value={index} key={category._id}>{category.name}</option>
        )
    }

    return (
        <Fragment>
            <FormControl variant="outlined">
                <InputLabel htmlFor="select">Category</InputLabel>
                <Select
                    native
                    value={categoryIndex}
                    onChange={handleChange}
                    label="Category"
                    inputProps={{
                        name: 'category',
                        id: 'select',
                    }}
                    style={{ borderRadius: 0 }}
                >
                    {showNone()}
                    {showPrevious()}
                    {showSelectables()}
                </Select>
            </FormControl>
            <CategoryDialog categoryIndex={categoryIndex} categories={categories} addCategory={addCategory} {...props} />
        </Fragment >
    );
}

export default Categories;
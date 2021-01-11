import React, { Fragment, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@material-ui/core';
import { toast } from 'react-toastify';
import categoriesService from '../../services/categoriesService';

const CategoryDialog = props => {
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState({
        name: '',
        slug: '',
        parentId: ''
    });
    const [error, setError] = useState('');

    const { categoryIndex, categories, addCategory } = props;

    const handleClose = () => {
        setOpen(false);
    }

    const handleSubmit = async () => {
        try {
            category.parentId = categories[categoryIndex]._id;

            if (categoryIndex === -1)
                delete category.parentId;

            const result = await categoriesService.post(category);

            const { name, slug, parentId } = result.data;
            addCategory({ name, slug, parentId });

            setOpen(false);
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
    }

    return (
        <Fragment>
            <Button
                variant="contained"
                style={{ borderRadius: 0, marginLeft: 10, height: 55 }}
                onClick={() => setOpen(true)}
            >Add Category
            </Button>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Category</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        id="parent"
                        label="Parent"
                        value={categoryIndex >= 0 ? categories[categoryIndex].name : 'None'}
                        type="text"
                        fullWidth
                        disabled
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="categoryName"
                        label="Name"
                        type="text"
                        fullWidth
                        onChange={e => {
                            setCategory({ name: e.target.value, slug: category.slug });
                            setError('');
                        }}
                        error={error ? true : false}
                        helperText={error ? error : ''}
                    />
                    <TextField
                        margin="dense"
                        id="categorySlug"
                        label="Slug"
                        type="text"
                        fullWidth
                        onChange={e => {
                            setCategory({ name: category.name, slug: e.target.value });
                            setError('');
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}

export default CategoryDialog;
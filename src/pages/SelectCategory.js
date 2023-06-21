import React, {useEffect, useState} from 'react';
import {useNetwork} from '../utils/networking'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import useStyles from '../useStyles'
import {baseURL, apiKey, dummyImageUrl} from '../utils/client'
import {NewsGrid} from '../components/NewsGrid';
import Alert from '@mui/material/Alert';

const SelectCategory = ({ match }) => {

    const category = match.params.id
    const classes = useStyles();

    const [title, setTitle] = useState("")

    useEffect(()=> {
        setTitle(category)
    },[category])

    const {data, error, loading } = useNetwork(`${baseURL}/top-headlines?&lang=en&category=${category}&apikey=${apiKey}`)


    return (
        <Grid container className={classes.root}>
        <Typography style={{fontWeight:"bold", marginBottom: 20, textTransform: 'capitalize'}} color="primary" variant="h6">
            {title}
        </Typography>
        <NewsGrid data={data} loading={loading} dummyImageUrl={dummyImageUrl}/>
        {error && <Alert severity="error">Network Error... Please try again!</Alert>}
        </Grid>
        );
}

export default SelectCategory;
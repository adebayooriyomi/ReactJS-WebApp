import React from 'react';
import { useNetwork } from '../utils/networking'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import useStyles from '../useStyles'
import {baseURL, apiKey, dummyImageUrl} from '../utils/client'
import {NewsGrid} from '../components/NewsGrid'


import Alert from '@mui/material/Alert';


const TopStories = () => {

    const classes = useStyles();

    const {data, error, loading } = useNetwork(`${baseURL}/top-headlines?&lang=en&country=us&max=10&apikey=${apiKey}`)

    return (
            <Grid container className={classes.root}>
                <Typography style={{fontWeight:"bold", marginBottom: 20}} color="primary" variant="h6">
                    Top Stories
                </Typography>
                <NewsGrid data={data} loading={loading} dummyImageUrl={dummyImageUrl}/>
                {error && <Alert severity="error">Network Error... Please try again!</Alert>}
            </Grid>
        );
}

export default TopStories;
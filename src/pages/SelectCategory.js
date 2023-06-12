import React, { useState, useEffect } from 'react';
import networking from '../utils/networking'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia';
import { truncateSentence } from '../utils/utils';
import useStyles from '../useStyles'
import {formatDate} from '../utils/utils'


const SelectCategory = ({ match }) => {

    const category = match.params.id
    const classes = useStyles();

    const [data, setData] = useState([])
    const [title, setTitle] = useState("")
    
    useEffect(() => {
            const fetchData = async () => {
                const body = await networking.fetchSources(category)
                setData(body);
                setTitle(category)
            }
            fetchData();
    }, [category]);


    return (
        <Grid container className={classes.root}>
        <Typography style={{fontWeight:"bold", marginBottom: 20, textTransform: 'capitalize'}} color="primary" variant="h6">
            {title}
        </Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {data && data.map((data, key) => (
                <Grid key={key} item xs={12} sm={12} md={6} lg={3} style={{ padding: 10}}>
                    <CardActionArea onClick={() => window.open(data.url, "_blank")}>
                    <Card>
                        <CardMedia
                            className={classes.media}
                            image={data.image}
                            title={data.title}
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography variant="caption" color="textSecondary">
                            {data.source.name}
                            </Typography>
                            <Typography style={{fontWeight:"bold", lineHeight: 1.5}} gutterBottom variant="subtitle1" display="block">
                            {truncateSentence(data.title, 90)}
                            </Typography>
                            <Typography variant="caption" color="textSecondary">
                            {formatDate(data.publishedAt)}
                            </Typography>
                        </CardContent>
                    </Card>
                    </CardActionArea>
                </Grid>
            ))}
            </Grid>
        </Grid>
        );
}

export default SelectCategory;
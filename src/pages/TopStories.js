import React, { useState, useEffect } from 'react';
import networking from '../utils/networking'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import useStyles from '../useStyles'


const TopStories = ({ match }) => {

    const classes = useStyles();
    const [data, setData] = useState([])
     
    useEffect(() => {
            const fetchData = async () => {
                const body = await networking.fetchHeadlines()
                setData(body);
            }
            fetchData();
    }, []);

    return (
            <Grid container className={classes.root}>
                <Typography style={{fontWeight:"bold", marginBottom: 20}} color="primary" variant="h6">
                    Top Stories
                </Typography>
                <Grid item>
                    <Grid container spacing={2}>
                    {data.map((data, key) => (
                        <Grid key={key} item>
                            <CardActionArea onClick={() => window.open(data.url, "_blank")}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={data.urlToImage}
                                    title={data.title}
                                />
                                <CardContent>
                                    <Typography variant="caption" color="textSecondary">
                                    {data.source}
                                    </Typography>
                                    <Typography style={{fontWeight:"bold", lineHeight: 1.5}} gutterBottom variant="subtitle1" display="block">
                                    {data.title}
                                    </Typography>
                                    <Typography variant="caption" color="textSecondary">
                                    {data.publishedAt}
                                    </Typography>
                                </CardContent>
                            </Card>
                            </CardActionArea>
                        </Grid>
                    ))}
                    </Grid>
                </Grid>
            </Grid>
        );
}

export default TopStories;
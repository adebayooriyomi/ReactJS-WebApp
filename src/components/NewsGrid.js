import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import {formatDate} from '../utils/utils'
import { truncateSentence } from '../utils/utils';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import useStyles from '../useStyles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

export const NewsGrid = ({data, loading, dummyImageUrl}) => {
    const classes = useStyles();
    return (
    <Grid container>
        {loading ? <CircularProgress /> :
        data && data.map((data, key) => (
            <Grid key={key} item xs={12} sm={12} md={6} lg={3} style={{ padding: 10}}>
                <CardActionArea onClick={() => window.open(data.url, "_blank")}>
                <Card>
                    <CardMedia
                        className={classes.media}
                        image={data.image || dummyImageUrl}
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
    )
}
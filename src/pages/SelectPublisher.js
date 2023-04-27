import React, { useState, useEffect } from 'react';
import networking from '../utils/networking'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import useStyles from '../useStyles'


const SelectPublisher = ({ match }) => {

    const newId = match.params.id
    const classes = useStyles();

    const [data, setData] = useState([])
    const [title, setTitle] = useState("")
    
        
    useEffect(() => {
            const fetchData = async () => {
                const body = await networking.fetchHeadlines(newId)
                setData(body);
                setTitle(body[0].source)
            }
            fetchData();
    }, [newId]);

    return (
            <Grid container className={classes.root}>
                 <Typography style={{marginBottom: 20, marginRight: 10}}>
                    <Button size="small" variant="outlined" onClick={() => window.history.back()} className={classes.button}>
                        <ArrowBackRoundedIcon/>
                    </Button>
                </Typography>
                 <Typography style={{fontWeight:"bold", marginBottom: 20}} color="primary" variant="h6">
                    {title}
                </Typography>
                <Grid item xs={12}>
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

export default SelectPublisher;
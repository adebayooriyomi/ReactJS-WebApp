import React, { useState, useEffect } from 'react';
import networking from '../utils/networking'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import StarHalfRoundedIcon from '@material-ui/icons/StarHalfRounded';
import Button from '@material-ui/core/Button';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import { Link } from 'react-router-dom';
import useStyles from '../useStyles'


const SelectCategory = ({ match }) => {

    const category = match.params.id
    const classes = useStyles();

    const [data, setData] = useState([])
    const [title, setTitle] = useState("")
    
    useEffect(() => {
            const fetchData = async () => {
                const body = await networking.fetchSources(category)
                setData(body);
                setTitle(body[0].category)
            }
            fetchData();
    }, [category]);


    return (
            <Grid container className={classes.root}>
                <Typography style={{marginBottom: 20, marginRight: 10}}>
                    <Button size="small" variant="outlined" onClick={() => window.history.back()} className={classes.button}>
                        <ArrowBackRoundedIcon/>
                    </Button>
                </Typography>
                <Typography style={{fontWeight:"bold", marginBottom: 20, textTransform: 'capitalize'}} color="primary" variant="h6">
                    
                    {title}
                </Typography>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                    {data.map((data, key) => (
                        <Grid key={key} item>
                            <Link style={{textDecoration:"none"}} to={`/SelectPublisher/${data.id}`}>
                            <CardActionArea>
                                <Card className={classes.card2}> 
                                    <CardContent>                                
                                        <StarHalfRoundedIcon color="action"/>
                                    <Typography style={{fontWeight:"bold", lineHeight: 1.5}}  variant="h6">
                                        {data.name}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                        {data.category}
                                        </Typography>
                                        <Typography variant="body3" color="textSecondary" gutterBottom>
                                        {data.description.substring(0, 150)}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </CardActionArea>
                            </Link>
                        </Grid>
                    ))}
                    </Grid>
                </Grid>
            </Grid>
        );
}

export default SelectCategory;
import React, { useState, useEffect } from 'react';
import networking from '../utils/networking'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import StarHalfRoundedIcon from '@material-ui/icons/StarHalfRounded';
import { Link } from 'react-router-dom';
import useStyles from '../useStyles'

const Publishers = ({ match }) => {

    const classes = useStyles();
    const [data, setData] = useState([])
    
    useEffect(() => {
            const fetchData = async () => {
                const body = await networking.fetchSources()
                setData(body);
            }
            fetchData();
    }, []);

    return (
            <Grid container className={classes.root}>
                  <Typography style={{fontWeight:"bold", marginBottom: 20}} color="primary" variant="h6">
                    Publishers
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
                                    <Typography style={{fontWeight:"bold", lineHeight: 1.5}}  variant="subtitle1">
                                        {data.name}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                        {data.category}
                                        </Typography>
                                        <Typography variant="inherit" color="textSecondary" gutterBottom>
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

export default Publishers;
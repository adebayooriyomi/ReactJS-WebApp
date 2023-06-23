import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';
import useStyles from '../useStyles'
import { Search } from '../components/Search'

const Category = () => {

    const classes = useStyles();
    const [data, setData] = useState([])
    
    useEffect(() => {
      setData(newsList);
    }, []);

    return (
      <>
    
            <Grid container className={classes.root}>
                <Typography style={{fontWeight:"bold", marginBottom: 20}} color="primary" variant="h6">
                    Category
                </Typography>
                  <Grid container>
                    {data.map((data, key) => (
                       <Grid key={key} item xs={12} sm={12} md={6} lg={3} style={{ padding: 10}}>
                            <Link style={{textDecoration:"none"}} to={`/SelectCategory/${data.id}`}>
                              <CardActionArea>
                                  <Card>                         
                                      <CardMedia
                                          className={classes.media}
                                          image={data.image}
                                          title={data.title}
                                      />
                                      <CardContent> 
                                      <Typography style={{fontWeight:"bold", lineHeight: 1.5}}  variant="subtitle1">
                                          {data.title}
                                      </Typography>
                                      </CardContent>
                                  </Card>
                              </CardActionArea>
                            </Link>
                        </Grid>
                    ))}
                  </Grid>
            </Grid>
            </>
        );
}

export default Category;

const newsList = [
  {
    id: 'business',
    title: 'Business',
    image: require('../images/business.jpg'),
    icon: 'ios-globe'
  },
  {
    id: 'entertainment',
    title: 'Entertainment',
    image: require('../images/entertainment.jpg'),
    icon: 'ios-film'
  },
  {
    id: 'general',
    title: 'General',
    image: require('../images/general.jpg'),
    icon: 'logo-usd'
  },
  {
    id: 'health',
    title: 'Health',
    image: require('../images/health.jpg'),
    icon: 'ios-medkit'
  },
  {
    id: 'science',
    title: 'Science',
    image: require('../images/science.jpg'),
    icon: 'md-flask'
  },
  {
    id: 'sports',
    title: 'Sports',
    image: require('../images/sports.jpg'),
    icon: 'md-football'
  },
  {
    id: 'technology',
    title: 'Technology',
    image: require('../images/technology.jpg'),
    icon: 'ios-phone-portrait'
  },
  {
    id: 'world',
    title: 'World',
    image: require('../images/world.jpg'),
    icon: 'ios-phone-portrait'
  },
]
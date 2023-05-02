import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 320,
        width: 320,
        height: 370
      },
      cardContent:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 180,
      },
      card2: {
        maxWidth: 320,
        width: 320,
        height: 160
      },
      card3: {
        minWidth: 320,
        maxWidth: 320,
        height: 255
      },
      media: {
        height: 200,
      },
      root: {
        flexGrow: 1,
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
}));

export default useStyles;

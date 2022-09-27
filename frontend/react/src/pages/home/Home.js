
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Header';
import MainBackgroundGrid from './ MainBackgroundGrid';
import Service from './Service';
import Footer from './Footer';
import Calender from './components/Calender'
import ChatButton from './components/ChatButton';
import * as React from 'react';


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  chatButton: {
    height: 48,
  },
  img: {
    backgroundImage: 'https://c.pxhere.com/photos/96/9d/path_autumn_fall_park_trail-99101.jpg!d'
  },
}));

const mainBackgroundGrid = {
  title: '成长以书为伴，从此不再孤单。',
  description:
    "",
  image: 'https://www.smartertravel.com/wp-content/uploads/2017/08/Getting-to-the-Grand-Canyon.jpg',
  imgText: 'main image description',
};

export default function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div 
      // style={{ backgroundImage: `url(${'https://c.pxhere.com/photos/96/9d/path_autumn_fall_park_trail-99101.jpg!d'})` }}
      >
      {/* <CssBaseline /> */}
      <Container maxWidth="lg">
        <Header title="读书会" />
        <div >
          <MainBackgroundGrid post={mainBackgroundGrid} />
          {/* <Grid container spacing={30}>
            {servicesInfo.map((post) => (
              <Service key={post.title} post={post} />
            ))}
          </Grid> */}
        </div>
      </Container>
      <Calender />
      </div>
    </React.Fragment>
  );
}

// import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import Service from './Service';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import * as React from 'react';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: '我们是谁?', url: '#', option1: '我们是谁op',  option2: '我们是谁op'},
  { title: '我们的目标', url: '#', option1: '我们的目标op',  option2: '我们的目标op' },
  { title: '服务', url: '#', option1: 'Chat',  option2: 'Call' },
  { title: 'OSU资源合集', url: '#', option1: 'OSU资源合集op',  option2: 'OSU资源合集op' },
  { title: '建立社区', url: '#', option2: '建立社区op',  option3: '建立社区op' },
  { title: '加入我们', url: '#', option1: 'Chat',  option2: 'Call' },
];

const mainFeaturedPost = {
  title: '朋辈咨询',
  description:
    "我们在一起",
  image: 'https://bunow.com/wp-content/uploads/2021/09/250248AF-F0B9-4A7A-92C2-D1A298C2D65B.jpeg',
  imgText: 'main image description',
  // linkText: 'Continue reading…',
};

const servicesInfo = [

  {
    service1: 'call',
    service2: 'chat',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Add about here.',
  archives: [
    { title: 'Augest 2022', url: '#' },

  ],
  social: [
    // { name: 'GitHub', icon: GitHubIcon },
    // { name: 'Twitter', icon: TwitterIcon },
    // { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="朋辈咨询" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={30}>
            {servicesInfo.map((post) => (
              <Service key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="" description="CPCOH" />
    </React.Fragment>
  );
}

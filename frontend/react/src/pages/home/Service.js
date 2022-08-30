
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import Check from '@mui/icons-material/Check';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';


// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});


export default function Service(props) {
  const classes = useStyles();
  const { post } = props;

  const [callServie, setCallService] = useState(false)
  const [chatServie, setChatServie] = useState(false)

    const handleCallClick=(e)=>{
    e.preventDefault()
      setCallService(true)
    
    console.log("callServie: " + callServie)
    }

    const handleChatClick=(e)=>{
      e.preventDefault()
      setChatServie(true)
      
      console.log("chatServie: " + chatServie)
      window.open("http://localhost:3000/chat")
    }

    const buttons = [
      <Button size='large' onClick={handleCallClick} id="call">{post.service1}</Button>,
      <Button size='large' onClick={handleChatClick} key="two">{post.service2}</Button>,
    ];

  return (
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
    <Box
      sx={{
        display: 'flex',
        '& > *': {
          m: 2,
        },
      }}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
      >
        {buttons}
      </ButtonGroup>
    </Box>
    </Paper>
  );
}

Service.propTypes = {
  post: PropTypes.object,
};

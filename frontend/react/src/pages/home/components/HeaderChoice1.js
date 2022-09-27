import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleAboutClick = (event) => {
  };

  const handleResourceClick = (event) => {
    window.open('https://swc.osu.edu/health-and-wellness-resource-guide?Wellness+Dimension=6')
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
    console.log(Window.name)
  };


  return (
    <div>
      <Button
        id="about-button"
        onClick={handleAboutClick}
        style={{
          color: "black",
          padding: "18px 36px",
          fontSize: "18px"
      }}
      >
        关于我们
      </Button>

      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}

        style={{
          color: "black",
          padding: "18px 36px",
          fontSize: "18px"
      }}
      >
        读书会
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        style={{
          color: "black",
          padding: "18px 36px",
          fontSize: "18px"
      }}
      >
        <MenuItem onClick={handleClose}>时间表</MenuItem>
        <MenuItem onClick={handleClose}>进行中</MenuItem>
        <MenuItem onClick={handleClose}>往期图书</MenuItem>
      </Menu>

      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleResourceClick}
        style={{
          color: "black",
          padding: "18px 36px",
          fontSize: "18px"
      }}
      >
        OSU资源
      </Button>

      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}

        style={{
          color: "black",
          padding: "18px 36px",
          fontSize: "18px"
      }}
      >
        加入读书会
      </Button>
    </div>

    
  );
}
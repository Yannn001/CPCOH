import * as React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const handleLeftMouseOver = (e) => {
  document.getElementById("left-container").style.boxShadow = '0px 10px 15px -8px';
};

const handleLeftMouseOut = (e) => {
  document.getElementById("left-container").style.boxShadow = '0px 10px 0px -8px rgb(255, 255, 255)';
};
const handleRightMouseOver = (e) => {
  document.getElementById("right-container").style.boxShadow = '0px 10px 15px -8px';
};

const handleRightMouseOut = (e) => {
  document.getElementById("right-container").style.boxShadow = '0px 10px 0px -8px rgb(255, 255, 255)';
};

const useStyles = makeStyles((theme) => ({
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
}));

export default function Calender() {
  const classes = useStyles();
  return (
    <div class="calender">
      <hr size="1" width="86%" color="grey" />
      <div
        id='left-container'
        class="left-event-container"
        onMouseOver={handleLeftMouseOver}
        onMouseOut={handleLeftMouseOut}
      >
        <div class="book-info">
          <img src="https://meet.eslite.com/Content/Images/Article/1200x628_20220209143427.jpg"
            alt="Italian Trulli"
            class="pic" />
        </div>
        {/* new event seperator */}
        <div class="event">
          <div class="event-left">
            <div class="event-date">
              <div class="date">15</div>
              <div class="month">Sept</div>
            </div>
          </div>

          <div class="event-right">

            <h3 class="event-title">计划阅读章节</h3>

            <div class="event-description">
              第一章:
              <br />
              第二章:
              <br />
              第三章:

            </div>

            <div class="event-timing">
              <img src="https://cdn-icons-png.flaticon.com/512/1584/1584808.png" alt="" /> 20:00 PM - 21:00 PM
            </div>
          </div>
        </div>
        {/* new event seperator */}
        <div class="event">
          <div class="event-left">
            <div class="event-date">
              <div class="date">15</div>
              <div class="month">Sept</div>
            </div>
          </div>

          <div class="event-right">

            <h3 class="event-title">计划阅读章节</h3>

            <div class="event-description">
              第一章:
              <br />
              第二章:
              <br />
              第三章:

            </div>

            <div class="event-timing">
              <img src="https://cdn-icons-png.flaticon.com/512/1584/1584808.png" alt="" /> 20:00 PM - 21:00 PM
            </div>
          </div>
        </div>
        {/* new event seperator */}
        <div class="event">
          <div class="event-left">
            <div class="event-date">
              <div class="date">15</div>
              <div class="month">Sept</div>
            </div>
          </div>

          <div class="event-right">

            <h3 class="event-title">计划阅读章节</h3>

            <div class="event-description">
              第一章:
              <br />
              第二章:
              <br />
              第三章:

            </div>

            <div class="event-timing">
              <img src="https://cdn-icons-png.flaticon.com/512/1584/1584808.png" alt="" /> 20:00 PM - 21:00 PM
            </div>
          </div>
        </div>
        {/* new event seperator */}
      </div>
      {/* ***************************right event starts here!*************************** */}
      <div
        id='right-container'
        class="right-event-container"
        onMouseOver={handleRightMouseOver}
        onMouseOut={handleRightMouseOut}
      >
        <div class="book-info">
          <img src="https://user-images.githubusercontent.com/69735000/191848907-d4a0b1a0-a32d-4595-93f8-d688cd4966c5.jpg"
            alt="The inflamed brian"
            class="pic" />
        </div>
        {/* new event seperator */}
        <div class="event">
          <div class="event-left">
            <div class="event-date">
              <div class="date">15</div>
              <div class="month">Sept</div>
            </div>
          </div>

          <div class="event-right">

            <h3 class="event-title">计划阅读章节</h3>

            <div class="event-description">
              第一章:
              <br />
              第二章:
              <br />
              第三章:

            </div>

            <div class="event-timing">
              <img src="https://cdn-icons-png.flaticon.com/512/1584/1584808.png" alt="" /> 20:00 PM - 21:00 PM
            </div>
          </div>
        </div>
        {/* new event seperator */}
        <div class="event">
          <div class="event-left">
            <div class="event-date">
              <div class="date">15</div>
              <div class="month">Sept</div>
            </div>
          </div>

          <div class="event-right">

            <h3 class="event-title">计划阅读章节</h3>

            <div class="event-description">
              第一章:
              <br />
              第二章:
              <br />
              第三章:

            </div>

            <div class="event-timing">
              <img src="https://cdn-icons-png.flaticon.com/512/1584/1584808.png" alt="" /> 20:00 PM - 21:00 PM
            </div>
          </div>
        </div>
        {/* new event seperator */}
        <div class="event">
          <div class="event-left">
            <div class="event-date">
              <div class="date">15</div>
              <div class="month">Sept</div>
            </div>
          </div>

          <div class="event-right">

            <h3 class="event-title">计划阅读章节</h3>

            <div class="event-description">
              第一章:
              <br />
              第二章:
              <br />
              第三章:

            </div>

            <div class="event-timing">
              <img src="https://cdn-icons-png.flaticon.com/512/1584/1584808.png" alt="" /> 20:00 PM - 21:00 PM
            </div>
          </div>
        </div>
        {/* new event seperator */}
        <div class="event">
          <div class="event-left">
            <div class="event-date">
              <div class="date">15</div>
              <div class="month">Sept</div>
            </div>
          </div>

          <div class="event-right">

            <h3 class="event-title">计划阅读章节</h3>

            <div class="event-description">
              第一章:
              <br />
              第二章:
              <br />
              第三章:

            </div>

            <div class="event-timing">
              <img src="https://cdn-icons-png.flaticon.com/512/1584/1584808.png" alt="" /> 20:00 PM - 21:00 PM
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

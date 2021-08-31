import {
  Button,
  Card,
  Link,
} from '@material-ui/core';

import festifall from '../../media/festifall-location.png';
import mass_meeting from '../../media/mass-meeting-location.png';

import './JoiningPage.css';

export default function JoiningPage() {
  return (
    <div>
      <Card>
        <h2>Joining MAAV</h2>
        <p>
          If you want to join MAAV, hit the button below and complete the given steps.
          You will be asked to:
        </p>
        <ul>
          <li>Provide your name and uniqname</li>
          <li>Register for Basic II training through the Wilson Center</li>
          <li>Join our Slack</li>
          <li>Join our Maize Pages roster</li>
        </ul>
        <p>
          You will also be automatically enrolled in our email list.
        </p>
        <Button variant="contained" color="primary" href="https://forms.gle/aQSJNDGVzPboq9Yb6">Get Started</Button>
      </Card>
      <Card>
        <h2>Upcoming Recruiting Events</h2>
        <div id="events">
          <div id="festifall">
            <p>Festifall on North Campus: Tuesday, 8/31 from 5-8pm ET</p>
            <p>Located between Bell Tower and STAMPS Auditorium (see map)</p>
          </div>
          <img src={festifall} alt="Festifall Map" />
          <div id="mass-meeting">
            <p>Mass Meeting on North Campus: Tuesday, 9/7 from 7-8pm ET</p>
            <p>Ford Robotics Building, Room 1060</p>
          </div>
          <img src={mass_meeting} alt="Robotics Building Map" />
        </div>
      </Card>
    </div>
  );
}

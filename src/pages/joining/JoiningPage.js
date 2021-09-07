import {
  Button,
  Card,
} from '@material-ui/core';

import mass_meeting from '../../media/mass-meeting-location.png';

import './JoiningPage.css';

export default function JoiningPage() {
  return (
    <div>
      <Card>
        <h2>Joining MAAV</h2>
        <p>
          If you want to join MAAV, you MUST be a student or incoming student at the
          University of Michigan (we are unable to accept non-student team members at this time).
        </p>
        <p>
          Hit the button below and complete the given steps.
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
          <div id="mass-meeting">
            <p>Mass Meeting on North Campus: Tuesday, 9/7 from 7-8pm ET</p>
            <p>Ford Robotics Building, Room 1060</p>
            <p>
              This event will be recorded, and the recording will be shared via email.
              Slides will also be linked and emailed after the meeting.
            </p>
          </div>
          <img src={mass_meeting} alt="Robotics Building Map" />
        </div>
      </Card>
    </div>
  );
}

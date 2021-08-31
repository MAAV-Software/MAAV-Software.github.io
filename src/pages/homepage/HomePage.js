import { useState } from 'react';

import {
  Card,
  IconButton,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import WarningIcon from '@material-ui/icons/Warning';

import './HomePage.css';

// Image imports
import hero from '../../media/hero.jpg';
import maav_m from '../../media/maav-m.png';
import m_air from '../../media/m-air.jpg';
import office_1 from '../../media/office-1.jpg';
// Sponsor Logo imports
import coe from '../../media/sponsors/coe.png';
import dji from '../../media/sponsors/dji.png';
import lockheed_martin from '../../media/sponsors/lockheed-martin.png';
import northrop_grumman from '../../media/sponsors/northrop-grumman.png';
import raytheon from '../../media/sponsors/raytheon.png';

const images = [
  {
    image: hero,
    altText: 'Drone Hero',
  },
  {
    image: maav_m,
    altText: 'MAAV Members Hero',
  },
  {
    image: m_air,
    altText: 'M-Air Hero',
  },
  {
    image: office_1,
    altText: 'MAAV Office Hero',
  },
]

const sponsors = [
  {
    image: coe,
    altText: 'University of Michigan College of Engineering',
  },
  {
    image: dji,
    altText: 'DJI',
  },
  {
    image: lockheed_martin,
    altText: 'Lockheed Martin',
  },
  {
    image: northrop_grumman,
    altText: 'Northrop Grumman',
  },
  {
    image: raytheon,
    altText: 'Raytheon',
  },
];

export default function HomePage() {
  const [ currentImage, setCurrentImage ] = useState(0);

  const changeHero = (direction) => {
    if (direction === 'left') {
      setCurrentImage(currentImage - 1 >= 0 ? currentImage - 1 : images.length - 1);
    } else if (direction === 'right') {
      setCurrentImage(currentImage + 1 < images.length ? currentImage + 1 : 0);
    }
  };

  return (
    <div>
      <Card id="hero" style={{'backgroundColor': 'rgba(20, 20, 20, 0.8)'}}>
        <IconButton id="left-hero-button" aria-label="previous" onClick={() => changeHero('left')}>
          <ChevronLeftIcon fontSize="large" />
        </IconButton>
        <img src={images[currentImage].image} alt={images[currentImage].altText} />
        <IconButton id="right-hero-button" aria-label="next" onClick={() => changeHero('right')}>
          <ChevronRightIcon fontSize="large" />
        </IconButton>
      </Card>
      <Card id="wip">
        <WarningIcon fontSize="large" color="primary" />
        <h2>Notice:</h2>
        <p>
          This site is still a work-in-progress. Some content may be missing from pages.
          Expect changes or updates in the future.
        </p>
      </Card>
      <Card id="about-us">
        <h2>About Us:</h2>
        <p>
          Michigan Autonomous Aerial Vehicles (MAAV) is a student-run group at the
          University of Michigan that competes in the International Aerial Robotics Competition.
        </p>
        <p>
          MAAV strives to provide practical, hands-on experience for students by
          competing annually in the International Aerial Robotics Competition (IARC).
          Members of MAAV engage in the design, building, and testing of an autonomous
          unmanned aerial system (UAS) while furthering multiple areas of
          Computer Science and Aerospace Engineering research.
          Learn more about the current and past missions of the International Aerial
          Robotics Competition by clicking <a href="http://www.aerialroboticscompetition.org/">here</a>.
        </p>
      </Card>
      <Card id="sponsors">
        <h2>Sponsors:</h2>
        <p>
          Our sponsors generously provide the resources MAAV needs for both research
          and manufacturing. MAAV gladly thanks the organizations and people within
          them that make our work possible. If you're interested in sponsoring us,
          please contact the team leadership at <a href="mailto:maav-leads@umich.edu">maav-leads@umich.edu</a>.
        </p>
        <div id="sponsors-images">
          {sponsors.map(sponsor => (
            <img src={sponsor.image} alt={sponsor.altText} />
          ))}
        </div>
      </Card>
    </div>
  );
}

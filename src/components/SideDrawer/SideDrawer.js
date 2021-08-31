import React from 'react';

import './SideDrawer.css';
import iarcLogo from '../../media/iarc-logo.png';
import { pages } from '../../pages/pages';

import {
  Link as RouterLink,
} from "react-router-dom";
import MediaQuery from 'react-responsive'

import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

// https://material-ui.com/guides/composition/#list
function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

// https://material-ui.com/components/lists/#simple-list
function ListItemExternalLink(props) {
  return <ListItem button component="a" {...props} />;
}

const links = [
  {
    text: 'IARC',
    href: 'http://www.aerialroboticscompetition.org/',
    icon: iarcLogo,
    iconAltText: 'iarc-logo'
  },
  {
    text: 'Maize Pages',
    href: 'https://maizepages.umich.edu/organization/maav',
    icon: 'https://maizepages.umich.edu/icons/apple-touch-icon.png?v=zXryopmz8G',
    iconAltText: 'maize-pages',
  },
  {
    text: 'Github',
    href: 'https://github.com/MAAV-Software',
    icon: 'https://github.githubassets.com/favicons/favicon.svg',
    iconAltText: 'github',
  },
  {
    text: 'Internal Wiki',
    href: 'https://sites.google.com/umich.edu/maav/',
    icon: 'https://ssl.gstatic.com/atari/images/public/favicon.ico',
    iconAltText: 'internal-wiki',
  },
];

export default function SideDrawer(props) {
  return (
    <div className="SideDrawer" {...props}>
      <MediaQuery maxWidth={800}>
        <List>
          <h2>Pages</h2>
          {Object.keys(pages).map((page, index) => (
            <ListItemLink key={`side-drawer-page-${index}`} to={pages[page].path} primary={page} />
          ))}
        </List>
        <Divider />
      </MediaQuery>
      <List>
        <h2>Links</h2>
        {links.map((link, index) => (
          <ListItemExternalLink href={link.href} key={`side-drawer-link-${index}`}>
            {link.icon ? (
              <ListItemIcon>
                <img className="NavIcon" src={link.icon} alt={link.iconAltText} />
              </ListItemIcon>
            ) : null}
            <ListItemText primary={link.text} />
          </ListItemExternalLink>
        ))}
      </List>
    </div>
  );
}

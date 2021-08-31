import './NavBarButton.css';

import { Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

// https://material-ui.com/guides/composition/#button
export default function NavBarButton({ buttonText, to, ...props }) {
  return (
    <Button
      className="NavBarButton"
      variant="contained"
      color="primary"
      size="large"
      disableElevation
      component={RouterLink}
      to={to ? to : '/'}
      {...props}
    >
      {buttonText}
    </Button>
  );
}

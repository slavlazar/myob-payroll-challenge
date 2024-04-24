import React from 'react';
import PropTypes from 'prop-types';

import { FullScreenFlex } from '../shared/ui';
import Wrapper, {
  Heading,
  BackgroundLogo,
  Button,
  Text,
} from './NotFound.style';

/**
 * Not found page component displays a user friendly UI view when
 * a registered route is not found
 * @param {object} Object containting history prop that is used to
 * push a new route to our history stack to redirect user to home screen
 */
const NotFound = ({ history }) => {
  const handleRedirect = () => {
    history.push('/');
  };

  return (
    <FullScreenFlex>
      <Wrapper>
        <Heading larger as="h1">
          404
        </Heading>
        <Heading>Oh no, that&apos;s no good!</Heading>
        <Text>
          But that&apos;s ok, we will guide you back on your way. Please follow
          the link below.
        </Text>
        <Button
          onClick={handleRedirect}
          colour="primary"
          type="button"
          aria-label="Back to the homepage"
        >
          Back home
        </Button>
      </Wrapper>
      <BackgroundLogo />
    </FullScreenFlex>
  );
};

NotFound.propTypes = {
  /** History object from React Router DOM */
  history: PropTypes.object.isRequired,
};

export default NotFound;

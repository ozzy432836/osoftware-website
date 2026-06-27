import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Box, Button, Flex, Image, Text, Title } from '@mantine/core';
import { LOGO_LARGE_URL, MENU } from '@/constants';
import { Illustration404, Illustration500 } from './Illustration';
import classes from './Error.module.css';

export const NotFound = () => {
  const errorMessage =
    ' Page you are trying to open does not exist. You may have mistyped the address, or the page has been moved to another URL.';
  return (
    <GenericError
      buttonText="Take me back to home page"
      message={errorMessage}
      title="Nothing to see here..."
      type="404"
      href={MENU.HOME}
    />
  );
};

export const ApplicationError = () => {
  const error = useRouteError();
  const errorMessage = (error as Error).message;
  return (
    <GenericError
      buttonText="Refresh the page"
      onClick={() => {
        window.location.reload();
      }}
      message={errorMessage}
      title="Something bad has happened..."
      type="500"
    />
  );
};

type ErrorProps = {
  title: string;
  message: string;
  type: '404' | '500';
  buttonText: string;
  href?: string;
  onClick?: () => void;
};

const GenericError: React.FC<ErrorProps> = ({
  title,
  message,
  type,
  href,
  onClick,
  buttonText,
}) => {
  return (
    <Box>
      {type === '404' && <Illustration404 className={classes.image} />}
      {type === '500' && <Illustration500 className={classes.image} />}

      <Flex
        ta="center"
        direction="column"
        w={{ base: '90%' }}
        justify="center"
        mx="auto"
        align="center"
        gap="md"
        h="100vh"
      >
        <Image style={{ filter: 'grayscale(1)', opacity: '0.4' }} w={350} src={LOGO_LARGE_URL} />

        <Title>{title}</Title>

        <Text c="dimmed" size="lg" ta="center">
          {message}
        </Text>

        <Button
          {...(href ? { href } : {})}
          component="a"
          variant="subtle"
          color={type === '404' ? 'blue.3' : 'red.3'}
          size="md"
          onClick={() => {
            onClick?.();
          }}
        >
          {buttonText}
        </Button>
      </Flex>
    </Box>
  );
};

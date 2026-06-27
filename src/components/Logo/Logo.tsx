import { IconDevices, IconDevicesHeart } from '@tabler/icons-react';
import { Button, Stack, Text, UnstyledButton } from '@mantine/core';
import classes from './Logo.module.css';

type LogoProps = {
  scaleDown?: boolean;
};

export const Logo: React.FC<LogoProps> = ({ scaleDown }) => {
  const scaleDownClass = scaleDown ? 'scale-down' : '';
  return (
    <Button
      p={0}
      size="lg"
      leftSection={<IconDevices size={40} />}
      variant="transparent"
      color="blue"
      className={`{$classes.button} ${classes[scaleDownClass]}`}
      component="a"
      href="/"
    >
      <Stack component="span" gap={0} align="flex-start">
        <Text component="span" size="25px">
          oSoftware Ltd
        </Text>
        <Text component="span" size="10px">
          WebSites | WebApps | MobileApps
        </Text>
      </Stack>
    </Button>
  );
};

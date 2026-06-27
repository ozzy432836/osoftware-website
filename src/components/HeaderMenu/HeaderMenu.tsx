import { IconChevronDown } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import {
  Burger,
  Center,
  Collapse,
  Container,
  Divider,
  Drawer,
  Group,
  Image,
  ScrollArea,
  UnstyledButton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { LOGO_LARGE_URL } from '@/constants/global';
import { Logo } from '../Logo/Logo';
//import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './HeaderMenu.module.css';

const links = [
  { link: '#', label: 'Home' },
  { link: '#services', label: 'Services' },
  { link: '#projects', label: 'Projects' },

  { link: '/contact', label: 'Contact' },
];

export function HeaderMenu() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const navigate = useNavigate();

  const items = links.map((link) => {
    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => {
          //event.preventDefault();
          navigate(link.link);
        }}
      >
        {link.label}
      </a>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="lg">
        <div className={classes.inner}>
          <Logo />
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Burger
            opened={opened}
            onClick={toggle}
            size="sm"
            hiddenFrom="sm"
            aria-label="Toggle navigation"
          />
        </div>
      </Container>

      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />
          {links.map((link) => {
            return (
              <a
                key={link.label}
                href={link.link}
                className={classes.link}
                onClick={(event) => {
                  toggle();
                  navigate(link.link);
                }}
              >
                {link.label}
              </a>
            );
          })}
        </ScrollArea>
      </Drawer>
    </header>
  );
}

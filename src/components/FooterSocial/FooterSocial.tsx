import {
  IconBrandCodepen,
  IconBrandCSharp,
  IconBrandGithub,
  IconBrandLinkedin,
} from '@tabler/icons-react';
import { ActionIcon, Container, Flex, Group } from '@mantine/core';
import { Logo } from '../Logo/Logo';
import classes from './FooterSocial.module.css';

export function FooterSocial() {
  const linkedIn = 'https://linkedin.com/in/andrewosiname';
  const github = 'https://github.com/ozzy432836';
  return (
    <div className={classes.footer}>
      <Container py="xl" className={classes.inner} size="lg">
        <Flex justify="space-between" align="center">
          <Logo scaleDown />
          <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
            <ActionIcon
              component="a"
              href={linkedIn}
              size="lg"
              color="gray"
              variant="subtle"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              component="a"
              href={github}
              size="lg"
              color="gray"
              variant="subtle"
              aria-label="GitHub"
            >
              <IconBrandGithub size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" color="gray" variant="subtle" aria-label="CodePen">
              <IconBrandCodepen size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" color="gray" variant="subtle" aria-label="CodePen">
              <IconBrandCSharp size={18} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Flex>
      </Container>
    </div>
  );
}

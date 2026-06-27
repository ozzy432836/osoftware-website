import { IconCheck } from '@tabler/icons-react';
import {
  Button,
  Container,
  Flex,
  Group,
  Image,
  List,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { AZURE_STORAGE_URL } from '@/constants/global';
import classes from './HeroHeader.module.css';

export function HeroHeader() {
  const image = `${AZURE_STORAGE_URL}/download-cv-2.gif`;
  return (
    <Container size="lg">
      <Flex direction={{ base: 'column', md: 'row' }} className={classes.inner}>
        <Stack gap="sm" w={{ md: '50%' }}>
          <Title className={classes.title}>
            Andrew <span className={classes.highlight}>Osi</span>name
          </Title>

          <Text fz="md" maw={'600px'}>
            Builds reliable, scalable software systems using over 15 years of hands-on experience
            across multiple industries, specialising in efficient processes, automation, and
            integrations that help teams move faster and deliver with confidence. With deep
            expertise across both front-end and back-end development, is able to take ownership of
            complex projects, contribute across the entire stack, and ensure every part of the
            product works together smoothly.
          </Text>

          <List
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck size={12} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Full-stack architecture</b> - able to design and oversee complete applications from
              local development to production deployment.
            </List.Item>
            <List.Item>
              <b>Process-driven delivery</b> - strong focus on automation, integration, and
              efficient workflows.
            </List.Item>
            <List.Item>
              <b>End-to-end ownership</b> - comfortable leading projects, collaborating through
              project management tools, and maintaining software long-term.
            </List.Item>
          </List>

          <Button
            mt={'lg'}
            variant="default"
            radius="xl"
            size="md"
            w={{ base: '100%', sm: '300px' }}
            mx="auto"
          >
            Source code
          </Button>
        </Stack>

        <Stack gap={'xl'} className={classes.imageContainer}>
          <Image src={image} className={classes.image} alt="" />
          <Button
            component="a"
            href="https://docs.google.com/document/d/1LbTYwKpqJ8Vkg6amJLzImuDjV8htavHLkXbDCN_D1wM/edit?usp=sharing"
            radius="xl"
            size="md"
            w={{ base: '100%', sm: '300px' }}
            mx="auto"
          >
            Download CV
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
}

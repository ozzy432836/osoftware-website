import {
  IconApi,
  IconBlocks,
  IconBrandReact,
  IconCookie,
  IconDeviceDesktop,
  IconGauge,
  IconServer,
  IconUser,
  IconUserStar,
} from '@tabler/icons-react';
import {
  Badge,
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import classes from './Features.module.css';

const mockdata = [
  {
    title: 'Leadership',
    description:
      'Experience leading small teams and delivering full applications end to end. I enjoy mentoring, supporting growth, and building strong relationships - my ability to connect with people is one of my biggest strengths.',
    icon: IconUserStar,
  },
  {
    title: 'Architecture',
    description:
      'Strong architectural depth across React/TypeScript on the front end and .NET, Azure, and SQL on the back end. I focus on clean component and type organisation, maintainable abstractions, and smart code quality vs delivery tradeoffs.',
    icon: IconBlocks,
  },
  {
    title: 'Front End',
    description:
      'Experience building front-end applications with React and TypeScript, using modern styling frameworks like Styled Components, Chakra, Mantine, and Bootstrap. Uses unit tests for reliability and can also set up content managed sites with WordPress on a LAMP stack.',
    icon: IconDeviceDesktop,
  },
  {
    title: 'Back End',
    description:
      'Skilled in building back-end applications with C#/.NET and some ExpressJS, with hands on experience managing MSSQL (Azure), MySQL, and Postgre. Handles end-to-end deployments using Azure DevOps, manage workflows through Azure Boards, and integrate CRMs like Zoho with in-house systems.',
    icon: IconServer,
  },
];

export function FeaturesCards() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon size={50} stroke={1.5} color={theme.colors.blue[6]} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container id="services" size="lg" py="60px">
      <Group justify="center">
        <Badge variant="filled" size="lg">
          Services
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Integrate effortlessly with any technology stack
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when
        hunger drives it to try biting a Steel-type Pokémon.
      </Text>

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}

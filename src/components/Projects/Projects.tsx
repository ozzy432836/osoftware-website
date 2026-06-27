import { Badge, Container, Grid, Group, SimpleGrid, Skeleton, Text, Title } from '@mantine/core';
import classes from './Projects.module.css';

const PRIMARY_COL_HEIGHT = '300px';

export const Project = () => {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <>
      <Container id="projects" py="60px" w="100%" size="lg" fluid bg="gray.1" m={0}>
        <Group justify="center">
          <Badge variant="filled" size="lg">
            Projects
          </Badge>
        </Group>

        <Title order={2} ta="center" mt="sm">
          Full Stack projects ready to demo
        </Title>

        <Text className={classes.description} c="dimmed" ta="center" mx="auto" mt="md" maw="1000px">
          When I have spare time, I enjoy continued maintenance of these live projects. They are
          both mature and have a few users but the practice of adding features, fixing bugs,
          upgrading technologies and working on the same thing(s) for extended periods of time helps
          a lot for my career.
        </Text>
      </Container>

      <Container w="100%" size="lg" py="lg" fluid bg="orange.2">
        <Container my="md" w="100%" size="lg">
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
            <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={true} />
            <Grid gutter="md">
              <Grid.Col>
                <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={true} />
              </Grid.Col>
              <Grid.Col span={6}>
                <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={true} />
              </Grid.Col>
              <Grid.Col span={6}>
                <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={true} />
              </Grid.Col>
            </Grid>
          </SimpleGrid>
        </Container>
      </Container>

      <Container w="100%" size="lg" py="lg" fluid bg="blue.9">
        <Container my="md" w="100%" size="lg">
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
            <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={true} />
            <Grid gutter="md">
              <Grid.Col>
                <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={true} />
              </Grid.Col>
              <Grid.Col span={6}>
                <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={true} />
              </Grid.Col>
              <Grid.Col span={6}>
                <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={true} />
              </Grid.Col>
            </Grid>
          </SimpleGrid>
        </Container>
      </Container>
    </>
  );
};

import { useState } from 'react';
import { IconCaretLeft, IconCaretRight } from '@tabler/icons-react';
import {
  ActionIcon,
  Button,
  Container,
  Group,
  Stack,
  Stepper,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

// ---------------------------------------------
// Career Data (each description = 50 words)
// ---------------------------------------------
const careerSteps = [
  {
    label: 'Patch My PC Ltd',
    description: 'Front End Developer (Jul 2024 → Present)',
    content: `Rebuilt the Advanced Insights interface by migrating AngularJS features into a modern
    React application, while supporting .NET and MongoDB backend tasks. Delivered Storybook
    components, RTK state management, and Azure DevOps pipelines. Assisted with Salesforce
    customer issues, strengthening accountability and improving product understanding through
    direct communication with users experiencing real‑world problems.`,
  },
  {
    label: 'TerraQuest Solutions Ltd',
    description: 'Front End Developer (Aug 2021 → Jul 2024)',
    content: `Delivered the Planning Portal using React, TypeScript, Next.js, Chakra UI, and Storybook
    within an agile team. Later recognised as full stack, completing .NET6, C#, Azure SQL,
    and Umbraco CMS tasks. Improved component structure, documentation, and testing practices,
    helping the team adopt scalable patterns and reduce dependencies on external development
    groups.`,
  },
  {
    label: 'Macrium Software',
    description: 'Lead Developer (Jul 2016 → Aug 2021)',
    content: `Led the web team, building a custom .NET MVC eCommerce CMS and a multi‑role licensing
    portal supporting end users, resellers, distributors, and administrators. Automated CRM
    integrations that increased weekend revenue. Prioritised testing, documentation, and
    release stability, collaborating with QA teams to deliver reliable updates for Macrium
    Reflect customers worldwide.`,
  },
  {
    label: 'Peninsula UK Ltd',
    description: 'Senior Back-End Developer (Sep 2015 → Jul 2016)',
    content: `Delivered backend API stories using C# microservices, applying SOLID principles, TDD,
    and pair programming. Implemented SSO integrations, Jenkins CI pipelines, and client‑facing
    troubleshooting. Provided QA automation training and led weekly technical learning sessions.
    Built a reverse proxy to resolve customer firewall issues, improving reliability and
    communication between teams and clients.`,
  },
];

export function CareerHistory() {
  const [active, setActive] = useState(0);

  const nextStep = () =>
    setActive((current) => (current < careerSteps.length ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`);

  return (
    <Container id="career-history" size="lg" py="60px" w="100%">
      <Stepper
        size="xs"
        active={active}
        onStepClick={setActive}
        orientation={isMobile ? 'vertical' : 'horizontal'}
      >
        {careerSteps.map((step, index) => (
          <Stepper.Step key={index} label={step.label} description={step.description}>
            <Text>{step.content}</Text>
          </Stepper.Step>
        ))}

        {/* Completed Step */}
        <Stepper.Completed>
          <Stack align="center">
            <Text fw={500}>Download my CV to see the full career history</Text>
            <Button
              component="a"
              href="https://docs.google.com/document/d/1LbTYwKpqJ8Vkg6amJLzImuDjV8htavHLkXbDCN_D1wM/edit?usp=sharing"
              radius="xl"
              size="xs"
              variant="outline"
              color="gray"
              w={{ base: '100%', sm: '300px' }}
              mx="auto"
            >
              Download CV
            </Button>
          </Stack>
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <ActionIcon disabled={active === 0} onClick={prevStep} variant="subtle">
          <IconCaretLeft />
        </ActionIcon>
        <ActionIcon disabled={active === careerSteps.length} onClick={nextStep} variant="subtle">
          <IconCaretRight />
        </ActionIcon>
      </Group>
    </Container>
  );
}

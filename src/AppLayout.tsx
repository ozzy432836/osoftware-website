import { Stack } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';
import { CareerHistory } from './components/CareerHistory/CareerHistory';
import { FeaturesCards } from './components/Features/Features';
import { FooterSocial } from './components/FooterSocial/FooterSocial';
import { HeaderMenu } from './components/HeaderMenu/HeaderMenu';
import { HeroHeader } from './components/HeroHeader/HeroHeader';
import { Project } from './components/Projects/Projects';
import { APP_NAME } from './constants';

type AppLayoutProps = {
  pageTitle: string;
  children: React.ReactNode;
};

export const AppLayout: React.FC<AppLayoutProps> = ({ pageTitle, children }) => {
  useDocumentTitle(`${APP_NAME} - ${pageTitle}`);
  return (
    <Stack gap={0}>
      <HeaderMenu />
      <HeroHeader />
      <CareerHistory />
      <FeaturesCards />
      <Project />

      <div>{children}</div>
      <FooterSocial />
    </Stack>
  );
};

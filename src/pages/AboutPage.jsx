import { aboutPageData } from '../data/about';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { PageLayout } from '../layout/PageLayout';
import { AboutClosingCTA } from '../sections/about/AboutClosingCTA';
import { AboutHero } from '../sections/about/AboutHero';
import { HowHeThinks } from '../sections/about/HowHeThinks';
import { OperatingProfile } from '../sections/about/OperatingProfile';
import { ProfessionalContext } from '../sections/about/ProfessionalContext';
import { WhatHeOptimizesFor } from '../sections/about/WhatHeOptimizesFor';
import { WorkingStyle } from '../sections/about/WorkingStyle';

function AboutPage() {
  useDocumentMeta(aboutPageData.meta);

  return (
    <PageLayout>
      <AboutHero data={aboutPageData.hero} />
      <OperatingProfile data={aboutPageData.operatingProfile} />
      <HowHeThinks data={aboutPageData.howHeThinks} />
      <WorkingStyle data={aboutPageData.workingStyle} />
      <ProfessionalContext data={aboutPageData.professionalContext} />
      <WhatHeOptimizesFor data={aboutPageData.optimizesFor} />
      <AboutClosingCTA data={aboutPageData.closingCta} />
    </PageLayout>
  );
}

export default AboutPage;

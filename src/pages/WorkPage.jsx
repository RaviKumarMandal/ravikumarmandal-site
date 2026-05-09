import { workPageData } from '../data/work';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { PageLayout } from '../layout/PageLayout';
import { CapabilitySurface } from '../sections/work/CapabilitySurface';
import { FeaturedWork } from '../sections/work/FeaturedWork';
import { HowWorkIsApproached } from '../sections/work/HowWorkIsApproached';
import { WorkClosingCTA } from '../sections/work/WorkClosingCTA';
import { WorkHero } from '../sections/work/WorkHero';
import { WorkLens } from '../sections/work/WorkLens';

function WorkPage() {
  useDocumentMeta(workPageData.meta);

  return (
    <PageLayout wide>
      <WorkHero data={workPageData.hero} />
      <WorkLens data={workPageData.lens} />
      <FeaturedWork data={workPageData.featuredWork} />
      <HowWorkIsApproached data={workPageData.approach} />
      <CapabilitySurface data={workPageData.capabilitySurface} />
      <WorkClosingCTA data={workPageData.closingCta} />
    </PageLayout>
  );
}

export default WorkPage;

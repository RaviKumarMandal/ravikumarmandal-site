import { nowPageData } from '../data/now';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { PageLayout } from '../layout/PageLayout';
import { CurrentPriorities } from '../sections/now/CurrentPriorities';
import { CurrentStackInputs } from '../sections/now/CurrentStackInputs';
import { CurrentState } from '../sections/now/CurrentState';
import { InMotion } from '../sections/now/InMotion';
import { NowClosingCTA } from '../sections/now/NowClosingCTA';
import { NowHero } from '../sections/now/NowHero';
import { WhatImLearning } from '../sections/now/WhatImLearning';

function NowPage() {
  useDocumentMeta(nowPageData.meta);

  return (
    <PageLayout wide>
      <NowHero data={nowPageData.hero} />
      <CurrentState data={nowPageData.currentState} />
      <InMotion data={nowPageData.inMotion} />
      <CurrentPriorities data={nowPageData.priorities} />
      <WhatImLearning data={nowPageData.learning} />
      <CurrentStackInputs data={nowPageData.stackInputs} />
      <NowClosingCTA data={nowPageData.closingCta} />
    </PageLayout>
  );
}

export default NowPage;

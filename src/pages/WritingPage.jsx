import { writingPageData } from '../data/writing';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { PageLayout } from '../layout/PageLayout';
import { EditorialLens } from '../sections/writing/EditorialLens';
import { FeaturedEssays } from '../sections/writing/FeaturedEssays';
import { ReadingPath } from '../sections/writing/ReadingPath';
import { WritingClosingCTA } from '../sections/writing/WritingClosingCTA';
import { WritingHero } from '../sections/writing/WritingHero';
import { WritingThemes } from '../sections/writing/WritingThemes';

function WritingPage() {
  useDocumentMeta(writingPageData.meta);

  return (
    <PageLayout wide>
      <WritingHero data={writingPageData.hero} />
      <EditorialLens data={writingPageData.lens} />
      <FeaturedEssays data={writingPageData.featuredEssays} />
      <WritingThemes data={writingPageData.themes} />
      <ReadingPath data={writingPageData.readingPath} />
      <WritingClosingCTA data={writingPageData.closingCta} />
    </PageLayout>
  );
}

export default WritingPage;

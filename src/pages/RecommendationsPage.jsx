import { recommendationsPageData } from '../data/recommendations';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { PageLayout } from '../layout/PageLayout';
import { ContentSection } from '../sections/ContentSection';
import { PageHero } from '../sections/PageHero';

function RecommendationsPage() {
  useDocumentMeta(recommendationsPageData.meta);

  return (
    <PageLayout>
      <PageHero {...recommendationsPageData.hero} />
      <ContentSection
        title="Category system"
        intro="The recommendations architecture is already separated from presentation so the page can grow into a trust-based recommendation library later."
        items={recommendationsPageData.categories.map((item) => ({
          title: item,
          body: 'This category is ready for a stronger editorial treatment, structured notes, and future outbound-link handling.',
        }))}
      />
    </PageLayout>
  );
}

export default RecommendationsPage;

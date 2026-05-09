import { homePageData } from '../data/home';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { PageLayout } from '../layout/PageLayout';
import { ContactCtaSection } from '../sections/home/ContactCtaSection';
import { CurrentFocusPanel } from '../sections/home/CurrentFocusPanel';
import { HeroSection } from '../sections/home/HeroSection';
import { RecommendationsPreview } from '../sections/home/RecommendationsPreview';
import { SelectedWorkPreview } from '../sections/home/SelectedWorkPreview';
import { WritingPreviewFeed } from '../sections/home/WritingPreviewFeed';

function HomePage() {
  useDocumentMeta(homePageData.meta);

  return (
    <PageLayout wide>
      <HeroSection data={homePageData.hero} />
      <SelectedWorkPreview data={homePageData.selectedWork} />
      <CurrentFocusPanel data={homePageData.currentFocus} />
      <WritingPreviewFeed data={homePageData.writingPreview} />
      <RecommendationsPreview data={homePageData.recommendationsPreview} />
      <ContactCtaSection data={homePageData.contactCta} />
    </PageLayout>
  );
}

export default HomePage;

import { contactPageData } from '../data/contact';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { PageLayout } from '../layout/PageLayout';
import { ContentSection } from '../sections/ContentSection';
import { PageHero } from '../sections/PageHero';

function ContactPage() {
  useDocumentMeta(contactPageData.meta);

  return (
    <PageLayout>
      <PageHero {...contactPageData.hero} />
      <ContentSection
        title="Contact architecture"
        intro="The Phase 1 build sets up the route, content source, and section scaffolding so the contact experience can be completed cleanly later without changing the system underneath."
        items={contactPageData.channels.map((item) => ({
          title: item,
          body: 'This category is already mapped into the content model and ready for a richer contact experience in the dedicated page phase.',
        }))}
      />
    </PageLayout>
  );
}

export default ContactPage;

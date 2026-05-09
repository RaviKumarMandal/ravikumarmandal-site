import { Button } from '../components/ui/Button';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { PageLayout } from '../layout/PageLayout';
import { PageHero } from '../sections/PageHero';

function NotFoundPage() {
  useDocumentMeta({
    title: 'Not found',
    description: 'The requested page could not be found.',
  });

  return (
    <PageLayout>
      <PageHero
        eyebrow="404"
        title="The page is missing, not the signal."
        intro="The route you tried does not exist in this build. The rest of the site is available through the primary navigation."
        actions={<Button to="/">Return home</Button>}
      />
    </PageLayout>
  );
}

export default NotFoundPage;

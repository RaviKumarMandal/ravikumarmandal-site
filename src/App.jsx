import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SiteLayout } from './layout/SiteLayout';
import { AppLoader } from './components/ui/AppLoader';
import { ScrollToTop } from './hooks/ScrollToTop';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const WorkPage = lazy(() => import('./pages/WorkPage'));
const WritingPage = lazy(() => import('./pages/WritingPage'));
const NowPage = lazy(() => import('./pages/NowPage'));
const RecommendationsPage = lazy(() => import('./pages/RecommendationsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <>
      <ScrollToTop />
      <SiteLayout>
        <Suspense fallback={<AppLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/writing" element={<WritingPage />} />
            <Route path="/now" element={<NowPage />} />
            <Route path="/recommendations" element={<RecommendationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </SiteLayout>
    </>
  );
}

export default App;

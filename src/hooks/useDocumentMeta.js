import { useEffect } from 'react';
import { siteMeta } from '../data/site';

export function useDocumentMeta(meta) {
  useEffect(() => {
    const title = meta?.title
      ? meta.title.includes(siteMeta.name)
        ? meta.title
        : `${meta.title} | ${siteMeta.name}`
      : siteMeta.name;
    const description = meta?.description || siteMeta.description;

    document.title = title;

    let descriptionTag = document.querySelector('meta[name="description"]');

    if (!descriptionTag) {
      descriptionTag = document.createElement('meta');
      descriptionTag.setAttribute('name', 'description');
      document.head.appendChild(descriptionTag);
    }

    descriptionTag.setAttribute('content', description);
  }, [meta]);
}

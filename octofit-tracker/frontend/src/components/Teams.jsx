import CollectionPage from './CollectionPage.jsx';
import { useApiCollection } from './useApiCollection.js';

export default function Teams() {
  const apiEndpoint = import.meta.env.VITE_CODESPACE_NAME
    ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
    : 'http://localhost:8000/api/teams/';
  const resource = useApiCollection(apiEndpoint);

  return (
    <CollectionPage
      title="Teams"
      resource={resource}
      subtitle="Team records fetched from the backend API."
      emptyMessage="No team records were returned from the API."
      summary={(count, meta) =>
        meta?.page ? `${count} teams on page ${meta.page}` : `${count} teams loaded`
      }
      renderItem={(item) => (
        <>
          <h3 className="h5 mb-2">{item.name || 'Team'}</h3>
          <dl className="row mb-0">
            <dt className="col-5">Coach</dt>
            <dd className="col-7">{item.coach || 'TBD'}</dd>
            <dt className="col-5">Points</dt>
            <dd className="col-7">{item.points ?? 0}</dd>
          </dl>
        </>
      )}
    />
  );
}
import CollectionPage from './CollectionPage.jsx';
import { useApiCollection } from './useApiCollection.js';

export default function Workouts() {
  const apiEndpoint = import.meta.env.VITE_CODESPACE_NAME
    ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
    : 'http://localhost:8000/api/workouts/';
  const resource = useApiCollection(apiEndpoint);

  return (
    <CollectionPage
      title="Workouts"
      resource={resource}
      subtitle="Suggested workouts fetched from the backend API."
      emptyMessage="No workout records were returned from the API."
      summary={(count, meta) =>
        meta?.page ? `${count} workouts on page ${meta.page}` : `${count} workouts loaded`
      }
      renderItem={(item) => (
        <>
          <h3 className="h5 mb-2">{item.name || 'Workout'}</h3>
          <dl className="row mb-0">
            <dt className="col-5">Focus</dt>
            <dd className="col-7">{item.focusArea || 'General'}</dd>
            <dt className="col-5">Intensity</dt>
            <dd className="col-7">{item.intensity || 'Moderate'}</dd>
            <dt className="col-5">Duration</dt>
            <dd className="col-7">{item.durationMinutes ?? 'N/A'} minutes</dd>
          </dl>
          <p className="mb-0 mt-3 text-white-50">
            Recommended for: {(item.recommendedFor || []).join(', ') || 'Everyone'}
          </p>
        </>
      )}
    />
  );
}
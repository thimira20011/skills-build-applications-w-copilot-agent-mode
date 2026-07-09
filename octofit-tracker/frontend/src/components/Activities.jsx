import CollectionPage from './CollectionPage.jsx';
import { useApiCollection } from './useApiCollection.js';

export default function Activities() {
  const resource = useApiCollection('activities');

  return (
    <CollectionPage
      title="Activities"
      resource={resource}
      subtitle="Recent activity logs pulled from the backend API."
      emptyMessage="No activity records were returned from the API."
      summary={(count, meta) =>
        meta?.page
          ? `${count} activities on page ${meta.page}${meta.totalPages ? ` of ${meta.totalPages}` : ''}`
          : `${count} activities loaded`
      }
      renderItem={(item) => (
        <>
          <h3 className="h5 mb-2">{item.activityType || item.title || 'Activity'}</h3>
          <dl className="row mb-0">
            <dt className="col-5">User</dt>
            <dd className="col-7">{item.userId?.displayName || item.userName || item.userId || 'Unknown'}</dd>
            <dt className="col-5">Duration</dt>
            <dd className="col-7">{item.durationMinutes ?? item.duration ?? 'N/A'} minutes</dd>
            <dt className="col-5">Calories</dt>
            <dd className="col-7">{item.caloriesBurned ?? item.calories ?? 'N/A'}</dd>
          </dl>
        </>
      )}
    />
  );
}
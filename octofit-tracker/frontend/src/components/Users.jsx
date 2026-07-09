import CollectionPage from './CollectionPage.jsx';
import { useApiCollection } from './useApiCollection.js';

export default function Users() {
  const apiEndpoint = '/api/users/';
  const resource = useApiCollection(apiEndpoint);

  return (
    <CollectionPage
      title="Users"
      resource={resource}
      subtitle="User profiles returned from the backend API."
      emptyMessage="No user records were returned from the API."
      summary={(count, meta) =>
        meta?.page ? `${count} users on page ${meta.page}` : `${count} users loaded`
      }
      renderItem={(item) => (
        <>
          <h3 className="h5 mb-2">{item.displayName || item.name || 'User'}</h3>
          <dl className="row mb-0">
            <dt className="col-5">Email</dt>
            <dd className="col-7">{item.email || 'N/A'}</dd>
            <dt className="col-5">Role</dt>
            <dd className="col-7">{item.role || 'member'}</dd>
            <dt className="col-5">Age</dt>
            <dd className="col-7">{item.age ?? 'N/A'}</dd>
          </dl>
        </>
      )}
    />
  );
}
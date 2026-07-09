import CollectionPage from './CollectionPage.jsx';
import { useApiCollection } from './useApiCollection.js';

export default function Leaderboard() {
  const resource = useApiCollection('leaderboard');

  return (
    <CollectionPage
      title="Leaderboard"
      resource={resource}
      subtitle="Competitive rankings pulled from the backend API."
      emptyMessage="No leaderboard entries were returned from the API."
      summary={(count, meta) =>
        meta?.page
          ? `${count} leaderboard entries on page ${meta.page}${meta.totalPages ? ` of ${meta.totalPages}` : ''}`
          : `${count} leaderboard entries loaded`
      }
      renderItem={(item, index) => (
        <>
          <div className="d-flex justify-content-between align-items-start gap-3 mb-2">
            <div>
              <p className="text-uppercase text-accent fw-semibold mb-1">Rank #{item.rank ?? index + 1}</p>
              <h3 className="h5 mb-0">{item.teamName || item.team?.name || 'Team'}</h3>
            </div>
            <span className="badge text-bg-info">{item.points ?? '0'} pts</span>
          </div>
          <p className="mb-0">Weekly change: {item.weeklyChange ?? item.delta ?? 0}</p>
        </>
      )}
    />
  );
}
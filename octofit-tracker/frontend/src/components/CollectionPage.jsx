import { Link } from 'react-router-dom';

export default function CollectionPage({ title, resource, subtitle, emptyMessage, renderItem, summary }) {
  const { count, error, items, loading, meta, setupMessage } = resource;

  return (
    <div className="container py-5">
      <div className="hero-card p-4 p-md-5 rounded-4 shadow-sm mb-4">
        <p className="text-uppercase text-accent fw-semibold mb-2">OctoFit Tracker</p>
        <h1 className="display-6 fw-bold mb-3">{title}</h1>
        <p className="lead mb-3">{subtitle}</p>
        <p className="small text-info-emphasis mb-0">{setupMessage}</p>
      </div>

      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div>
          <h2 className="h4 mb-1">{summary(count, meta)}</h2>
          <p className="mb-0 text-white-50">{emptyMessage}</p>
        </div>
        <Link className="btn btn-outline-light" to="/">
          Back home
        </Link>
      </div>

      {loading ? (
        <div className="metric-card p-4 rounded-4">Loading {title.toLowerCase()}...</div>
      ) : null}

      {error ? <div className="alert alert-danger">{error}</div> : null}

      {!loading && !error ? (
        items.length ? (
          <div className="row g-4">
            {items.map((item, index) => (
              <div className="col-12 col-lg-6" key={item._id || item.id || `${title}-${index}`}>
                <div className="metric-card p-4 rounded-4 h-100">{renderItem(item, index)}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="metric-card p-4 rounded-4">{emptyMessage}</div>
        )
      ) : null}
    </div>
  );
}
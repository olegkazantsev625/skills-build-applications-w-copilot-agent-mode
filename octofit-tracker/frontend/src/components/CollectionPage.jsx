import { useEffect, useState } from 'react';

import { fetchCollection, getEndpointUrl } from '../services/api';

function renderValue(value) {
  if (Array.isArray(value)) {
    return value.join(', ');
  }

  if (value instanceof Date) {
    return value.toLocaleDateString();
  }

  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T/.test(value)) {
    return new Date(value).toLocaleDateString();
  }

  return String(value ?? '');
}

export default function CollectionPage({ resource, title, description, columns }) {
  const [items, setItems] = useState([]);
  const [apiBaseUrl, setApiBaseUrl] = useState('');
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');

  useEffect(() => {
    let isActive = true;

    async function loadItems() {
      try {
        setStatus('loading');
        const result = await fetchCollection(resource);

        if (isActive) {
          setItems(result.items);
          setApiBaseUrl(result.apiBaseUrl);
          setStatus('ready');
        }
      } catch (requestError) {
        if (isActive) {
          setError(requestError.message);
          setStatus('error');
        }
      }
    }

    loadItems();

    return () => {
      isActive = false;
    };
  }, [resource]);

  return (
    <section className="page-section">
      <div className="d-flex flex-column flex-lg-row align-items-lg-end justify-content-between gap-3 mb-4">
        <div>
          <p className="section-kicker mb-2">OctoFit Tracker</p>
          <h1 className="h2 mb-2">{title}</h1>
          <p className="text-secondary mb-0">{description}</p>
        </div>
        <div className="endpoint-box" title={getEndpointUrl(resource)}>
          <span className="text-secondary">Endpoint</span>
          <code>{getEndpointUrl(resource)}</code>
        </div>
      </div>

      {status === 'loading' && <div className="alert alert-info">Loading {title.toLowerCase()}...</div>}
      {status === 'error' && <div className="alert alert-danger">Unable to load {title.toLowerCase()}: {error}</div>}

      {status === 'ready' && (
        <>
          <div className="summary-row mb-3">
            <div>
              <span className="summary-value">{items.length}</span>
              <span className="summary-label">records</span>
            </div>
            <code>{apiBaseUrl}</code>
          </div>

          <div className="table-responsive data-surface">
            <table className="table table-hover align-middle mb-0">
              <thead>
                <tr>
                  {columns.map((column) => (
                    <th scope="col" key={column.key}>{column.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item._id ?? item.id ?? JSON.stringify(item)}>
                    {columns.map((column) => (
                      <td key={column.key}>{renderValue(item[column.key])}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </section>
  );
}

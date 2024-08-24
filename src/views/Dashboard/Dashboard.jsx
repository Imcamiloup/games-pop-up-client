// src/views/Dashboard/Dashboard.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEvents, setPage, setFilters } from '../../redux/eventsSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { events, loading, error, page, filters } = useSelector((state) => state.events);

  useEffect(() => {
    dispatch(fetchEvents({ page, filters }));
  }, [dispatch, page, filters]);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  const handleFilterChange = (newFilters) => {
    dispatch(setFilters(newFilters));
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {loading && <p>Cargando eventos...</p>}
      {error && <p>Error al cargar eventos: {error}</p>}
      <div>
        <h2>Filtros</h2>
        {/* Aquí puedes agregar inputs para los filtros */}
        <button onClick={() => handleFilterChange({})}>Aplicar Filtros</button>
      </div>
      <div>
        <h2>Eventos</h2>
        <ul>
          {events.map((event) => (
            <li key={event.id}>{event.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
          Anterior
        </button>
        <button onClick={() => handlePageChange(page + 1)}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
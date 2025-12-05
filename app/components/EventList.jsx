import React, { useMemo } from "react";
import PropTypes from "prop-types";
import EventCard from "./EventCard";

const EventList = ({ events: externalEvents }) => {
  const defaultEvents = useMemo(
    () => [
      {
        id: 1,
        title: "Conferencia React Avanzado",
        date: "2023-11-25T09:00:00",
        location: "Auditorio Principal SENA",
        price: 0,
      },
      {
        id: 2,
        title: "Festival de Música Electrónica",
        date: "2023-12-15T18:00:00",
        location: "Parque Simón Bolívar",
        price: 150000,
      },

      {
        id: 3,
        title: "Taller de Tailwind CSS",
        date: "2023-11-30T14:00:00",
        location: "Sala de Cómputo 4",
        price: 25000,
      },

      {
        id: 4,
        title: "Hackathon de Desarrollo Web",
        date: "2024-01-10T08:00:00",
        location: "Campus Virtual",
        price: 0,
      },
    ],
    []
  );

  const events =
    Array.isArray(externalEvents) && externalEvents.length
      ? externalEvents
      : defaultEvents;

  if (!events || events.length === 0) {
    return (
      <section className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
            Próximos Eventos
          </h1>

          <p className="text-gray-600">
            No hay eventos disponibles por el momento.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      className="min-h-screen bg-gray-50 p-8"
      aria-label="Lista de eventos"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
          Próximos Eventos{" "}
          <span className="text-indigo-600 text-sm font-medium ml-2">
            (Actividad 4)
          </span>
        </h1>

        {/* uso de role para accesibilidad; cada EventCard ya es un artículo */}

        <div
          role="list"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {events.map((eventItem) => (
            <div role="listitem" key={eventItem.id}>
              <EventCard event={eventItem} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

EventList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string,
      date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
      location: PropTypes.string,
      price: PropTypes.number,
    })
  ),
};

export default EventList;

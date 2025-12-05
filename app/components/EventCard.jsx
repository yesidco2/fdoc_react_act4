import React, { memo } from "react";
import PropTypes from "prop-types";

const EventCard = ({ event = {} }) => {
  const { id, title = "Evento", date, location = "Ubicación no disponible", price = 0 } = event;

  let formattedDate;
  try {
    formattedDate = date
      ? new Intl.DateTimeFormat("es-ES", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(new Date(date))
      : "Fecha no disponible";
  } catch (e) {
    formattedDate = "Fecha no disponible";
  }

  const priceLabel = price === 0 ? "GRATIS" : `$${Number(price).toLocaleString("es-ES")}`;

  return (
    <article
      aria-labelledby={`event-title-${id || title}`}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
    >
      <header className="bg-indigo-600 p-4">
        <h3 id={`event-title-${id || title}`} className="text-white text-xl font-bold truncate" title={title}>
          {title}
        </h3>
      </header>

      <div className="p-5 flex-grow flex flex-col justify-between">
        <div className="space-y-3 mb-4">
          <div className="flex items-start space-x-2 text-gray-600">
            <svg aria-hidden="true" className="w-5 h-5 mt-0.5 text-indigo-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{formattedDate}</span>
          </div>

          <div className="flex items-start space-x-2 text-gray-600">
            <svg aria-hidden="true" className="w-5 h-5 mt-0.5 text-indigo-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{location}</span>
          </div>
        </div>

        <footer className="pt-4 border-t border-gray-100 flex justify-between items-center">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Precio</span>
          <span className={`text-xl font-bold ${price === 0 ? "text-green-600" : "text-indigo-700"}`}>
            {priceLabel}
          </span>
        </footer>
      </div>
    </article>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    location: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default memo(EventCard);

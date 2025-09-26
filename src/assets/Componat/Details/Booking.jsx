import React, { useState } from "react";
import Data from "../../Data.json";

const BookingCard = ({ id }) => {

  // ابحث عن العنصر المطلوب
  const item = Data.find((item) => item.id === id);

  if (!item) {
    return <p className="text-red-500">⚠️ لم يتم العثور على بيانات لهذا العنصر</p>;
  }

  const tickets = item.tickets || []; // مصفوفة التذاكر
  const firstPrice = item.price;

  // كميات التذاكر
  const [quantities, setQuantities] = useState(
    tickets.reduce((acc, ticket) => ({ ...acc, [ticket.type]: 0 }), {})
  );

  const handleQuantityChange = (type, value) => {
    setQuantities((prev) => ({
      ...prev,
      [type]: Math.max(0, value),
    }));
  };

  // الإضافات
  const [extras, setExtras] = useState({
    serviceBooking: false,
    servicePerson: false,
  });

  // حساب السعر
  const ticketsTotal = tickets.reduce(
    (sum, ticket) => sum + ticket.price * quantities[ticket.type],
    item.price
  );

  const extrasTotal =
    (extras.serviceBooking ? 40 : 0) +
    (extras.servicePerson
      ? Object.values(quantities).reduce((sum, q) => sum + q * 40, 0)
      : 0);

  const total = ticketsTotal + extrasTotal;

  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
      <h2 className="text-xl font-bold text-gray-800">
        From ${firstPrice}
      </h2>

      {/* Tickets */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Tickets</h3>
        {tickets.map((ticket) => (
          <div
            key={ticket.type}
            className="flex justify-between items-center py-1"
          >
            <span className="capitalize">{ticket.type}</span>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="0"
                value={quantities[ticket.type]}
                onChange={(e) =>
                  handleQuantityChange(ticket.type, parseInt(e.target.value))
                }
                className="w-16 border rounded p-1 text-center"
              />
              <span className="text-gray-600">${ticket.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Add Extra */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Add Extra</h3>
        <label className="flex items-center space-x-2 mb-2">
          <input
            type="checkbox"
            checked={extras.serviceBooking}
            onChange={() =>
              setExtras((prev) => ({
                ...prev,
                serviceBooking: !prev.serviceBooking,
              }))
            }
          />
          <span>Add Service per booking ($40)</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={extras.servicePerson}
            onChange={() =>
              setExtras((prev) => ({
                ...prev,
                servicePerson: !prev.servicePerson,
              }))
            }
          />
          <span>Add Service per person ($40 each)</span>
        </label>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center font-bold text-lg">
        <span>Total:</span>
        <span>${total}</span>
      </div>

      {/* Button */}
      <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg">
        Book Now
      </button>
    </div>
  );
};

export default BookingCard;

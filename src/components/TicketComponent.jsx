// TicketsComponent.js
import React, { useEffect, useState } from "react";
import "../css/TicketComponent.css";

const TicketsComponent = () => {
  const [tickets, setTickets] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
        const data = await response.json();
        setTickets(data.tickets);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };

    fetchTickets();
  }, []);

  return (
    <div className="tickets-container">
      {tickets.map((ticket) => (
        <div key={ticket.id} className="ticket-card">
          <h3>{ticket.title}</h3>
          <p><strong>Status:</strong> {ticket.status}</p>
          <p><strong>Priority:</strong> {ticket.priority}</p>
          <p><strong>Tags:</strong> {ticket.tag.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default TicketsComponent;

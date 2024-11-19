// TicketsComponent.js
import React, { useEffect, useState } from "react";
import "../css/TicketComponent.css";

const TicketsComponent = () => {
  const [tickets, setTickets] = useState([]);
  
  // Fetch data from the API (replace with your API endpoint)
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment"); // Replace with your API URL
        const data = await response.json();
        setTickets(data.tickets);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };

    fetchTickets();
  }, []);

  // Filter tickets based on their status
  const todoTickets = tickets.filter(ticket => ticket.status === "Todo");
  const inProgressTickets = tickets.filter(ticket => ticket.status === "In progress");
  const doneTickets = tickets.filter(ticket => ticket.status === "Done");
  const cancelledTickets = tickets.filter(ticket => ticket.status === "Cancelled");

  return (
    <div className="tickets-columns">
      <div className="tickets-column">
        <h2>Todo</h2>
        {todoTickets.map(ticket => (
          <div key={ticket.id} className="ticket-card">
            <h3>{ticket.title}</h3>
            <p><strong>Priority:</strong> {ticket.priority}</p>
            <p><strong>Tags:</strong> {ticket.tag.join(", ")}</p>
          </div>
        ))}
      </div>
      
      <div className="tickets-column">
        <h2>In Progress</h2>
        {inProgressTickets.map(ticket => (
          <div key={ticket.id} className="ticket-card">
            <h3>{ticket.title}</h3>
            <p><strong>Priority:</strong> {ticket.priority}</p>
            <p><strong>Tags:</strong> {ticket.tag.join(", ")}</p>
          </div>
        ))}
      </div>
      
      <div className="tickets-column">
        <h2>Done</h2>
        {doneTickets.length > 0 ? (
          doneTickets.map(ticket => (
            <div key={ticket.id} className="ticket-card">
              <h3>{ticket.title}</h3>
              <p><strong>Priority:</strong> {ticket.priority}</p>
              <p><strong>Tags:</strong> {ticket.tag.join(", ")}</p>
            </div>
          ))
        ) : (
          <p>No tickets marked as Done.</p>
        )}
      </div>
      
      <div className="tickets-column">
        <h2>Cancelled</h2>
        {cancelledTickets.length > 0 ? (
          cancelledTickets.map(ticket => (
            <div key={ticket.id} className="ticket-card">
              <h3>{ticket.title}</h3>
              <p><strong>Priority:</strong> {ticket.priority}</p>
              <p><strong>Tags:</strong> {ticket.tag.join(", ")}</p>
            </div>
          ))
        ) : (
          <p>No tickets marked as Cancelled.</p>
        )}
      </div>
    </div>
  );
};

export default TicketsComponent;

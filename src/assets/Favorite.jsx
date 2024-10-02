import React from 'react'
const TeamModal = ({ team, onClose }) => {
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <h2>Equipo</h2>
          <ul>
            {team.map(agent => (
              <li key={agent.uuid}>{agent.displayName}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };


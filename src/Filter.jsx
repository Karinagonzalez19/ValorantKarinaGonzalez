import React, { useState } from 'react'
import './Filter.css'

const AgentList = ({ agents }) => {
    const [roleFilter, setRoleFilter] = useState('');
    const [textFilter, setTextFilter] = useState('');
  console.log("entro");
  
    const handleRoleChange = (event) => setRoleFilter(event.target.value);
    const handleTextChange = (event) => setTextFilter(event.target.value);
  
    const filteredAgents = agents.filter(agent => 
      agent.displayName.toLowerCase().includes(textFilter.toLowerCase()) &&
      (roleFilter === '' || (agent.role && agent.role.displayName.toLowerCase().includes(roleFilter.toLowerCase())))
    );
  
    return (
      <div>
        <input 
          type="text" 
          value={textFilter} 
          onChange={handleTextChange} 
          placeholder="Buscar por nombre" 
          className="filter-input"
        />
        <input 
          type="text" 
          value={roleFilter} 
          onChange={handleRoleChange} 
          placeholder="Filtrar por rol" 
          className="filter-input"
        />
        {filteredAgents.length === 0 ? (
          <p>No se encontraron agentes que coincidan con la búsqueda</p>
        ) : (
          <div className="agent-list">
            {filteredAgents.map(agent => (
            <li key={agent.uuid} className="agent-card">
            <h2>{agent.displayName}</h2>
            <img src={agent.displayIcon} alt={agent.displayName} />
          </li>
            ))}
          </div>
        )}
      </div>
    );
  };


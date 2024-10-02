import React, { useState } from 'react'

const AgentList = ({ agents }) => {
    const [roleFilter, setRoleFilter] = useState('');
    const [textFilter, setTextFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const agentsPerPage = 6;
  
    const handleRoleChange = (event) => setRoleFilter(event.target.value);
    const handleTextChange = (event) => setTextFilter(event.target.value);
  
    const filteredAgents = agents.filter(agent => 
      agent.displayName.toLowerCase().includes(textFilter.toLowerCase()) &&
      (roleFilter === '' || (agent.role && agent.role.displayName.toLowerCase().includes(roleFilter.toLowerCase())))
    );
  
    const indexOfLastAgent = currentPage * agentsPerPage;
    const indexOfFirstAgent = indexOfLastAgent - agentsPerPage;
    const currentAgents = filteredAgents.slice(indexOfFirstAgent, indexOfLastAgent);
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
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
            {currentAgents.map(agent => (
              <li key={agent.uuid} className="agent-card">
              <h2>{agent.displayName}</h2>
              <img src={agent.displayIcon} alt={agent.displayName} />
            </li>
            ))}
          </div>
        )}
        <Pagination 
          agentsPerPage={agentsPerPage} 
          totalAgents={filteredAgents.length} 
          paginate={paginate} 
        />
      </div>
    );
  };
  
  const Pagination = ({ agentsPerPage, totalAgents, paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalAgents / agentsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className="flex justify-center">
          {pageNumbers.map(number => (
            <li key={number} className="m-2">
              <a onClick={() => paginate(number)} href="!#" className="bg-pink-500 p-2">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  export{AgentList}
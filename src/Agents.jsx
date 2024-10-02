import React, { useEffect, useState } from 'react';
import { AgentList } from './assets/Pagination';

const Agents = () => {
  const [agents, setAgents] = useState([]);
  const [roleFilter, setRoleFilter] = useState('');

  useEffect(() => {
    fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true')
      .then(response => response.json())
      .then(json => setAgents(json.data))
      .catch(error => console.error('Error fetching agents:', error));
  }, []);

  return (
    <div>
      <h1 className='text-center'>VALORANTS AGENTS</h1>
      <ul className="agent-list">
        <AgentList agents= {agents}/>
        {/* {agents.map(agent => (
          <li key={agent.uuid} className="agent-card">
          <h2>{agent.displayName}</h2>
          <img src={agent.displayIcon} alt={agent.displayName} />
        </li>
      ))} */}
    </ul>
  </div>
);
};

export default Agents; 
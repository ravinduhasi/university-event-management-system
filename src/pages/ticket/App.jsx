import { useState } from 'react';
import TicketHome from './TicketHome';
import AdminPanel from './AdminPanel';

function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <div>
      <button onClick={() => setShowAdmin(!showAdmin)} className="px-4 py-2 text-white bg-gray-500">
        {showAdmin ? 'Hide Admin Panel' : 'Show Admin Panel'}
      </button>
      {showAdmin ? <AdminPanel /> : <TicketHome />}
    </div>
  );
}

export default App;

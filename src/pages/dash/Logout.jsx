import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Logout = ({ onLogout }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Call the onLogout function to reset authentication
    onLogout();
    // Redirect to the login page after logout
    navigate('/login');
  }, [onLogout, navigate]);

  return null; // This component does not render anything visible
};

Logout.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Logout;

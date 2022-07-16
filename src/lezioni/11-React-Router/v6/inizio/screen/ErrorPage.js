import React from 'react';
import  {useNavigate} from 'react-router-dom';

function ErrorPage() {
   const navigate = useNavigate();
  return (
    <div>
      <h1>
      Page Not Found

      </h1>
      <button className='btn btn-success mt-4' onClick={() => navigate('/')}>
        Torna Alla Home
      </button>
      </div>
  )
}

export default ErrorPage
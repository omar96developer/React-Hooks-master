import React from 'react'
import  {useNavigate} from 'react-router-dom';


function About() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>

      Sono la pagina about
      </h2>
      {/* navugate(-1) ecc. serve per tprnare in idetro di tot pagine che sia -1 , -2, -3 */}
      <button className='btn btn-success mt-4' onClick={() => navigate(-1)}>
        Redirect
      </button>
      </div>
  )
}

export default About
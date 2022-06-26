import React from 'react'

const Modal = ({modalContent, modalState, openModal, chiudiModal}) => {
  return (
    <section className={`modal-section ${modalState ? 'show-modal' : ''}`}>
        <div className="container modal-content">
            <h4>
                {modalContent || ' sono un modal'}
            </h4>

            <button className='button delete-button' onClick={chiudiModal}>X</button>
            
        </div>
    </section>
  )
}

export default Modal
import React,{useReducer, useState} from "react"
import Modal from "./Modal";
import reducer from "./reducer";


const initialState = {
  isModalOpen: false,
  modalContent: 'eccomi, sono un modal'
}
const Index = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const tiPremo =  () =>{
    dispatch({type: 'PREMO_BOTTONE'});
  }
  const apriModal = () => {
    dispatch({type: 'APRI_MODAL'});
  }
  const chiudiModal = () => {
    dispatch({type: 'CHIUDI_MODAL'})
  }
  
  return (
    <div>
      <h2>Premi qui per aprire il modal</h2>
      <button className="button" onClick={apriModal}>
        Mostrami
      </button>
      <Modal modalContent={state.modalContent}
      modalState={state.isModalOpen}
      chiudiModal={chiudiModal}
      ></Modal>
    </div>
  );
};

export default Index;

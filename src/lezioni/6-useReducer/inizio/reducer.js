const reducer = (state, action) => {
    if(action.type === 'PREMO_BOTTONE') {
        console.log('bottone premuto');
    }
    if(action.type === 'APRI_MODAL') {
        return {
            ...state,
            isModalOpen: true
        };
    }
    if(action.type === 'CHIUDI_MODAL') {
        return{
            ...state,
            isModalOpen: false
        }
    }
    return state;
};

export default reducer
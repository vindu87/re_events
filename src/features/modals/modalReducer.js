import { createReducer } from '../../app/common/util/reducerUtil'
import { MODAL_OPEN, MODAL_CLOSE } from './modelConstants';

const initialState = null;

const openModal = (state, payload) => {
    const {modalType, modalProps} = payload;
    return {modalType, modalProps}
}

const closeModal = (state) => {
    return null
}

export default createReducer(initialState, {
    [MODAL_OPEN]: openModal,
    [MODAL_CLOSE]: closeModal
})
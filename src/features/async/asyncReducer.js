import { createReducer } from '../../app/common/util/reducerUtil';
import {  } from './asyncActions'
import { ASYNC_ACTION_START, ASYNC_ACTION_ERROR, ASYNC_ACTION_FINISH } from './asyncConstants';

const initialState = {
    loading: false,
    elementName: null
}

const asyncActionStarted = (state, payload) => {
    return {
        ...state,
        loading: true,
        elementName: payload
    }
}

const asyncActionError = (state) => {
    return {
        ...state,
        loading: false,
        elementName: null
    }
}

const asyncActionFinished = (state) => {
    return {
        ...state,
        loading: false,
        elementName: null
    }
}

export default createReducer(initialState, {
    [ASYNC_ACTION_START] : asyncActionStarted,
    [ASYNC_ACTION_ERROR] : asyncActionError,
    [ASYNC_ACTION_FINISH] : asyncActionFinished
})
import { ASYNC_ACTION_START, ASYNC_ACTION_ERROR, ASYNC_ACTION_FINISH } from './asyncConstants';

export const asyncActionStart = () => {
    return {
        type: ASYNC_ACTION_START
    }
}

export const asyncActionError = () => {
    return {
        type: ASYNC_ACTION_ERROR
    }
}

export const asyncActionFinish = () => {
    return {
        type: ASYNC_ACTION_FINISH
    }
}
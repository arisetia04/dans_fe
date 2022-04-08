import { FETCH_JOBS, FETCH_SINGLE_JOB } from "../actions/types";

export const reducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_JOBS:
            return { ...state, jobs: action.payload };
        case FETCH_SINGLE_JOB:
            return { ...state, job: action.payload };
        default:
            return state;
    }
};

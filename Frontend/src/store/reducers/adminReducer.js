import actionTypes from '../actions/actionTypes';

const initialState = {
    genders: [],
    roles: [],
    positions: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            console.log('fetch gender start', action)

            return {
                ...state
            }

        case actionTypes.FETCH_GENDER_SUCCESS:
            let copyState = { ...state };
            copyState.genders = action.data;
            console.log('fetch gender succ', copyState)
           
            return {
                ...copyState
            }

        case actionTypes.FETCH_GENDER_FAILED:
            console.log('fetch gender fail', action)
            return {
                ...state
            }

        default:
            return state;
    }
}

export default adminReducer;
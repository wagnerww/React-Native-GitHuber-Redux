/*
  TYPES
*/

export const Types = {
  LOAD_REQUEST: "LOAD_REPOSITORIES_REQUEST",
  LOAD_SUCCESS: "LOAD_REPOSITORIES_SUCCESS",
  LOAD_FAILURE: "LOAD_REPOSITORIES_FAILURE"
};

/*
  REDUCER
*/
const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_REQUEST:
      return { ...state, loading: true };
    case Types.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: false
      };
    case Types.LOAD_FAILURE:
      return { ...state, loading: false, error: false };
    default:
      return state;
  }
}

/*
Store
*/
export const Creators = {
  loadRepositoriesRequest: () => ({
    type: Types.LOAD_REQUEST
  }),

  loadRepositoriesSuccess: data => ({
    type: Types.LOAD_SUCCESS,
    payload: { data }
  }),

  loadRepositoriesFailure: () => ({
    type: Types.LOAD_FAILURE
  })
};

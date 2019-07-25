import { AFNPRO_EXERCISE_ADS_LIST_REQUEST, AFNPRO_EXERCISE_ADS_LIST_SUCCESS, AFNPRO_EXERCISE_ADS_LIST_FAILURE } from './actions';

const list = (
  state = {
    data: [],
    status: { loading: false, failure: false }
  },
  action
) => {
  switch (action.type) {
    case AFNPRO_EXERCISE_ADS_LIST_REQUEST:
      return {
        data: [],
        status: { loading: true, failure: false }
      };
    case AFNPRO_EXERCISE_ADS_LIST_SUCCESS:
      return {
        data: action.ads,
        status: { loading: false, failure: false }
      };
    case AFNPRO_EXERCISE_ADS_LIST_FAILURE:
      return {
        data: [],
        status: { loading: false, failure: true }
      };

    default:
      return state;
  }
};

export default list;

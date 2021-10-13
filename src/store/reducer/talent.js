import * as types from "../../constants/types";

const initialstate = {
  listTalent: {
    talents: [],
    talentsLoading: false,
    talentsError: null,
    talentsMessage: [],
  },
};

const talent = (state = initialstate, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };

    case types.GET_TALENT_BEGIN:
      return {
        ...state,
        listTalent: {
          talentsLoading: true,
        },
      };
    case types.GET_TALENT_SUCCESS:
      return {
        ...state,
        listTalent: {
          talents: payload,
          talentsLoading: false,
        },
      };
    case types.GET_TALENT_FAIL:
      return {
        ...state,
        listTalent: {
          talentsError: true,
          talentsLoading: false,
          talentsMessage: payload,
          error: error,
        },
      };
  }
};
export default talent;

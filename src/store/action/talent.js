import * as types from "../../constants/types";

export const getTalents = (page = "1") => {
  return {
    type: types.GET_TALENT_BEGIN,
    page,
  };
};

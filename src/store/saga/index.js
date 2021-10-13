import { all } from "@redux-saga/core/effects";
import { watchGetTalents } from "./talent";

export default function* rootSaga() {
  yield all([
    // watchGetGames(),
    // watchGetGamesDetail(),
    watchGetTalents(),
  ]);
}

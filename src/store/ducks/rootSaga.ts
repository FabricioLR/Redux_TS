import { all, takeLatest } from "redux-saga/effects"
import { RepositoriesTypes } from "./repositories/types"
import { load } from "./repositories/saga"
import { load as loadUser } from "./user/saga"
import { UserTypes } from "./user/types"

export default function* rootSaga(){
    yield all([
        takeLatest(RepositoriesTypes.LOAD_REQUEST, load),
        takeLatest(UserTypes.LOAD_REQUEST, loadUser)
    ])
}
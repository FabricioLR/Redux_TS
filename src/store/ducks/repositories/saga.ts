import { call, put } from "redux-saga/effects"
import api from "../../../services/api"
import { loadSuccess, loadFailure } from "./actions"
import { Repository } from "./types"

interface ResponseData{
    data: Repository[]
}

export function* load(){
    try {
        const response: ResponseData = yield call(api.get, "users/FabricioLR/repos")

        yield put(loadSuccess(response.data))
    } catch (error) {
        yield put(loadFailure())
    }
}

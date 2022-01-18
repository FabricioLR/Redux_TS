import { call, put } from "@redux-saga/core/effects";
import api from "../../../services/api";
import { loadFailure, loadSuccess } from "./actions";
import { User } from "./types";

interface ResponseData{
    data: User
}

export function* load(){
    try {
        const response: ResponseData = yield call(api.get, "users/FabricioLR")

        yield put(loadSuccess(response.data))
    } catch (error) {
        yield put(loadFailure())
    }
}
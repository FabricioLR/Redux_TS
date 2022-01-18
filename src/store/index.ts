import { createStore, Store, applyMiddleware } from "redux";
import { RepositoriesState } from "./ducks/repositories/types";
import { UserState } from "./ducks/user/types";
import createSagaMiddleware from "@redux-saga/core";

import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

export interface ApplicationState{
    repositories: RepositoriesState
    user: UserState
}

const sagaMiddleware = createSagaMiddleware()

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store
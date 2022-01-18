import { combineReducers } from "redux"

import repositories from "./repositories/index"
import user from "./user/index"

export default combineReducers({
    repositories, user
})
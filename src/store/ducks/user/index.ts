import { Reducer } from "redux"
import { UserTypes, UserState} from "./types"

const INITIAL_STATE: UserState = {
    data: {
        id: 0,
        avatar_url: "",
        login: ""
    },
    loading: false,
    error: false
}

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserTypes.LOAD_REQUEST:
            return { ...state, loading: true}
        case UserTypes.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.data}
        case UserTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: { id: 0, avatar_url: "", login: "" }}
        default:
            return state
    }
}

export default reducer
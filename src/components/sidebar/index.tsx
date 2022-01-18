import { useSelector, useDispatch } from 'react-redux'
import { Repository, RepositoriesTypes } from "../../store/ducks/repositories/types"
import { UserTypes, User} from "../../store/ducks/user/types"

interface StateProps {
    repositories: {
        data: Repository[]
    }
    user: {
        data: User
    }
}

const SideBar = () => {
    const state = useSelector<StateProps>(state => state.repositories.data)
    const userState = useSelector<StateProps>(state => state.user.data)
    const dispatch = useDispatch()
    
    console.log(state)
    console.log(userState)
    
    return (
        <>
            <div onClick={() => dispatch({ type: RepositoriesTypes.LOAD_REQUEST })}>
                oi
            </div>
            <div onClick={() => dispatch({ type: UserTypes.LOAD_REQUEST })}>
                oi
            </div>
        </>
        
    )
}

export default SideBar
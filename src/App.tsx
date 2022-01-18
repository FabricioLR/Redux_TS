import SideBar from "./components/sidebar"
import { Provider } from "react-redux"

import store from "./store/index"

function App() {
  return (
    <div>
      <Provider store={store}>
        <SideBar />
      </Provider>
    </div>
  )
}

export default App

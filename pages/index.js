import { Provider} from "react-redux";
import store from "../store/store";
import AllLayout from "../components/layout/allLayout";

const Home = props =>{

  return(
    <Provider store={store}>
      <AllLayout/>
    </Provider>
  )
}
export default Home;
import Body from "./body";
import Header from "./header";
import { Modal, ImageHolder, Caption } from "../core/modal";
import { useDispatch, useSelector } from "react-redux";
import { SearchIconFloat } from "../core/searchIcon";
import { actions } from "../../store/reducer";

const AllLayout = props =>{
    const modalContent = useSelector(state=>state.modalContent);
    const modalOn = useSelector(state=>state.modalOn)
    const query = useSelector(state=>state.query)
    const dispatch = useDispatch()
    const {addQuery} = actions;

    const showSearchBar = () =>{
        dispatch(addQuery(''))
    }

    return(
        <div style={{position: 'relative'}}>
            {modalOn && <Modal>
                        <ImageHolder src={modalContent.src}/>
                        <Caption>{modalContent.name}</Caption>
                        </Modal>}
                        
            {query && <SearchIconFloat onClick={showSearchBar}/>}
            <Header/>
            <Body/>  
        </div>
    )
}
export default AllLayout;
import styled from "styled-components";
import Searchbox from "../container/searchbox";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../store/reducer";

const Wrapper = styled.div`
width: 100%;
height: 200px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #DDE2E9;
transition: all 0.2s;

@media only screen and (min-width: 728px) {
    height: 250px; 
}
`
const Header = props => {
    const [query, SetQuery] = useState('');
    const showMessage = useSelector(state=>state.showMessage)
    const dispatch = useDispatch();
    const {addImages, addLoading, addQuery, isShowMessageOn} = actions

    const changeHandler = (e) =>{
        if(showMessage){
            dispatch(isShowMessageOn(false));
        }
        SetQuery(e.target.value)
    }

    const searchHandler = () =>{  
        if(query){
            dispatch(addLoading(true))
            dispatch(addQuery(query))
            let searchQuery = query;
            fetch('/api/getImage',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    searchQuery: searchQuery
                })  
                }).then(response=>response.json()).then(data=>{
                    let picsdata = []
                    data.data.results.map((value, index)=>{
                        picsdata.push({photo: value.urls.small, name: value.user.name, modal: value.urls.raw})  
                    })
                    dispatch(addImages(picsdata)) 
                    dispatch(addLoading(false))
                })
        }else{
            dispatch(isShowMessageOn(true));
        }
        
    }
    return(
        <Wrapper>
            <Searchbox onClick={searchHandler} onChange={changeHandler} field={query}/>
        </Wrapper>
    )
}

export default Header;
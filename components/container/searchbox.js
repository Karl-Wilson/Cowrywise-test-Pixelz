import styled from "styled-components";
import Search from "../core/search";
import {SearchIcon} from "../core/searchIcon";
import SearchResultInfo from "../core/searchResultInfo";
import { useSelector } from "react-redux";
import Tooltip from "../core/tooltip";

const Wrapper = styled.div`
    position: relative;
    width: 70%;
    background-color: ${props=>props.query? 'transparent': '#ffffff'};
    padding: 5px 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    box-shadow: ${props=>props.query? '' : '0 2px 8px 1px rgba(64,60,67,.24)'};

    @media only screen and (min-width: 728px) {
        
    }
`


const Searchbox = props =>{
    const query = useSelector(state=>state.query)
    const isLoading = useSelector(state=>state.loading)
    const showMessage = useSelector(state=>state.showMessage)
    return(
        <Wrapper query={query}>
            {showMessage && <Tooltip>Enter a keyword</Tooltip>}
            {!query && <>
            <SearchIcon onClick={props.onClick}/>
            <Search  onChange={props.onChange} value={props.field} placeholder="Search for photo"/>
            </>}
            {(!isLoading && query) && <SearchResultInfo>Search Results for <span>&quot;{query}&quot;</span></SearchResultInfo>}
            {(isLoading && query) && <SearchResultInfo>Searching Results for <span>&quot;{query}&quot;</span></SearchResultInfo>}
        </Wrapper>
    )
}

export default Searchbox;
import styled from "styled-components";

const Info = styled.p`
    font-size: 30px;
    color: #192D4E;
    span{
        color: #637289;
    }
`
const SearchResultInfo = props=>{
    return(
        <Info {...props}/>
    )
}

export default SearchResultInfo;
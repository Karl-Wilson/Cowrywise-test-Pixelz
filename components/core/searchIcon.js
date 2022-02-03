
import styled from "styled-components";

const Wrapper = styled.div`
    height: 45px;
    display:  flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    &:hover{
        cursor: pointer; 
    }
`
const FloatWrapper = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: #ffffff;
    box-shadow: 0 2px 8px 1px rgba(64,60,67,.24);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 50px;
    right: 50px;
    cursor: pointer;
    z-index: 1000;
    &:hover{
        box-shadow: 0 3px 9px 2px rgba(64,60,67,.24);
    }
`
export const SearchIcon =  props =>{
     return(
         <Wrapper {...props}>
            <img src="/images/search.png" width="15px" alt="search-icon"/>
         </Wrapper>
     )
}

export const SearchIconFloat = props =>{
    
    return(
        <FloatWrapper {...props}>
            <img src="/images/search.png" width="50%" alt="search-icon"/>
        </FloatWrapper>
    )
}
import styled from "styled-components";

const Input = styled.input`
    flex-grow: 1;
    height: 45px;
    border-width: 0px;
    background-color: #ffffff;
    outline: none;
    color: #000000;
    font-family: Roboto;
    font-weight: 500;
    &::placeholder{
        color: #192D4E;
        font-family: Roboto;
        font-weight: 500;
    }
`
const Search = props =>{
    return(
        <Input {...props}/>
    )
}

export default Search;
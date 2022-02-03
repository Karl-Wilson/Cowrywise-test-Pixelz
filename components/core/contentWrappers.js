import styled from "styled-components"
const Wrapper = styled.div`
    width: 70%;
    background-color: #ffffff;
    padding: 5px 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0 2px 8px 1px rgba(64,60,67,.24);

    @media only screen and (min-width: 728px) {
        
    }
`

export const HeaderContentWrapper = props =>{
    return(
        <Wrapper {...props}/>
    )
}
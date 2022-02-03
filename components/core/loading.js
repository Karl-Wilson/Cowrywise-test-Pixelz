import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 250px;
    background-color: #F5F5F5;
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`
const Loading = props =>{
    return(
        <Wrapper>
            <Skeleton count={1} width="150px" height="10px" baseColor="#E6E6E6" highlightColor="#ffffff" borderRadius={0}/>
            <Skeleton count={1} width="70px" height="10px" baseColor="#E6E6E6" highlightColor="#ffffff" borderRadius={0}/>
        </Wrapper>
        
    )
}

export default Loading;
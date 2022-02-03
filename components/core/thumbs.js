import styled from "styled-components";
import Loading from "./loading";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../store/reducer";

const Wrapper = styled.div`
    width: 220px;
    border-radius: 10px;
    position: relative;
    height: auto;
    margin-bottom: 20px;
    &:hover{
        cursor: pointer;
    }

    @media screen and (min-width: 720px){
        width: 240px;
    }
`
const Overlay = styled.div`
    width: 100%;
    height: 50px;
    border-radius: 10px;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%); 
    position: absolute;
    bottom: 4px;
    left: 0;
    z-index: 5;
    p{
        color: #ffffff;
        padding: 0px 20px;
    }
`
const Img = styled.div`
    width: 100%;
    height: auto;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1
    background-color: red;

`
const Container = styled.div`
position: relative;
`
const Thumbs = ({children, name, src, ...props}) =>{   
    const dispatch = useDispatch();
    const {addModalContent, modalOn} = actions;
    const isLoading = useSelector(state=>state.loading)
    let Name = name;
    let Src = src
    const clickHandler = () =>{
        dispatch(addModalContent({name: name, src: src}))
        dispatch(modalOn(true))
    }
    return(
        <Wrapper onClick={clickHandler} {...props}>
           {isLoading && <Loading/>}
           {!isLoading && <>
           {children}
           <Overlay>
               <p>{name}</p>
           </Overlay>
           </> }   
        </Wrapper>
    )
}
export default Thumbs;
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { actions } from "../../store/reducer";
const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
`
const Container = styled.div`
    width: 100%;
    height 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 0;
    left: 0;
    z-index: 100;
    
`
const Bg = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.8);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 101;

`
const ModalContent = styled.div`
    width: auto;
    height: auto;
    background-color: #ffffff;
    position: relative;
    z-index: 102;
    border-radius: 10px;
`
const CaptionWrapper = styled.div`
    padding: 20px;
    box-sizing: border-box;
    h3{
        color: blue;
    }
    p{
        font-size: 12px;
        color: #cccccc;
    }
`
const ImgHolderImage = styled.img`

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    @media screen and (min-width: 900px){

    }
`
export const Modal = props =>{
    const dispatch = useDispatch()
    const {modalOn} = actions
    const closeHandler = () =>{
        dispatch(modalOn(false))
    }
    return(
        <Wrapper >
            <Container>
                <Bg onClick={closeHandler}></Bg>
                <ModalContent>
                    {props.children}
                </ModalContent>
            </Container>
        </Wrapper>
    )
}
export const ImageHolder = props =>{
    return(
        <ImgHolderImage {...props}/>
    )
}

export const Caption = props =>{
    return(
        <CaptionWrapper {...props}></CaptionWrapper>
    )
}
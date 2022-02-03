import styled from "styled-components";
import Thumbs from "../core/thumbs";
import { useSelector } from "react-redux";
import { useGetImages, useWindowSize } from "../../helper/Hooks";
import { modalImageResizer, addImagesToColumnArray } from "../../helper/helper";


const Wrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ColumnWrapper = styled.div`
    position: relative;
    top: -50px;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
`
const Column = styled.div`
    width: 220px;
    margin-right: 0px;
    @media screen and (min-width: 520px){
        margin-right: ${props=>props.clRight || props.clMiddle ? '0px': '20px'};
    }
    @media screen and (min-width: 720px){
        margin-right: ${props=>props.clRight? '0px': '20px'};
        width: 240px;
    }
`
const Imgs = styled.img`
    width: 100%;
    border-radius: 10px;
`
let first = true
const Body = props =>{
    let pic = [{column: []}, {column: []}, {column: []}]
    const pics = useSelector(state=>state.images)
    const {ScreenWidth, firstLoad} = useWindowSize(first);
    useGetImages()

    if(first && !firstLoad){
         first = firstLoad
    }

     return(
        <Wrapper>
            <ColumnWrapper>
                {addImagesToColumnArray(pic, pics, ScreenWidth)}
                <Column>
                {
                    pic[0].column.map((value, index)=>{
                           return <Thumbs name={value.name} src={value.modal+modalImageResizer(ScreenWidth)} key={`col1-${index}`}><Imgs src={value.photo}/></Thumbs>;  
                    })
                }
                </Column>
                {(ScreenWidth > 520) && <Column clMiddle>
                {
                    pic[1].column.map((value, index)=>{
                        return <Thumbs middle name={value.name} src={value.modal+modalImageResizer(ScreenWidth)} key={`col2-${index}`}><Imgs src={value.photo}/></Thumbs>;  
                    })
                }
                </Column>}
                {(ScreenWidth>900) && <Column clRight>
                {
                    pic[2].column.map((value, index)=>{
                        return <Thumbs right name={value.name} src={value.modal+modalImageResizer(ScreenWidth)} key={`col3-${index}`}><Imgs src={value.photo}/></Thumbs>;   
                    })
                }
                </Column>}
   
            </ColumnWrapper>
        </Wrapper>
     )
}

export default Body;
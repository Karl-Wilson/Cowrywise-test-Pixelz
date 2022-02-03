import styled from 'styled-components'
/*const Wrapper = styled.div`
    backgroud-color: ${props=>props.bg || '#000000'};
    position: ${props=>props.position || 'absolute'};
    top: ${props=>props.top || '0px'};;
    left: ${props=>props.left || '0px'};;
    right: ${props=>props.right || '0px'};;
    bottom: ${props=>props.bottom || '0px'};;
    margin-top: ${props=>props.mt || '0px'};
    margin-bottom: ${props=>props.mb || '0px'};
    margin-right: ${props=>props.mr || '0px'};
    margin-left: ${props=>props.ml || '0px'};
    padding-top: ${props=>props.pt || '0px'};
    padding-bottom: ${props=>props.pb || '0px'};
    padding-right: ${props=>props.pr || '0px'};
    padding-left: ${props=>props.pl || '0px'};
`*/
const Wrapper = styled.div`
    background-color: #000000;
    position: absolute;
    top: -40px;
    left: 55px;
    padding: 6px;
    border-radius: 5px;
`
const BottomArrow = styled.div`
    width: 10px;
    height: 10px;
    position: absolute;
    bottom: -10px;
    left: 5px;
    background-color: #000000;
    transform: rotate(45deg);
    z-index: 1;
`
const Text = styled.p`
    position: relative;
    z-index: 5;
    margin: 0px;
    font-size: 12px;
    font-family: Open Sans;
    color: #ffffff;
`
const Tooltip = ({children, ...props}) =>{
    return(
        <Wrapper {...props}>
            <div style={{position: 'relative'}}>
                <Text>{children}</Text>
                <BottomArrow/>
            </div>    
        </Wrapper>
    )
}
export default Tooltip;
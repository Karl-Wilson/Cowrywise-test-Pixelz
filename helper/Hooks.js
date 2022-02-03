import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../store/reducer";

export const useWindowSize = (firstTime) =>{
    const [ScreenWidth, setScreenWidth] = useState('');
    const [firstLoad, setLoad] = useState(firstTime);

    useEffect(()=>{       
        if(firstLoad){setScreenWidth(window.innerWidth)}
        setLoad(false)
        window.addEventListener('resize', setWidth)
        function setWidth(){
            setScreenWidth(window.innerWidth)
        }
 
        return () => {
            window.removeEventListener('resize', setWidth)
          };
    },[ScreenWidth])
    return {ScreenWidth, firstLoad};
}

export const useGetImages = () => {
    const dispatch = useDispatch();
    const {addImages, addLoading} = actions;
    useEffect(()=>{
        dispatch(addLoading(true))
        fetch('/api/getImage').then(response => response.json()).then(data=>{
            let picsdata = []
            data.data.results.map(value=>{
                picsdata.push({photo: value.urls.small, name: value.user.name, modal: value.urls.raw}) 
            })
            dispatch(addImages(picsdata))
            dispatch(addLoading(false)) 
        })
    },[])
}

export const modalImageResizer = (ScreenWidth) =>{
    let imageSize;
    if(ScreenWidth < 520){
        imageSize = '&fit=clip&w=250';
    }
    if(ScreenWidth > 520){
        imageSize = '&fit=clip&w=350';
    }
    return imageSize;
}

export const addImagesToColumnArray = (pic, pics, ScreenWidth) =>{
    if(ScreenWidth > 900){
        for(let i=0; i<pics.length;i=i+3){
            pics[i]? pic[0].column.push({photo: pics[i].photo, name: pics[i].name, modal: pics[i].modal} ): ''
            pics[i+1]? pic[1].column.push({photo: pics[i+1].photo, name: pics[i+1].name, modal: pics[i+1].modal}): ''
            pics[i+2]? pic[2].column.push({photo: pics[i+2].photo, name: pics[i+2].name, modal: pics[i+2].modal}): ''
        }
    }
    if(ScreenWidth < 900 && ScreenWidth > 520){
        for(let i=0; i<pics.length;i=i+2){
            pics[i]? pic[0].column.push({photo: pics[i].photo, name: pics[i].name, modal: pics[i].modal}): ''
            pics[i+1]? pic[1].column.push({photo: pics[i+1].photo, name: pics[i+1].name, modal: pics[i+1].modal}): ''
        }
    }
    if(ScreenWidth < 520){
        for(let i=0; i<pics.length;++i){
            pics[i]? pic[0].column.push({photo:pics[i].photo, name: pics[i].name, modal: pics[i].modal}): ''
        }
    }
    
}

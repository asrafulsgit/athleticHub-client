export const minimizeData =(data,lenght)=>{
    if(data.lenght < lenght){
      return data;
    }else{
      return `${data.slice(0,lenght)+'...'}`
    }
  }
  
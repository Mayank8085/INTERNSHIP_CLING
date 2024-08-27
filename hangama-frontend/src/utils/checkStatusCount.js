export const checkStatusCount =(Objarr,desiredStatus)=>{
   
  let result = Objarr?.filter(function(obj) {
    return obj?.status === desiredStatus;
  });
  
  return result?.[0]?.countStatus;
}


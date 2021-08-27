export function nthElement(arr, n = 0){
    return (n > 0 ? arr.slice(n, n + 1) : arr.slice(n))[0];
}

export const getActualDate = () => {
    const date = new Date();
  
    let day = date.getDate();
    // @ts-ignore
    if (day < 10) day = `0${day}`;
  
    let month = date.getMonth() + 1;
    // @ts-ignore
    if (month < 10) month = `0${month}`;
  
    const year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };
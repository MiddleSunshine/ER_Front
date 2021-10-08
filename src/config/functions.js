export function requestApi(api,option={}){
    return fetch("http://"+document.domain+":8091"+"/ER_Back/"+api,option);
}
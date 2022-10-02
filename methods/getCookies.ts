export function getCookies(key:string) {
    var cookies = document.cookie;
    var cookiesArray = cookies.split(' ');
    console.log(cookies)
    const temp = cookiesArray[1].split('=');
    console.log("temp",temp)
    if(temp[0] === key){
        return temp[1]
    }
    // for(var c of cookiesArray){
    //     var cArray = c.split('=');
    //     if (cArray[0] == key) {
    //         return cArray[1]
    //     }
    // }
    return null

}

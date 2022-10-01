export function getCookies(key:string) {
    var cookies = document.cookie;
    var cookiesArray = cookies.split(';');
    console.log(cookies)
    for(var c of cookiesArray){
        var cArray = c.split('=');
        if (cArray[0] == key) {
            return cArray[1]
        }
    }
    return null

}

export const getLocalStrage = (key:string) => {
        const jwt = localStorage.getItem(key)
        if(!jwt){
            return ''
        }else{
            return jwt
        }
}

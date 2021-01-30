export default async function auth ({ next  }){
    const token = await localStorage.getItem('auth_token_default')
    if(! token ){
        return next({
            name: 'login'
        })
    }
    return next()
}

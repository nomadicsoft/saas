export default async function auth ({ next  }){
    const token = await localStorage.getItem('token')
    const user = await localStorage.getItem('user')
    if(! token || ! user){
        return next({
            name: 'login'
        })
    }
    return next()
}

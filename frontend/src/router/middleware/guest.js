export default async function guest ({ next  }){
    const token = await localStorage.getItem('token')
    const user = await localStorage.getItem('user')
    if(token && user){
        return next({
            name: user.redirect_link ?? 'dashboard.index'
        })
    }
    return next()
}

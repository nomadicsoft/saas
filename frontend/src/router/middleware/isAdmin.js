export default async function isAdmin ({ next  }){
    let user = await localStorage.getItem('user');
    user = JSON.parse(user)

    if (user.primary_role_name !== 'admin') {
        return next({
            name: '403'
        })
    }
    return next()
}

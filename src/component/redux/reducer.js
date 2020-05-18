
const initialState = {
    username : '',
    password : '',
    isLogin  : false,
    errorMsg : false
}

const reducer = (state = initialState, action) =>{
    if(action.type === 'LOGIN' && action.username === 'admin' && action.password === 'admin'){
        console.log('If Condition')
        return{
            ...state,
            username: action.username,
            password: action.password,
            isLogin: true
        }
    }else{
        console.log('else Condition')
        return {...state,errorMsg:true}
    }
}

export default reducer;
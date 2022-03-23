const initialState = {

    students: []
}

const studentsReducer = (state = initialState,action) =>{
    
    switch (action.type){
        case 'STUDENTS':
            return{
                ...state,
                students: action.payload
            }
        default:
            return state
    }
}

export default studentsReducer
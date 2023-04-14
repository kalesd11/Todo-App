

export const addTodo=(value)=>{
    return (dispatch=>{
        dispatch({
            type:'addTodo',
            payload:value
        })
    })
}
export const isChecked = (value)=>{
    return (dispatch=>{
        dispatch({
            type:'isChecked',
            payload:value
        })
    })
}
export const Delete =(value)=>{
    return {
        type : 'Delete',
        payload : value
    }
}
export const Edit = (value,newVal)=>{
    return {
        type:'Edit',
        payload:{value:value,newVal:newVal===""?value.newValue:newVal}
    }
}
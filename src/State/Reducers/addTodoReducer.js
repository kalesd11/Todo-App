let INIT_STATE = [];

function addTodoReducer(state = INIT_STATE, action) {
  if (action.type === "addTodo") {
    let value = [...state, { ...action.payload }];
    // console.log(value);
    return value;
  } 
  
  else if (action.type === "isChecked") {
    let newState = [...state].map((item) => {
      if (item.id === action.payload.id) {
        let current = { ...item };
        current.isDone = !current.isDone;
        console.log(current);

        return current;
      } else {
        return item;
      }
    });

    console.log(newState);
    return newState;
  } 
  
  else if (action.type === "Delete") {
    let newState = [...state].filter((item) => {
      return item.id !== action.payload.id;
    });
    return newState;
  } 
  
  else if (action.type === "Edit") {
    let current = [...state].map((item) => {
      if(item.id===action.payload.value.id){
        let newVal = {...item}
        newVal.newValue=action.payload.newVal
        return newVal
      }
      else{
        return item
      }
    })
    return current
  } 
  
  else {
    return state;
  }
}

export default addTodoReducer;

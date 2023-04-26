export const LoaderReducer = (state = false,action:{type:String,value:boolean}) => {
  switch (action.type) {
    case 'SHOW_LOADER':
      return action.value
  
    default:
      return state
  }
  
}

const inputReducer = (state= '', action) => {
   switch(action.type) {
      case 'ADD':
         return action.input
      default:
         return state
   }
}

export default inputReducer

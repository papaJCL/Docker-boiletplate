const isLoggedReducer = (state = false, action) =>{
	switch (action.type){
		case 'IS_LOGGED' : 
			return action.payload;
		default: 
        	return state;
	}
}

export default isLoggedReducer; 
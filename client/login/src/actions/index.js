export const auth = (boolean) => {
	return {
		type : 'IS_LOGGED' , 
		payload : boolean
	}
}
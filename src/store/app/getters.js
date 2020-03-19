
export function authUserGetter (state) {
	//teste
	if(!state.user.user){
		return {user:localStorage.getItem("user"),
				token:localStorage.getItem("token")}
	}
	return state.user
}

export function feedbackGetter (state) {
	return state.feedback
}

export function feedbackUserGetter (state) {
	return state.feedback.user
}

export function feedbackCountGetter (state) {
	return state.feedback.count
}

// doneTodosCount: (state, getters) => {
//     return getters.doneTodos.length
//   }

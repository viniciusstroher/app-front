
export function authUserGetter (state) {
	return state.user
}

export function feedbackGetter (state) {
	return state.feedback
}



// doneTodosCount: (state, getters) => {
//     return getters.doneTodos.length
//   }

// getters: {
//     doneTodos: state => {
//       return state.todos.filter(todo => todo.done)
//     }
//   }
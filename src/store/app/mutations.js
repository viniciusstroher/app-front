/*
export function someMutation (state) {
}
*/

//responsavel por alterar estado do usaurio (chamar depois de consultar a servico)
export const updateUserMutation = (state, user) => {
  console.log('updateUserMutation','atualizando usuario')
  state.user = user
}


//FEEDBACK
export const updateFeedbackMutation = (state, feedback) => {
  console.log('updateFeedbackMutation','atualizando feedback')
  state.feedback = feedback
}

export const updateFeedbackUserMutation = (state, user) => {
  console.log('updateFeedbackUserMutation','atualizando feedback user')
  state.feedback.user = user
}

export const updateFeedbackCountMutation = (state, count) => {
  console.log('updateFeedbackCountMutation','atualizando feedback count')
  state.feedback.count = count
}
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

export const updateFeedbackUserMutation = (state, feedback) => {
  console.log('updateFeedbackUserMutation','atualizando feedback user')
  state.feedback.user = feedback.user
}

export const updateFeedbackCountMutation = (state, feedback) => {
  console.log('updateFeedbackCountMutation','atualizando feedback count')
  state.feedback.count = feedback.count
}
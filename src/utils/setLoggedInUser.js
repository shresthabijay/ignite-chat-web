
export const setLoggedInUser = ({ userId, token }) => {
  localStorage.setItem('ignite-user-id', userId)
  localStorage.setItem('ignite-user-token', token)
}
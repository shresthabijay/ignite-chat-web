
export const getLoggedInUser = () => {
  const userId = localStorage.getItem('ignite-user-id')
  const token = localStorage.getItem('ignite-user-token')

  if (userId && token) return { userId, token }

  return false
}
export const load = async ({ fetch }) => {
  const response = await fetch(`/api/list`)
  const list = await response.json()

  return {
    list
  }
}
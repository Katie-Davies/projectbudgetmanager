import { request } from 'superagent'

const api = 'http://localhost:5143'

export async function getAllProjects() {
  const projects = await request.get(`${api}/projects`)
  return projects.body as Project[]
}

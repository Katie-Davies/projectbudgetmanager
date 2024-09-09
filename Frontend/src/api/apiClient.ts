import request from 'superagent'
import { IProject } from '../../models/models'

const api = 'http://localhost:5143'

export async function getAllProjects() {
  const projects = await request.get(`${api}/projects`)
  return projects.body as IProject[]
}

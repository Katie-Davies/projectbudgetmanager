import request from 'superagent'
import { IProject } from '../../models/models'

const api = 'http://localhost:5143'

export async function getAllProjects() {
  const projects = await request.get(`${api}/projects`)
  return projects.body as IProject[]
}

export async function createNewProject(project: IProject) {
  return await request.post(`${api}/projects`).send(project)
}

export async function updateProject(project: IProject) {
  const updatedProject = await request
    .put(`${api}/projects/${project.projectId}`)
    .send(project)
  return updatedProject.body as IProject
}

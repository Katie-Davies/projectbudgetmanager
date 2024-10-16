import request from 'superagent'
import { IProject, IUpdateProject } from '../../models/models'

const api = process.env.REACT_APP_API_URL

export async function getAllProjects() {
  const projects = await request.get(`${api}/projects`)
  return projects.body as IProject[]
}

export async function createNewProject(project: IProject) {
  return await request.post(`${api}/projects`).send(project)
}

export async function updateProject(project: IUpdateProject) {
  const updatedProject = await request
    .put(`${api}/projects/${project.projectId}`)
    .send(project)
  return updatedProject.body as IProject
}

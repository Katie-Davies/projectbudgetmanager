export interface IProject {
  projectId?: number
  projectName: string
  projectOwner: string
  budget: number
  usedBudget?: number
  remainingBudget?: number
}

export interface IUpdateProject {
  projectId: number
  usedBudget: number
}

export interface IProject {
  projectId?: number
  projectName: string
  projectOwner: string
  budget: number
  usedBudget?: number
  hourlyRate: number
  remainingBudget?: number
}

export interface IUpdateProject {
  projectId: number
  usedBudget: number
}

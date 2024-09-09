export interface IProject {
  projectId?: number
  projectName: string
  projectOwner: string
  budget: number
  usedBudget: number
  remainingBudget?: number
}

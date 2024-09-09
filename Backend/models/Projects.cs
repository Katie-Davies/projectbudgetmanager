namespace backend.Models
{
  public class Project
  {
    public int ProjectId { get; set; }
    public string ProjectName { get; set; }
    public string ProjectOwner { get; set; }
    public int Budget { get; set; }
    public int UsedBudget { get; set; }
    public int RemainingBudget { get; set; }
  }
}

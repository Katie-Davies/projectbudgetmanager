namespace backend.Models
{
  public class Project
  {
    public int ProjectId { get; set; }
    public string ProjectName { get; set; } = string.Empty;
    public string ProjectOwner { get; set; } = string.Empty;
    public int Budget { get; set; }
    public int UsedBudget { get; set; } = 0;
    public int? RemainingBudget => Budget - UsedBudget;
  }
}

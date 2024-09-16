namespace backend.Models
{
  public class Project
  {
    public int ProjectId { get; set; }
    public string ProjectName { get; set; } = string.Empty;
    public string ProjectOwner { get; set; } = string.Empty;
    public decimal Budget { get; set; }
    public decimal UsedBudget { get; set; } = 0;
    public decimal HourlyRate { get; set; }
    public decimal? RemainingBudget => Budget - UsedBudget;
  }
}

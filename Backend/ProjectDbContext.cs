using Microsoft.EntityFrameworkCore;
using backend.Models;

public class ProjectDbContext : DbContext
{
  public ProjectDbContext(DbContextOptions<ProjectDbContext> options) : base(options) { }

  public DbSet<Project> Projects { get; set; }
  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    modelBuilder.Entity<Project>().Property(p => p.Budget).HasColumnType("decimal(18,2)");
    modelBuilder.Entity<Project>().Property(p => p.UsedBudget).HasColumnType("decimal(18,2)");
    modelBuilder.Entity<Project>().Property(p => p.HourlyRate).HasColumnType("decimal(18,2)");

    modelBuilder.Entity<Project>().Ignore(p => p.RemainingBudget);
    modelBuilder.Entity<Project>().HasData(
                new Project { ProjectId = 1, ProjectName = "Disney", ProjectOwner = "Kate", Budget = 100000, UsedBudget = 50000, HourlyRate = 150 },
                new Project { ProjectId = 2, ProjectName = "Education", ProjectOwner = "Kate", Budget = 70000, UsedBudget = 40000, HourlyRate = 140 },
                new Project { ProjectId = 3, ProjectName = "Coke", ProjectOwner = "Kate", Budget = 40000, UsedBudget = 30000, HourlyRate = 130 },
                new Project { ProjectId = 4, ProjectName = "Marvel", ProjectOwner = "Kate", Budget = 60000, UsedBudget = 10000, HourlyRate = 160 },
                new Project { ProjectId = 5, ProjectName = "Power", ProjectOwner = "Kate", Budget = 90000, UsedBudget = 90000, HourlyRate = 190 }
            );
  }
}
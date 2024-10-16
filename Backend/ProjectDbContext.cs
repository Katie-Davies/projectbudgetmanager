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
                new Project { ProjectId = 1, ProjectName = "Contoso B2B Implementation", ProjectOwner = "Jack Johnson", Budget = 100000, UsedBudget = 5000, HourlyRate = 150 },
                new Project { ProjectId = 2, ProjectName = "Contoso DC migration", ProjectOwner = "Michael Smith", Budget = 75000, UsedBudget = 0, HourlyRate = 210 },
                new Project { ProjectId = 3, ProjectName = "Fabrikam Landing Zone Design", ProjectOwner = "Michael Smith", Budget = 25000, UsedBudget = 300, HourlyRate = 150 },
                new Project { ProjectId = 4, ProjectName = "Packt E-commerce Site Build", ProjectOwner = "Lisa Brown", Budget = 275000, UsedBudget = 22000, HourlyRate = 160 },
                new Project { ProjectId = 5, ProjectName = "Sailing Vessels Auction App MVP", ProjectOwner = "Lisa Brown", Budget = 55000, UsedBudget = 46750, HourlyRate = 160 }
            );
  }
}
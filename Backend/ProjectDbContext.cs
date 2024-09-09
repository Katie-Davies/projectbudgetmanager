using Microsoft.EntityFrameworkCore;
using backend.Models;

public class ProjectDbContext : DbContext
{
  public ProjectDbContext(DbContextOptions<ProjectDbContext> options) : base(options) { }

  public DbSet<Project> Projects { get; set; }
}
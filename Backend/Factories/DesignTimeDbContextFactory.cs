using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using System;
using System.IO;
using DotNetEnv;

namespace backend
{
  public class DesignTimeDbContextFactoty : IDesignTimeDbContextFactory<ProjectDbContext>
  {
    public ProjectDbContext CreateDbContext(string[] args)
    {
      DotNetEnv.Env.Load();
      var connectionString = Environment.GetEnvironmentVariable("DATABASE_CONNECTION_STRING");
      if (string.IsNullOrEmpty(connectionString))
      {
        throw new InvalidOperationException("Connection string is not set in right environement variables");
      }

      var optionsBuilder = new DbContextOptionsBuilder<ProjectDbContext>();
      optionsBuilder.UseSqlServer(connectionString);
      return new ProjectDbContext(optionsBuilder.Options);
    }
  }
}
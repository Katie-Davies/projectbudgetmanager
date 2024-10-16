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
      //DotNetEnv.Env.Load();
      var builder = WebApplication.CreateBuilder(args);

      var connectionString = builder.Configuration.GetConnectionString ("DATABASE_CONNECTION_STRING");
      if (string.IsNullOrEmpty(connectionString))
      {
        throw new InvalidOperationException("Cannot create Schema and Seed Data due to the connection string not being set correctly.");
      }

      var optionsBuilder = new DbContextOptionsBuilder<ProjectDbContext>();
      optionsBuilder.UseSqlServer(connectionString);
      return new ProjectDbContext(optionsBuilder.Options);
    }
  }
}
using backend.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using DotNetEnv;


// Load environment variables from .env file
DotNetEnv.Env.Load();

var builder = WebApplication.CreateBuilder(args);

// Get the connection string from environment variables
var connection = Environment.GetEnvironmentVariable("DATABASE_CONNECTION_STRING");

if (string.IsNullOrEmpty(connection))
{
  throw new InvalidOperationException("The environment variable DATABASE_CONNECTION_STRING is not set.");
}


// string connection = builder.Configuration.GetConnectionString($"{DATABASE_CONNECTION_STRING}");

// Register the DbContext with the connection string
builder.Services.AddDbContext<ProjectDbContext>(options =>
    options.UseSqlServer(connection));

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
  options.AddPolicy("AllowReactApp",
  builder =>
  {
    builder.WithOrigins("http://localhost:3000").AllowAnyHeader().AllowAnyMethod();
  });
});


var app = builder.Build();


// Apply database migrations automatically on startup
using (var scope = app.Services.CreateScope())
{
  var dbContext = scope.ServiceProvider.GetRequiredService<ProjectDbContext>();

  // Apply pending migrations
  dbContext.Database.Migrate();
}
//use CORS policy
app.UseCors("AllowReactApp");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

// app.UseHttpsRedirection();

// in memory projects
var projects = new List<Project>
{
 new Project
    {ProjectId = 10,
        ProjectName = "Disney",
        ProjectOwner = "Kate",
        Budget = 100000,
        UsedBudget = 50000,

    },
    new Project
    {
        ProjectId = 2,
        ProjectName = "Education",
        ProjectOwner = "Kate",
        Budget = 70000,
        UsedBudget = 40000,

    },
    new Project
    {
       ProjectId = 1,
        ProjectName = "Coke",
        ProjectOwner = "Kate",
        Budget = 40000,
        UsedBudget = 30000,

    },
    new Project
    {
       ProjectId = 3,
        ProjectName = "Marvel",
        ProjectOwner = "Kate",
        Budget = 60000,
        UsedBudget = 10000,

    },
    new Project
    {
       ProjectId = 4,
        ProjectName = "Power",
        ProjectOwner = "Kate",
        Budget = 90000,
        UsedBudget = 90000,

    }};

app.MapGet("/projects", async (ProjectDbContext dbContext) =>
{
  var projects = await dbContext.Projects.ToListAsync();
  if (projects == null)
  {
    return Results.NotFound();
  }
  else
  {
    return Results.Ok(projects);
  }

})
.WithName("GetProjects")
.WithOpenApi();

app.MapPost("/projects", async (ProjectDbContext dbContext, Project project) =>
{
  // var newProject = new Project

  // {
  //   ProjectId = projects.Max(x => x.ProjectId) + 1,
  //   ProjectName = project.ProjectName,
  //   ProjectOwner = project.ProjectOwner,
  //   Budget = project.Budget,
  //   UsedBudget = 0

  // };

  // projects.Add(newProject);
  await dbContext.Projects.AddAsync(project);
  await dbContext.SaveChangesAsync();
  return Results.Created($"/projects/{project.ProjectId}", project);
})
.WithName("CreateProject");

app.MapPut("/projects/{projectId}", async (ProjectDbContext dbContext, Project updatedProject) =>
{
  var project = await dbContext.Projects.FindAsync(updatedProject.ProjectId);
  if (project == null)
  {
    return Results.NotFound();
  }
  // Calculate the total used budget after adding the new amount
  var newUsedBudget = updatedProject.UsedBudget + project.UsedBudget;

  // Check if the new used budget exceeds the total budget
  if (newUsedBudget > project.Budget)
  {
    return Results.BadRequest("Error: Not enough budget available.");
  }

  // Update the used budget and save changes
  project.UsedBudget = newUsedBudget;
  await dbContext.SaveChangesAsync();
  return Results.Ok(project);
}).WithName("UpdateProject");

app.MapGet("/test-connection", async (ProjectDbContext DbContext) =>
{
  try
  {
    var projectCount = await DbContext.Projects.CountAsync();
    return Results.Ok($"Connection to database is successful. There are {projectCount} projects in the database.");
  }
  catch (Exception ex)
  {
    return Results.BadRequest($"Error: {ex.Message}");
  }
}).WithName("TestConnection").WithOpenApi();

app.Run();



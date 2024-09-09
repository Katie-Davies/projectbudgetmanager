using backend.Models;
using System.Linq;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

// app.UseHttpsRedirection();


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

app.MapGet("/projects", () =>
{
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

app.MapPost("/projects", (string projectName, string projectOwner, int budget, int usedBudget, int remainingBudget) =>
{
  var project = new Project

  {
    ProjectId = projects.Max(x => x.ProjectId) + 1,
    ProjectName = projectName,
    ProjectOwner = projectOwner,
    Budget = budget,
    UsedBudget = usedBudget,

  };

  projects.Add(project);
  return Results.Created($"/projects/{project.ProjectId}", project);
})
.WithName("CreateProject");

app.MapPut("/projects/{projectName}", (int projectId, string projectName, string projectOwner, int budget, int usedBudget, int remainingBudget) =>
{
  var project = projects.FirstOrDefault(x => x.ProjectId == projectId);
  if (project == null)
  {
    return Results.NotFound();
  }
  project.ProjectName = projectName;
  project.ProjectOwner = projectOwner;
  project.Budget = budget;
  project.UsedBudget = usedBudget;


  return Results.Ok(project);
}).WithName("UpdateProject");

app.Run();



using backend.Models;

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


var projects = new[]
{
 new Project
    {
        ProjectName = "Disney",
        ProjectOwner = "Kate",
        Budget = 100000,
        UsedBudget = 50000,
        RemainingBudget = 50000
    },
    new Project
    {
        ProjectId = 2,
        ProjectName = "Education",
        ProjectOwner = "Kate",
        Budget = 70000,
        UsedBudget = 40000,
        RemainingBudget = 30000
    },
    new Project
    {
       ProjectId = 1,
        ProjectName = "Coke",
        ProjectOwner = "Kate",
        Budget = 40000,
        UsedBudget = 30000,
        RemainingBudget = 10000
    },
    new Project
    {
       ProjectId = 3,
        ProjectName = "Marvel",
        ProjectOwner = "Kate",
        Budget = 60000,
        UsedBudget = 10000,
        RemainingBudget = 50000
    },
    new Project
    {
       ProjectId = 4,
        ProjectName = "Power",
        ProjectOwner = "Kate",
        Budget = 90000,
        UsedBudget = 90000,
        RemainingBudget = 0
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
  var project = new
  {
    projectName = projectName,
    projectOwner = projectOwner,
    budget = budget,
    usedBudget = usedBudget,
    remainingBudget = remainingBudget
  };

  projects = projects.Append(project).ToArray();
  return Results.Created($"/projects/{projectName}", project);
})
.WithName("CreateProject");

app.MapPut("/projects/{projectName}", (int projectId, string projectName, string projectOwner, int budget, int usedBudget, int remainingBudget) =>
{
  var project = projects.FirstOrDefault(x => x.projectId == projectId);
  if (project == null)
  {
    return Results.NotFound();
  }

  project.projectOwner = projectOwner;
  project.budget = budget;
  project.usedBudget = usedBudget;
  project.remainingBudget = remainingBudget;

  return Results.Ok(project);
}).WithName("UpdateProject");

app.Run();



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
 new
    {
        projectName = "Disney",
        projectOwner = "Kate",
        budget = 100000,
        usedBudget = 50000,
        remainingBudget = 50000
    },
    new
    {
        projectName = "Education",
        projectOwner = "Kate",
        budget = 70000,
        usedBudget = 40000,
        remainingBudget = 30000
    },
    new
    {
        projectName = "Coke",
        projectOwner = "Kate",
        budget = 40000,
        usedBudget = 30000,
        remainingBudget = 10000
    },
    new
    {
        projectName = "Marvel",
        projectOwner = "Kate",
        budget = 60000,
        usedBudget = 10000,
        remainingBudget = 50000
    },
    new
    {
        projectName = "Power",
        projectOwner = "Kate",
        budget = 90000,
        usedBudget = 90000,
        remainingBudget = 0
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

app.Run();



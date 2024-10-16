using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Projects",
                columns: table => new
                {
                    ProjectId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProjectName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProjectOwner = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Budget = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    UsedBudget = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    HourlyRate = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Projects", x => x.ProjectId);
                });

                // Insert Seed Data

                migrationBuilder.InsertData(
                    table: "Projects",
                    columns: new[] { "ProjectId", "ProjectName", "ProjectOwner", "Budget", "UsedBudget", "HourlyRate" },
                    values: new object[,]
                    {
                    { 1, "Contoso B2B Implementation", "Jack Johnson", 100000m, 5000m, 150m },
                    { 2, "Contoso DC migration", "Michael Smith", 75000m, 0m, 210m },
                    { 3, "Fabrikam Landing Zone Design", "Michael Smith", 25000m, 300m, 150m },
                    { 4, "Packt E-commerce Site Build", "Lisa Brown", 275000m, 22000m, 160m },
                    { 5, "Sailing Vessels Auction App MVP", "Lisa Brown", 55000m, 46750m, 160m }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Projects");
        }
    }
}

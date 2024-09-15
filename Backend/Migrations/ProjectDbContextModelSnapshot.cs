﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Backend.Migrations
{
    [DbContext(typeof(ProjectDbContext))]
    partial class ProjectDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("backend.Models.Project", b =>
                {
                    b.Property<int>("ProjectId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ProjectId"));

                    b.Property<decimal>("Budget")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("HourlyRate")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("ProjectName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ProjectOwner")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("UsedBudget")
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("ProjectId");

                    b.ToTable("Projects");

                    b.HasData(
                        new
                        {
                            ProjectId = 1,
                            Budget = 100000m,
                            HourlyRate = 0m,
                            ProjectName = "Disney",
                            ProjectOwner = "Kate",
                            UsedBudget = 50000m
                        },
                        new
                        {
                            ProjectId = 2,
                            Budget = 70000m,
                            HourlyRate = 0m,
                            ProjectName = "Education",
                            ProjectOwner = "Kate",
                            UsedBudget = 40000m
                        },
                        new
                        {
                            ProjectId = 3,
                            Budget = 40000m,
                            HourlyRate = 0m,
                            ProjectName = "Coke",
                            ProjectOwner = "Kate",
                            UsedBudget = 30000m
                        },
                        new
                        {
                            ProjectId = 4,
                            Budget = 60000m,
                            HourlyRate = 0m,
                            ProjectName = "Marvel",
                            ProjectOwner = "Kate",
                            UsedBudget = 10000m
                        },
                        new
                        {
                            ProjectId = 5,
                            Budget = 90000m,
                            HourlyRate = 0m,
                            ProjectName = "Power",
                            ProjectOwner = "Kate",
                            UsedBudget = 90000m
                        });
                });
#pragma warning restore 612, 618
        }
    }
}

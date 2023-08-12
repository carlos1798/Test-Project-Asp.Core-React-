using Microsoft.EntityFrameworkCore;
using TodoList.Models;

namespace TodoList.Helpers
{
    public class DataContext : DbContext
    {
        protected readonly IConfiguration configuration;

        public DataContext(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(configuration.GetConnectionString("WebApiDatabase"));
        }

        public DbSet<TodoItem> TodoList { get; set; }
    }
}
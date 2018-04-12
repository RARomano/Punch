using System;
using System.Reflection;
using Microsoft.EntityFrameworkCore;
using Punch.Domain;
using System.Linq;

namespace Punch.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        { }

        public DataContext() { }

        public DbSet<Post> Post { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Add the fluent API configurations
            var typesToRegister = Assembly.GetAssembly(typeof(DataContext))
                .GetTypes()
                    .Where(type => type.Namespace != null && type.Namespace.Equals(typeof(DataContext).Namespace + ".Configurations"))
                    .Where(type => type.BaseType.IsGenericType && type.BaseType.GetGenericTypeDefinition() == typeof(IEntityTypeConfiguration<>));

            foreach (var type in typesToRegister)
            {
                dynamic config = Activator.CreateInstance(type);
                modelBuilder.ApplyConfiguration(config);
            }
        }
    }
}

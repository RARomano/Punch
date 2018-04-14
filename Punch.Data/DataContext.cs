using System;
using Microsoft.EntityFrameworkCore;
using Punch.Domain;
using Punch.Data.Configurations;

namespace Punch.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        { }

        public DataContext() { }

        public DbSet<Post> Post { get; set; }
        public DbSet<Tag> Tag { get; set; }
        public DbSet<PostTag> PostTag { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new PostConfiguration());                
            modelBuilder.ApplyConfiguration(new TagConfiguration());                
            modelBuilder.ApplyConfiguration(new PostTagConfiguration());                
        }
    }
}

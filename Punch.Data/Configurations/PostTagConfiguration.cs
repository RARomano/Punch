using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Punch.Domain;

namespace Punch.Data.Configurations
{
    public class PostTagConfiguration : IEntityTypeConfiguration<PostTag>
    {
        public void Configure(EntityTypeBuilder<PostTag> builder)
        {
            builder
                .HasKey(post => new { post.PostId, post.TagId });

            builder
                .HasOne(bc => bc.Post)
                .WithMany(b => b.Tags)
                .IsRequired()
                .HasForeignKey(bc => bc.PostId);

            builder
                .HasOne(bc => bc.Tag)
                .WithMany(c => c.Posts)
                .IsRequired()
                .HasForeignKey(bc => bc.TagId);
        }
    }
}

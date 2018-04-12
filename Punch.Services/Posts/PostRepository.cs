using System;
using System.Collections.Generic;
using Punch.Data;
using Punch.Domain;

namespace Punch.Services.Posts
{
    public class PostRepository : BaseRepository<Post>, IPostRepository
    {
        public PostRepository(DataContext db) : base(db)
        {
        }
    }
}
using System;
using System.Collections.Generic;
using Punch.Data;
using Punch.Domain;

namespace Punch.Services.Tags
{
    public class TagRepository : BaseRepository<Tag>, ITagRepository
    {
        public TagRepository(DataContext db) : base(db)
        {
        }
    }
}
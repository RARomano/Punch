using System;
using System.Collections.Generic;
using Punch.Data;
using Punch.Domain;

namespace Punch.Services.Categories
{
    public class CategoryRepository : BaseRepository<Category>, ICategoryRepository
    {
        public CategoryRepository(DataContext db) : base(db)
        {
        }
    }
}
using System;
using System.Collections.Generic;

namespace Punch.Domain
{
    public class Category
    {
        public int Id { get; set; }
        public string Title { get; set; }

        public virtual List<Post> Posts { get; set; }
    }
}

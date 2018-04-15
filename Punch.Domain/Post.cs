using System;
using System.Collections.Generic;

namespace Punch.Domain
{
    public class Post
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }


        public Guid RowVersion { get; set; }
        public DateTime RowCreationDate { get; set; }
        public DateTime RowModificationDate { get; set; }

        public IEnumerable<PostTag> Tags { get; set; }
        public Category Category { get; set; }
    }
}

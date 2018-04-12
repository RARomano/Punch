using System;

namespace Punch.Domain
{
    public class Post
    {
        public int Id { get; set; }
        public int Title { get; set; }
        public int Body { get; set; }


        public Guid RowVersion { get; set; }
        public DateTime RowCreationDate { get; set; }
        public DateTime RowModificationDate { get; set; }
    }
}

using System;
using System.Collections.Generic;

namespace Punch.Domain
{
    public class Tag
    {
        public int Id { get; set; }
        public int Name { get; set; }


        public Guid RowVersion { get; set; }
        public DateTime RowCreationDate { get; set; }
        public DateTime RowModificationDate { get; set; }

        public IEnumerable<PostTag> Posts { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Punch.Domain;
using Punch.Services.Tags;

namespace Punch.Web.Controllers
{
    public class TagsController : BaseController<ITagRepository, Tag>
    {
        public TagsController(ITagRepository repo) : base(repo)
        {

        }
    }
}

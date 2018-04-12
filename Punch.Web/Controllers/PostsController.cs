using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Punch.Domain;
using Punch.Services.Posts;

namespace Punch.Web.Controllers
{
    public class PostsController : BaseController<IPostRepository, Post>
    {
        public PostsController(IPostRepository repo) : base(repo)
        {

        }
    }
}

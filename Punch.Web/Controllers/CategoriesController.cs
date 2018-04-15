using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Punch.Domain;
using Punch.Services.Categories;

namespace Punch.Web.Controllers
{
    public class CategoriesController : BaseController<ICategoryRepository, Category>
    {
        public CategoriesController(ICategoryRepository repo) : base(repo)
        {

        }
    }
}

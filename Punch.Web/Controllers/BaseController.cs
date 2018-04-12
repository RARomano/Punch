using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Punch.Services;

namespace Punch.Web.Controllers
{
    [Route("api/[controller]/[action]")]
    public class BaseController<TEntity, TModel> : Controller
        where TModel : class
        where TEntity : IBaseRepository<TModel>
    {
        protected readonly TEntity _data;
        public BaseController(TEntity repo)
        {
            this._data = repo;
        }

        protected string HandleException(Exception ex)
        {
            var message = ex.Message;
            if (ex.InnerException != null)
            {
                message += " - " + ex.InnerException.Message;
            }
            return message;
        }

        protected string ExtractErrorFromModelValidation()
        {
            var error = ModelState.SelectMany(x => x.Value.Errors).First();
            return error.ErrorMessage + " - " + error.Exception.Message;
        }

        private IActionResult InvokeAction(Func<IActionResult> action)
        {
            if (ModelState.IsValid)
            {
                return action();
            }
            else
            {
                return BadRequest(ExtractErrorFromModelValidation());
            }
        }


        [HttpGet]
        public virtual IEnumerable<TModel> All()
        {
            return this._data.GetAll();
        }

        [Route("{id}")]
        [HttpGet]
        public virtual TModel Get(int id) => this._data.GetById(id);

        [HttpPost]
        public virtual IActionResult Create([FromBody]TModel model)
        {
            return InvokeAction(() =>
            {
                this._data.Create(model);
                return Ok(model);
            });
        }

        [HttpPost]
        public virtual IActionResult Update([FromBody]TModel model)
        {
            return InvokeAction(() =>
            {
                this._data.Update(model);
                return Ok(model);
            });
        }

        [HttpPost]
        public virtual IActionResult Delete([FromBody]TModel model)
        {
            return InvokeAction(() =>
            {
                this._data.Update(model);
                return Ok();
            });
        }
    }
}

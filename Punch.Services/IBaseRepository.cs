using System;
using System.Collections.Generic;

namespace Punch.Services
{
    public interface IBaseRepository<TEntity> where TEntity : class
    {
        TEntity GetById(int id);
        void Create(TEntity model);
        void Update(TEntity model);
        void Delete(TEntity model);
        IEnumerable<TEntity> GetAll();
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

using Punch.Data;

namespace Punch.Services
{
    public class BaseRepository<TEntity> : IBaseRepository<TEntity> where TEntity : class
    {
        protected DataContext _db { get; set; }

        public BaseRepository(DataContext db)
        {
            this._db = db;
        }
        public virtual TEntity GetById(int id)
        {
            return _db.Set<TEntity>().Find(id);
        }

        public virtual void Create(TEntity model)
        {
            _db.Set<TEntity>().Add(model);
            _db.SaveChanges();
        }

        public virtual void Update(TEntity model)
        {
            _db.Entry(model).State = EntityState.Modified;
            _db.SaveChanges();
        }

        public virtual void Delete(TEntity model)
        {
            _db.Set<TEntity>().Remove(model);
            _db.SaveChanges();
        }

        public virtual IEnumerable<TEntity> GetAll()
        {
            return _db.Set<TEntity>().AsNoTracking().ToListAsync().Result;
        }

        protected IQueryable<TEntity> GetQueryable()
        {
            return _db.Set<TEntity>().AsNoTracking().AsQueryable();
        }
    }
}

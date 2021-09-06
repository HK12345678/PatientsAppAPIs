﻿using Domain;
using Infastructure.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace APIs
{
    public class Services<T> : IServices<T> where T : tblPatient
    {
        private IRepository<T> _tblPatientsRepository = null;

        public Services()
        {
            this._tblPatientsRepository = new Repository<T>();
        }

        public IEnumerable<T> GetAll()
        {
            return _tblPatientsRepository.GetAll();
        }
        public T GetById(object id)
        {
            return _tblPatientsRepository.GetById(id);
        }
        public T Insert(T obj)
        {
            return _tblPatientsRepository.Insert(obj);
        }
        public T Update(T obj)
        {
            return _tblPatientsRepository.Update(obj);
        }
    }
}

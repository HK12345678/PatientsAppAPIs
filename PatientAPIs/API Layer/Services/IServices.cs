using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PatientAPIs.Models;
namespace APIs
{
    public interface IServices<T> where T : PatientAPIs.Models.tblPatient
    {
        IEnumerable<T> GetAll();
        T GetById(object Id);
        T Insert(T obj);
        T Update(T obj);
    }
}

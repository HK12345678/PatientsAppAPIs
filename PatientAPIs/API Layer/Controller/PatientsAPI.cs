using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Domain_layer;
using PatientAPIs.Models;

namespace APIs
{
    public class tblPatientsController : ApiController
    {
        private IServices<tblPatient> _tblPatientsRepository = null;

        public tblPatientsController()
        {
            this._tblPatientsRepository = new Services<tblPatient>();
        }

        [Route("api/GetPatientsList")]
        [HttpGet]
        public HttpResponseMessage GetPatientsList()
        {
            var result = _tblPatientsRepository.GetAll();
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, result);
            return response;
        }

        [Route("api/GetPatient")]
        [HttpGet]
        public HttpResponseMessage GetPatient(int PatientId)
        {
            var result = _tblPatientsRepository.GetById(PatientId);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, result);
            return response;
        }

        [Route("api/UpdatePatientRecord")]
        [HttpPut]
        public HttpResponseMessage UpdatePatient(tblPatient patientDetails)
        {
            var result = _tblPatientsRepository.Update(patientDetails);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, result);
            return response;
        }

        [Route("api/InsertPatientRecord")]
        [HttpPost]
        public HttpResponseMessage InsertPatient(tblPatient patientDetails)
        {
            var result = _tblPatientsRepository.Insert(patientDetails);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, result);
            return response;
        }

        //private PatientEntities db = new PatientEntities();

        //// GET: api/tblPatients
        //[Route("api/GetPatients")]
        //public IQueryable<tblPatient> GettblPatients()
        //{
        //    return db.tblPatients;
        //}

        //// GET: api/tblPatients/5
        //[ResponseType(typeof(tblPatient))]
        //public IHttpActionResult GettblPatient(int id)
        //{
        //    tblPatient tblPatient = db.tblPatients.Find(id);
        //    if (tblPatient == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(tblPatient);
        //}

        //// PUT: api/tblPatients/5
        //[ResponseType(typeof(void))]
        //public IHttpActionResult PuttblPatient(int id, tblPatient tblPatient)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != tblPatient.ID)
        //    {
        //        return BadRequest();
        //    }

        //    db.Entry(tblPatient).State = EntityState.Modified;

        //    try
        //    {
        //        db.SaveChanges();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!tblPatientExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return StatusCode(HttpStatusCode.NoContent);
        //}

        //// POST: api/tblPatients
        //[ResponseType(typeof(tblPatient))]
        //public IHttpActionResult PosttblPatient(tblPatient tblPatient)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    db.tblPatients.Add(tblPatient);
        //    db.SaveChanges();

        //    return CreatedAtRoute("DefaultApi", new { id = tblPatient.ID }, tblPatient);
        //}

        //// DELETE: api/tblPatients/5
        //[ResponseType(typeof(tblPatient))]
        //public IHttpActionResult DeletetblPatient(int id)
        //{
        //    tblPatient tblPatient = db.tblPatients.Find(id);
        //    if (tblPatient == null)
        //    {
        //        return NotFound();
        //    }

        //    db.tblPatients.Remove(tblPatient);
        //    db.SaveChanges();

        //    return Ok(tblPatient);
        //}

        //protected override void Dispose(bool disposing)
        //{
        //    if (disposing)
        //    {
        //        db.Dispose();
        //    }
        //    base.Dispose(disposing);
        //}

        //private bool tblPatientExists(int id)
        //{
        //    return db.tblPatients.Count(e => e.ID == id) > 0;
        //}
    }
}
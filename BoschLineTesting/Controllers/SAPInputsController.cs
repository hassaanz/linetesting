using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using BoschLineTesting.Models;
using System.Web.Http.Cors;

namespace BoschLineTesting.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class SAPInputsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/SAPInputs
        public IQueryable<SAPInput> GetSAPInputs()
        {
            return db.SAPInputs;
        }

        // GET: api/SAPInputs/5
        [ResponseType(typeof(SAPInput))]
        public async Task<IHttpActionResult> GetSAPInput(int id)
        {
            SAPInput sAPInput = await db.SAPInputs.FindAsync(id);
            if (sAPInput == null)
            {
                return NotFound();
            }

            return Ok(sAPInput);
        }

        // PUT: api/SAPInputs/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutSAPInput(int id, SAPInput sAPInput)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != sAPInput.SAP_id)
            {
                return BadRequest();
            }

            db.Entry(sAPInput).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SAPInputExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/SAPInputs
        [ResponseType(typeof(SAPInput))]
        public async Task<IHttpActionResult> PostSAPInput(SAPInput sAPInput)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.SAPInputs.Add(sAPInput);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = sAPInput.SAP_id }, sAPInput);
        }

        // DELETE: api/SAPInputs/5
        [ResponseType(typeof(SAPInput))]
        public async Task<IHttpActionResult> DeleteSAPInput(int id)
        {
            SAPInput sAPInput = await db.SAPInputs.FindAsync(id);
            if (sAPInput == null)
            {
                return NotFound();
            }

            db.SAPInputs.Remove(sAPInput);
            await db.SaveChangesAsync();

            return Ok(sAPInput);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SAPInputExists(int id)
        {
            return db.SAPInputs.Count(e => e.SAP_id == id) > 0;
        }
    }
}
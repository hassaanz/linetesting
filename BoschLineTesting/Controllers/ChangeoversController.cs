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
    public class ChangeoversController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Changeovers
        public IQueryable<Changeover> GetChangeovers()
        {
            return db.Changeovers;
        }

        // GET: api/Changeovers/5
        [ResponseType(typeof(Changeover))]
        public async Task<IHttpActionResult> GetChangeover(string id)
        {
            Changeover changeover = await db.Changeovers.FindAsync(id);
            if (changeover == null)
            {
                return NotFound();
            }

            return Ok(changeover);
        }

        // PUT: api/Changeovers/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutChangeover(string id, Changeover changeover)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != changeover.ins_met_key)
            {
                return BadRequest();
            }

            db.Entry(changeover).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ChangeoverExists(id))
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

        // POST: api/Changeovers
        [ResponseType(typeof(Changeover))]
        public async Task<IHttpActionResult> PostChangeover(Changeover changeover)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Changeovers.Add(changeover);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ChangeoverExists(changeover.ins_met_key))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = changeover.ins_met_key }, changeover);
        }

        // DELETE: api/Changeovers/5
        [ResponseType(typeof(Changeover))]
        public async Task<IHttpActionResult> DeleteChangeover(string id)
        {
            Changeover changeover = await db.Changeovers.FindAsync(id);
            if (changeover == null)
            {
                return NotFound();
            }

            db.Changeovers.Remove(changeover);
            await db.SaveChangesAsync();

            return Ok(changeover);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ChangeoverExists(string id)
        {
            return db.Changeovers.Count(e => e.ins_met_key == id) > 0;
        }
    }
}
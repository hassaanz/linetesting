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
    public class TestResultsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/TestResults
        public IQueryable<Test_Result> GetTest_Results()
        {
            return db.Test_Results;
        }

        // GET: api/TestResults/5
        [ResponseType(typeof(Test_Result))]
        public async Task<IHttpActionResult> GetTest_Result(int id)
        {
            Test_Result test_Result = await db.Test_Results.FindAsync(id);
            if (test_Result == null)
            {
                return NotFound();
            }

            return Ok(test_Result);
        }

        // PUT: api/TestResults/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutTest_Result(int id, Test_Result test_Result)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != test_Result.Test_result_id)
            {
                return BadRequest();
            }

            db.Entry(test_Result).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Test_ResultExists(id))
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

        // POST: api/TestResults
        [ResponseType(typeof(Test_Result))]
        public async Task<IHttpActionResult> PostTest_Result(Test_Result test_Result)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Test_Results.Add(test_Result);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = test_Result.Test_result_id }, test_Result);
        }

        // DELETE: api/TestResults/5
        [ResponseType(typeof(Test_Result))]
        public async Task<IHttpActionResult> DeleteTest_Result(int id)
        {
            Test_Result test_Result = await db.Test_Results.FindAsync(id);
            if (test_Result == null)
            {
                return NotFound();
            }

            db.Test_Results.Remove(test_Result);
            await db.SaveChangesAsync();

            return Ok(test_Result);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Test_ResultExists(int id)
        {
            return db.Test_Results.Count(e => e.Test_result_id == id) > 0;
        }
    }
}
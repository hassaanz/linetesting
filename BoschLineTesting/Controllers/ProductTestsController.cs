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
    public class ProductTestsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/ProductTest
        public IQueryable<Product_Test> GetProduct_Test()
        {
            return db.Product_Tests;
        }

        // GET: api/ProductTest/5
        [ResponseType(typeof(Product_Test))]
        public async Task<IHttpActionResult> GetProduct_Test(int id)
        {
            Product_Test product_Test = await db.Product_Tests.FindAsync(id);
            if (product_Test == null)
            {
                return NotFound();
            }

            return Ok(product_Test);
        }

        // PUT: api/ProductTest/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutProduct_Test(int id, Product_Test product_Test)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != product_Test.prod_test_id)
            {
                return BadRequest();
            }

            db.Entry(product_Test).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Product_TestExists(id))
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

        // POST: api/ProductTest
        [ResponseType(typeof(Product_Test))]
        public async Task<IHttpActionResult> PostProduct_Test(Product_Test product_Test)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Product_Tests.Add(product_Test);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = product_Test.prod_test_id }, product_Test);
        }

        // DELETE: api/ProductTest/5
        [ResponseType(typeof(Product_Test))]
        public async Task<IHttpActionResult> DeleteProduct_Test(int id)
        {
            Product_Test product_Test = await db.Product_Tests.FindAsync(id);
            if (product_Test == null)
            {
                return NotFound();
            }

            db.Product_Tests.Remove(product_Test);
            await db.SaveChangesAsync();

            return Ok(product_Test);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Product_TestExists(int id)
        {
            return db.Product_Tests.Count(e => e.prod_test_id == id) > 0;
        }
    }
}
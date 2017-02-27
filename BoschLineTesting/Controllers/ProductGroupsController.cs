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
    public class ProductGroupsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/ProductGroup
        public IQueryable<Product_Group> GetProduct_Group()
        {
            return db.Product_Groups;
        }

        // GET: api/ProductGroup/5
        [ResponseType(typeof(Product_Group))]
        public async Task<IHttpActionResult> GetProduct_Group(int id)
        {
            Product_Group product_Group = await db.Product_Groups.FindAsync(id);
            if (product_Group == null)
            {
                return NotFound();
            }

            return Ok(product_Group);
        }

        // PUT: api/ProductGroup/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutProduct_Group(int id, Product_Group product_Group)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != product_Group.Group_id)
            {
                return BadRequest();
            }

            db.Entry(product_Group).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Product_GroupExists(id))
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

        // POST: api/ProductGroup
        [ResponseType(typeof(Product_Group))]
        public async Task<IHttpActionResult> PostProduct_Group(Product_Group product_Group)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Product_Groups.Add(product_Group);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = product_Group.Group_id }, product_Group);
        }

        // DELETE: api/ProductGroup/5
        [ResponseType(typeof(Product_Group))]
        public async Task<IHttpActionResult> DeleteProduct_Group(int id)
        {
            Product_Group product_Group = await db.Product_Groups.FindAsync(id);
            if (product_Group == null)
            {
                return NotFound();
            }

            db.Product_Groups.Remove(product_Group);
            await db.SaveChangesAsync();

            return Ok(product_Group);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Product_GroupExists(int id)
        {
            return db.Product_Groups.Count(e => e.Group_id == id) > 0;
        }
    }
}
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
    public class ProductionLinesController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/ProductionLines
        public IQueryable<ProductionLine> GetProductionLines()
        {
            return db.ProductionLines;
        }

        // GET: api/ProductionLines/5
        [ResponseType(typeof(ProductionLine))]
        public async Task<IHttpActionResult> GetProductionLine(int id)
        {
            ProductionLine productionLine = await db.ProductionLines.FindAsync(id);
            if (productionLine == null)
            {
                return NotFound();
            }

            return Ok(productionLine);
        }

        // PUT: api/ProductionLines/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutProductionLine(int id, ProductionLine productionLine)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != productionLine.prod_line_id)
            {
                return BadRequest();
            }

            db.Entry(productionLine).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductionLineExists(id))
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

        // POST: api/ProductionLines
        [ResponseType(typeof(ProductionLine))]
        public async Task<IHttpActionResult> PostProductionLine(ProductionLine productionLine)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ProductionLines.Add(productionLine);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = productionLine.prod_line_id }, productionLine);
        }

        // DELETE: api/ProductionLines/5
        [ResponseType(typeof(ProductionLine))]
        public async Task<IHttpActionResult> DeleteProductionLine(int id)
        {
            ProductionLine productionLine = await db.ProductionLines.FindAsync(id);
            if (productionLine == null)
            {
                return NotFound();
            }

            db.ProductionLines.Remove(productionLine);
            await db.SaveChangesAsync();

            return Ok(productionLine);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ProductionLineExists(int id)
        {
            return db.ProductionLines.Count(e => e.prod_line_id == id) > 0;
        }
    }
}
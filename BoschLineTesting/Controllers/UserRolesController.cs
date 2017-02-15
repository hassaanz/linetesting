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

namespace BoschLineTesting.Controllers
{
    public class UserRolesController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/UserRoles
        public IQueryable<User_Role> GetUser_Roles()
        {
            return db.User_Roles;
        }

        // GET: api/UserRoles/5
        [ResponseType(typeof(User_Role))]
        public async Task<IHttpActionResult> GetUser_Role(int id)
        {
            User_Role user_Role = await db.User_Roles.FindAsync(id);
            if (user_Role == null)
            {
                return NotFound();
            }

            return Ok(user_Role);
        }

        // PUT: api/UserRoles/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutUser_Role(int id, User_Role user_Role)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != user_Role.user_roles_id)
            {
                return BadRequest();
            }

            db.Entry(user_Role).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!User_RoleExists(id))
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

        // POST: api/UserRoles
        [ResponseType(typeof(User_Role))]
        public async Task<IHttpActionResult> PostUser_Role(User_Role user_Role)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.User_Roles.Add(user_Role);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = user_Role.user_roles_id }, user_Role);
        }

        // DELETE: api/UserRoles/5
        [ResponseType(typeof(User_Role))]
        public async Task<IHttpActionResult> DeleteUser_Role(int id)
        {
            User_Role user_Role = await db.User_Roles.FindAsync(id);
            if (user_Role == null)
            {
                return NotFound();
            }

            db.User_Roles.Remove(user_Role);
            await db.SaveChangesAsync();

            return Ok(user_Role);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool User_RoleExists(int id)
        {
            return db.User_Roles.Count(e => e.user_roles_id == id) > 0;
        }
    }
}
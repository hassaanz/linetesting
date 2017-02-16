using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;

namespace BoschLineTesting.Models
{
    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit http://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    public class ApplicationUser : IdentityUser
    {
        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager, string authenticationType)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, authenticationType);
            // Add custom user claims here
            return userIdentity;
        }
    }

    public class ApplicationDbContext : System.Data.Entity.DbContext
    {
        public ApplicationDbContext()
            : base("DefaultConnection")
        {
        }
        
        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }

        public System.Data.Entity.DbSet<BoschLineTesting.Models.Line> Lines { get; set; }

        public System.Data.Entity.DbSet<BoschLineTesting.Models.Changeover> Changeovers { get; set; }

        public System.Data.Entity.DbSet<BoschLineTesting.Models.Product> Products { get; set; }

        public System.Data.Entity.DbSet<BoschLineTesting.Models.Product_Group> Product_Groups { get; set; }

        public System.Data.Entity.DbSet<BoschLineTesting.Models.Product_Test> Product_Tests { get; set; }

        public System.Data.Entity.DbSet<BoschLineTesting.Models.Test> Tests { get; set; }

        public System.Data.Entity.DbSet<BoschLineTesting.Models.ProductionLine> ProductionLines { get; set; }

        public System.Data.Entity.DbSet<BoschLineTesting.Models.SAPInput> SAPInputs { get; set; }

        public System.Data.Entity.DbSet<BoschLineTesting.Models.Role> Roles { get; set; }

        public System.Data.Entity.DbSet<BoschLineTesting.Models.User> Users { get; set; }

        public System.Data.Entity.DbSet<BoschLineTesting.Models.UserRoles> UserRoles { get; set; }

        public System.Data.Entity.DbSet<BoschLineTesting.Models.Test_Result> Test_Results { get; set; }
    }
}
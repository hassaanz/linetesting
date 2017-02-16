using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BoschLineTesting.Models
{
    //[Table("User_roles")]
    public class UserRoles
    {
        [Key]
        [Column("user_roles_id")]
        public int user_roles_id { get; set; }
        [Column("user_id")]
        public int user_id { get; set; }
        [Column("role_id")]
        public int role_id { get; set; }

    }
}
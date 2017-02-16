using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BoschLineTesting.Models
{
    [Table("Users")]
    public class User
    {
        [Key]
        [Column("user_id")]
        public int user_id { get; set; }
        [Column("nt_username")]
        public string nt_username { get; set; }
        
        [Column("Created_By")]
        public int Created_By { get; set; }
        [Column("Created_On")]
        public DateTime Created_On { get; set; }
        [Column("Department")]
        public String Department { get; set; }
        [Column("Time_stamp")]
        public DateTime Time_Stamp { get; set; }
        [Column("line_id")]
        public int line_id { get; set; }

        [ForeignKey("user_roles_id")]
        public virtual ICollection<UserRoles> roles { get; set; }
        [ForeignKey("line_id")]
        public virtual Line line { get; set; }
    }
}
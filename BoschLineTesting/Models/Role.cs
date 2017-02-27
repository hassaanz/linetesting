using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BoschLineTesting.Models
{
    [Table("roles")]
    public class Role
    {
        [Key]
        [Column("role_id")]
        public int role_id { get; set; }
        [Column("role")]
        public string role { get; set; }
        [Column("description")]
        public string description { get; set; }
        // TODO Add Created_By and Created_On
    }
}
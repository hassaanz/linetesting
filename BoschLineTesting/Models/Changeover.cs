using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BoschLineTesting.Models
{
    [Table("Changeover")]
    public class Changeover
    {
        [Key]
        [Column("ins_met_key")]
        public string ins_met_key { get; set; }
        [Column("changeover")]
        public string changeover { get; set; }
        [Column("Created_By")]
        public int Created_By { get; set; }
        [Column("Created_On")]
        public DateTime Created_On { get; set; }
    }
}
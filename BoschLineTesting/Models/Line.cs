using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BoschLineTesting.Models
{
    [Table("Lines")]
    public class Line
    {
        [Key]
        [Column("line_id")]
        public int line_id { get; set; }
        [Column("line_name")]
        public string line_name { get; set; }
        [Column("Created_By")]
        public int Created_By { get; set; }
        [Column("Created_On")]
        public DateTime Created_On { get; set; }
    }
}
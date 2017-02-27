using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BoschLineTesting.Models
{
    [Table("Productionlines")]
    public class ProductionLine
    {
        [Key]
        [Column("prod_line-id")]
        public int prod_line_id { get; set; }
        [Column("line_id")]
        public int line_id { get; set; }
        [Column("product_number")]
        public int product_number { get; set; }
        [Column("From")]
        public DateTime From { get; set; }
        [Column("To")]
        public DateTime To { get; set; }
        public virtual Line Line { get; set; }
        // TODO Add Created_By and Created_On
    }
}
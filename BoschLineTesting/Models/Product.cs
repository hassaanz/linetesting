using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BoschLineTesting.Models
{
    [Table("Products")]
    public class Product
    {
        [Key]
        [Column("product_number")]
        public int product_number { get; set; }
        [Column("product_name")]
        public string product_name { get; set; }
        [Column("Created_By")]
        public int? Created_By { get; set; }
        [Column("Created_On")]
        public DateTime? Created_On { get; set; }
        [Column("Group_id")]
        public int? Group_id { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BoschLineTesting.Models
{
    [Table("Products_tests")]
    public class Product_Test
    {
        [Key]
        [Column("prod_test_id")]
        public int prod_test_id { get; set; }
        [Column("product_number")]
        public int product_number { get; set; }
        [Column("test_id")]
        public int test_id { get; set; }
        [Column("Oper_num")]
        public int Oper_num { get; set; }
        [Column("min")]
        public int min { get; set; }
        [Column("max")]
        public int max { get; set; }
        [Column("nominal")]
        public int nominal { get; set; }
        [Column("Min_c")]
        public int Min_c { get; set; }
        [Column("Max_c")]
        public int Max_c { get; set; }
        [Column("Unit_measure")]
        public string Unit_measure { get; set; }
        [Column("Created_By")]
        public int Created_By { get; set; }
        [Column("Created_On")]
        public DateTime Created_On { get; set; }
        [Column("Answer_bool")]
        public string Answer_bool { get; set; }
        [Column("ins_met_key")]
        public string ins_met_key { get; set; }
        [Column("Repititions")]
        public int Repititions { get; set; }

        public virtual Product Product { get; set; }
        public virtual Test Test { get; set; }
        public virtual Changeover Changeover { get; set; }
    }
}
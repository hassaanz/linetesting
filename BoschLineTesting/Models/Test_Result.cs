using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BoschLineTesting.Models
{
    [Table("Test_Results")]
    public class Test_Result
    {
        [Key]
        [Column("Test_result_id")]
        public int Test_result_id { get; set; }
        [Column("prod_test_id")]
        public int prod_test_id { get; set; }
        [Column("line_id")]
        public int line_id { get; set; }
        [Column("product_number")]
        public int product_number { get; set; }
        [Column("value_test")]
        public string value_test { get; set; }
        [Column("answer_bool")]
        public string answer_bool { get; set; }
        [Column("comments")]
        public string comments { get; set; }
        [Column("Created_On")]
        public DateTime Created_On { get; set; }
        [Column("Created_By")]
        public int Created_By { get; set; }
        [Column("Oper_num")]
        public int Oper_num { get; set; }

        [ForeignKey("prod_test_id")]
        public virtual Product_Test ProductTest { get; set; }
        [ForeignKey("line_id")]
        public virtual Line Line { get; set; }
        [ForeignKey("product_number")]
        public virtual Product Product { get; set; }
    }
}
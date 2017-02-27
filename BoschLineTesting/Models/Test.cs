using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BoschLineTesting.Models
{
    [Table("Tests")]
    public class Test
    {
        [Key]
        [Column("Test_id")]
        public int Test_id { get; set; }
        [Column("oper_num")]
        public string oper_num { get; set; }
        [Column("Main_desc")]
        public string main_desc { get; set; }
        [Column("Rec_desc")]
        public string Rec_desc { get; set; }
        [Column("ins_met")]
        public string ins_met { get; set; }
        [Column("prod_resc_desc")]
        public string prod_resc_desc { get; set; }
        [Column("resc_desc")]
        public string resc_desc { get; set; }
        [Column("version")]
        public string version { get; set; }
        [Column("valid_to")]
        public DateTime valid_to { get; set; }
        [Column("valid_from")]
        public DateTime valid_from { get; set; }
        [Column("Created_On")]
        public DateTime Created_On { get; set; }
        // TODO Add Created_By
        [Column("oper_shorttext")]
        public string oper_shorttext { get; set; }
        [Column("tool_number")]
        public string tool_number { get; set; }
        [Column("ins_met_key")]
        public string ins_met_key { get; set; }
    }
}
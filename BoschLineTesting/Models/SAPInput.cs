using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BoschLineTesting.Models
{
    [Table("SAPInputs")]
    public class SAPInput
    {
        [Key]
        [Column("SAP_id")]
        public int SAP_id { get; set; }
        [Column("Oper_num")]
        public string Oper_num { get; set; }
        [Column("Main_desc")]
        public string Main_desc { get; set; }
        [Column("Rec_desc")]
        public string Rec_desc { get; set; }
        [Column("ins_met")]
        public string ins_met { get; set; }
        [Column("prod_resc_desc")]
        public string prod_resc_desc { get; set; }
        [Column("version")]
        public string version { get; set; }
        [Column("Created_On")]
        public DateTime Created_On { get; set; }
        [Column("ins_met_key")]
        public string ins_met_key { get; set; }
        [Column("oper_shorttext")]
        public string oper_shorttext { get; set; }
        [Column("tool_number")]
        public string tool_number { get; set; }
    }
}
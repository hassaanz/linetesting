using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BoschLineTesting.Models
{
    [Table("Product_groups")]
    public class Product_Group
    {
        [Key]
        [Column("Group_id")]
        public int Group_id { get; set; }
        [Column("groupname")]
        public string groupname { get; set; }
        [Column("Created_By")]
        public int Created_By { get; set; }
        [Column("Created_On")]
        public DateTime Created_On { get; set; }
        public virtual ICollection<Product> Products { get; set; }
    }
}
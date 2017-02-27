namespace BoschLineTesting.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ngCtrls : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Tests", "oper_shorttext", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Tests", "oper_shorttext", c => c.DateTime(nullable: false));
        }
    }
}

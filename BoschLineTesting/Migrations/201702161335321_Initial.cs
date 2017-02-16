namespace BoschLineTesting.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            RenameTable(name: "dbo.User_roles", newName: "UserRoles");
            DropColumn("dbo.Users", "user_roles_id");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Users", "user_roles_id", c => c.Int(nullable: false));
            RenameTable(name: "dbo.UserRoles", newName: "User_roles");
        }
    }
}

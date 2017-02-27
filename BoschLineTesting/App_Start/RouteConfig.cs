using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.Http.Cors;

namespace BoschLineTesting
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional },
                constraints: new { controller = "Home" }
            );

            routes.MapRoute(
                name: "DefaultServe",
                url: "{*anything}",
                defaults: new { controller = "Home", action = "Index" }
            );

            // when the user types in a link handled by client side routing to the address bar 
            // or refreshes the page, that triggers the server routing. The server should pass 
            // that onto the client, so Angular can handle the route
            //routes.MapRoute(
            //    name: "Error",
            //    url: "{*url}",
            //    defaults: new { controller = "Home", action = "Index" }
            //);
        }
    }
}

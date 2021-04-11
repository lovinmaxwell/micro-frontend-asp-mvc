using System.Web;
using System.Web.Optimization;

namespace testapp
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));


            // Angular bundles
            bundles.Add(new ScriptBundle("~/bundles/Angular")
              .Include(
                "~/bundles/AngularOutput/inline.*",
                "~/bundles/AngularOutput/polyfills.*",
                "~/bundles/AngularOutput/scripts.*",
                "~/bundles/AngularOutput/vendor.*",
                "~/bundles/AngularOutput/runtime.*",
                "~/bundles/AngularOutput/main.*"));

            bundles.Add(new StyleBundle("~/Content/Angular")
              .Include("~/bundles/AngularOutput/styles.*"));


            // Angular2 bundles
            bundles.Add(new ScriptBundle("~/bundles/Angular2")
              .Include(
                "~/bundles/AngularOutput2/inline.*",
                "~/bundles/AngularOutput2/polyfills.*",
                "~/bundles/AngularOutput2/scripts.*",
                "~/bundles/AngularOutput2/vendor.*",
                "~/bundles/AngularOutput2/runtime.*",
                "~/bundles/AngularOutput2/main.*"));

            bundles.Add(new StyleBundle("~/Content/Angular2")
              .Include("~/bundles/AngularOutput2/styles.*"));

        }
    }
}

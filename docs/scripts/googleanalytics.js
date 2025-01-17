// Title: GA for code.kx.com search page
// Author: stephen@kx.com
// Usage: Custom search results. 
//        Main site pages have GA tracker script generated by MkDocs
// Version:  2019.08.15
window.ga = window.ga || function() {
  (ga.q = ga.q || []).push(arguments)
}
ga.l = +new Date
/* Setup integration and send page view */
ga("create", "UA-3462586-1", "auto")
ga("set", "anonymizeIp", true)
ga("send", "pageview")
/* Register handler to log search on blur */
document.addEventListener("DOMContentLoaded", () => {
  if (document.forms.search) {
    var query = document.forms.search.query
    query.addEventListener("blur", function() {
      if (this.value) {
        var path = document.location.pathname;
        ga("send", "pageview", path + "?q=" + this.value)
      }
    })
  }
})
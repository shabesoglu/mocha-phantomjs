// Generated by CoffeeScript 1.4.0
(function() {

  describe('<iframe>', function() {
    it('allow us to remove an iframe that is not finished downloading', function() {
      var iframe;
      iframe = document.createElement("iframe");
      iframe.src = "blank.html";
      return iframe.parentNode.removeChild(iframe);
    });
    return it.only('allow us to change the src of an iframe that is not finished downloading', function() {
      var iframe;
      iframe = document.createElement("iframe");
      iframe.src = "blank.html";
      return iframe.src = "about:blank";
    });
  });

}).call(this);

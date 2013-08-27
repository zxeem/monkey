// Generated by CoffeeScript 1.6.3

// ==UserScript==
// @name            Awingu Helper
// @version         2.8
// @description     Adds the info for creating a new customer
// @match           */marketplacefe/*
// @require         http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js
// @copyright       None
// ==/UserScript==
;
(function() {
  var counter, id, init;
  counter = function() {
    var count;
    count = parseInt(localStorage.getItem("awingu_count")) || 0;
    localStorage.setItem("awingu_count", ++count);
    return count;
  };
  init = function(selector, value, nocounter) {
    return $(document).on("hover", selector, function() {
      var elem;
      elem = $(this);
      if (!elem.val()) {
        if (!nocounter) {
          value = value.replace(/_\d+/, "_" + counter());
        }
        return elem.val(value);
      }
    });
  };
  id = "diaa";
  init("#details-machinename", id + "_0");
  init("#details-machinename0", id + "_0");
  init("#details-name", id + "_0");
  init("#general-email", id + "_0@test.com");
  init("#general-name", id + "_0");
  init("#general-password", "test", true);
  init("#general-passwordconfirm", "test", true);
  init("#password", "admin", true);
  init("#username", "admin@awingu.com", true);
  init("#details-path", "/awingu/samaa/import/samaa_ubuntu_exported_export_27-05-2013_15%3A39/", true);
  init("#details-host", "files.incubaid.com", true);
  init("#details-username", "iaas", true);
  return init("#details-password", "arakoon", true);
})();

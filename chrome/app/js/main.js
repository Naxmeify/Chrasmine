$(function(){
  reload();
});

var reload = function() {
  console.log("reload asd");
  chrome.runtime.requestUpdateCheck(function(status) {
    if (status == "update_available") {
      console.log("update pending...");
    } else if (status == "no_update") {
      console.log("no update found");
    } else if (status == "throttled") {
      console.log("Oops, I'm asking too frequently - I need to back off.");
    }
  });
  setTimeout(function(){
    reload();
  }, 5000);
};



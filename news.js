
(function newsHandler() {
  var read = document.querySelectorAll(".read");
  var info = document.querySelectorAll(".news-info");
  var close = document.querySelectorAll(".close-news");

  read.forEach(function(itm) {
    itm.addEventListener("click", function() {
      var news = itm.nextElementSibling;
      news.className = "news-show";
      news.lastElementChild.addEventListener("click", function() {
        news.classList.remove("news-show");
        news.className = "news-info";
      })
    })
    })


  })();

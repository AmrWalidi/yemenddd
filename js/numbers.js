let section = document.querySelector(".news");
        let started = false;

        window.onscroll = function () {
          if (window.scrollY >= section.offsetTop ) {
            if (!started) {
              $(document).ready(function () {
                $(".num").each(function () {
                  $(this)
                    .prop("Counter", 0)
                    .animate(
                      {
                        Counter: $(this).text(),
                      },
                      {
                        duration: 3000,
                        easing: "swing",
                        step: function (now) {
                          $(this).text(Math.ceil(now));
                        },
                      }
                    );
                });
              });
            }
            started = true;
          }
        };


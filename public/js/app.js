jQuery(function() {

    $(window).on('load', function (){

        $('#WindowPreloader').fadeOut('2000');
    });
        new fJs.Sticky({
            elt: '#static-header',
        });
        new fJs.Intersection({
            elt: '.fvSlideOn',
            class: "animate__animated animate__fadeInDown opacity-100",
            root: null,
            ratio: 0.2,
            rootMargin: '0px',
            threshold: 0.7,
        });

        new fJs.NumberAutoCount();
        new fJs.AutoWriteText({
            separator: '|',
            timeout: 300
        });
        function scrollProgressBar() {
            var getMax = function () {
              return $(document).height() - $(window).height();
            };
          
            var getValue = function () {
              return $(window).scrollTop();
            };
          
            var progressBar = $(".progress-bar"),
              max = getMax(),
              value,
              width;
          
            var getWidth = function () {
              // Calculate width in percentage
              value = getValue();
              width = (value / max) * 100;
              width = width + "%";
              return width;
            };
          
            var setWidth = function () {
              progressBar.css({ width: getWidth() });
            };
          
            $(document).on("scroll", setWidth);
            $(window).on("resize", function () {
              // Need to reset max
              max = getMax();
              setWidth();
            });
          }
          scrollProgressBar();
})

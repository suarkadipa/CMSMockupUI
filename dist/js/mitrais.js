$(function() {
    $(document).ready( function() {
            /** CSS setting **/
            var pageheight = Math.max($("#page-wrapper").height(), $(".panel-side-menu").height());
            $("#page-wrapper").height(pageheight);
            $(".panel-side-menu").height(pageheight);

            $('#page-wrapper').css('margin-left', function (index, curValue) {
                return parseInt(curValue, 10) + 26.5 + 'px';
            });

            $('#wrapper').css('height', function (index, curValue) {
                return parseInt(curValue, 10) + 30 + 'px';
            });

            $('body').css('height', function (index, curValue) {
                return parseInt(curValue, 10) + 30 + 'px';
            });
            /** end of CSS setting **/
    });
});
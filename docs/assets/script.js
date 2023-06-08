// Function that runs once the page loads to enable Materialize Elements to work
$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.materialboxed').materialbox();
    $('.parallax').parallax();
    $('.tabs').tabs();
    // Defines what days on the calander can be chosen
    $('.datepicker').datepicker({
        disableWeekends: true,
        yearRange: 1
    });
    $('.tooltipped').tooltip();
    $('.scrollspy').scrollSpy();

});
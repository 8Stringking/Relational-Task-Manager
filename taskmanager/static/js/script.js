document.addEventListener('DOMContentLoaded', function() {
    // sidenav initialization
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // datepicker initialisation
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker,{
        format: "dd mm, yyyy",
        i18n: {done: "select"}
    });

    // select initialisation
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
  });
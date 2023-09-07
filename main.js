$(document).ready(function() {
    console.log('admin menu callback triggered');
    console.log(window.location);
    // display admin menus
    if ($('#quicklinks li.item-admin').length > 0) {
        console.log('enabling quick links...');
        $('#quicklinks').attr('style', 'display: flex !important');
    }

    // display 'users' and 'reports' if navigation block says so
    if($('.block_navigation .type_course').length > 0) {
        console.log('enabling company admin menus');
        $('.mitem_users').attr('style', 'display: flex !important');
        $('.mitem_reports').attr('style', 'display: flex !important');
    }

    // convert uk-english to us-english
    console.log('converting to us-english...');
    $('.course-enrolbtn').each(function() {
        let text = $(this).text();
        if (text === 'Enrol now') {
            $(this).text('Enroll now');
        }
    });
});

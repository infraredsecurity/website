$(document).ready(function() {
    console.log('admin menu callback triggered');
    
    // display admin menus
    if ($('#quicklinks li.item-admin').length > 0) {
        console.log('enabling quick links...');
        $('#quicklinks').attr('style', 'display: flex !important');
    }

    // display 'users' and 'reports' if navigation block says so
    if($('#participants_tree_item').length > 0 || $('.block_settings').length > 0) {
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

    $('#page-enrol-index #region-main #page-content h2').each(function() {
        let text = $(this).text();
        if (text === 'Enrolment options') {
            $(this).text('Enrollment options');
        }
    });

    $('#page-enrol-index #region-main #page-content .collapsible span.sr-only').each(function() {
        let text = $(this).text();
        text = text.replace('enrolment', 'enrollment');
        $(this).text(text);
    });

    console.log('admin menu callback finished');
});

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
    let englishReplacements = {
        'enrol ': 'enroll ',
        'Enrol ': 'Enroll ',
        'enrolment': 'Enrollment',
        'Enrolment': 'Enrollment',
    };
    let englishCallback = function() {
        let text = $(this).text();
        for (const [key, value] of Object.entries(englishReplacements)) {
            text = text.replace(key, value);
        }
        $(this).text(text);
    };
    
    $('.course-enrolbtn').each(englishCallback);
    $('#page-enrol-index #region-main #page-content h2').each(englishCallback);
    $('#page-enrol-index #region-main #page-content .collapsible span.sr-only').each(englishCallback);
    $('#page-enrol-index #region-main #page-content .collapsible h3').each(englishCallback);

    console.log('admin menu callback finished');
});

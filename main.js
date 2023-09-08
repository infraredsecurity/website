$(document).ready(function() {
    console.log('hack callback triggered');

    // detect some roles
    let isGuest = $('#master-header .header-tools .tool-login i.fa-user').length <= 0;
    let isSuperAdmin = $('#quicklinks li.item-admin').length > 0;

    // dashboard 2023 redirect
    if ($('#page-my-index').length > 0) {
        if (!isSuperAdmin) {
            window.location = '/lms/mod/page/view.php?id=102';
        }
    }

    // adjust menus for guest
    if (isGuest) {
        // home button mimics main logo button
        let href = $('#master-header .main-logo a').attr('href');
        $('#main-navigation .mitem_home a.mb2mm-action').attr('href', href);
    }
    
    // display super admin stuff
    if (isSuperAdmin) {
        console.log('enabling super admin stuff...');
        $('#quicklinks').attr('style', 'display: flex !important');
        $('#page-my-index').css('display', 'initial');
        $('.block_iomad_reports').css('display', 'initial');
    }

    // display 'users' and 'reports' if navigation block says so
    if($('.block_iomad_reports').length > 0) {
        console.log('enabling company admin menus');
        $('.mitem_users').attr('style', 'display: flex !important');
        $('.mitem_reports').attr('style', 'display: flex !important');
    }

    // make 'Enroll now' do something meaningful if user is guest
    console.log('updating buttons');
    $('#page-enrol-index .enrol-sidebar .course-enrolbtn').on('click', function(e) {
        if (isGuest) {
            e.preventDefault();
            $('#page-enrol-index #region-main #page-content form button.btn-primary').click();
        }
    });

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

    console.log('hack callback finished');
});

$(document).ready(function() {
    // display admin menus
    if ($('#quicklinks li.item-admin').length > 0) {
        $('#quicklinks').css('display', 'flex');
    }

    // display 'users' and 'reports' menus if user has permission to create users
    fetch('/lms/blocks/iomad_company_admin/company_user_create_form.php', { method: 'GET' })
        .then((response) => {
            if (response.status == 200) {
                $('.mitem_users').css('display', 'flex !important');
                $('.mitem_reports').css('display', 'flex !important');
            }
            return null;
        })
        .catch((error) => {});

    // convert uk-english to us-english
    $('.course-enrolbtn').each(function() {
        let text = $(this).text();
        if (text === 'Enrol now') {
            $(this).text('Enroll now');
        }
    });
});

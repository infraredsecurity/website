$(document).ready(function() {
    // display admin menus
    if ($('#quicklinks li.item-admin').length > 0) {
        console.log('enabling quick links...');
        $('#quicklinks').attr('style', 'display: flex !important');
    }

    // display 'users' and 'reports' menus if user has permission to create users
    fetch('/lms/blocks/iomad_company_admin/company_user_create_form.php', { method: 'GET' })
        .then((response) => {
            if (response.status == 200) {
                console.log('enabling company admin menus');
                $('.mitem_users').attr('style', 'display: flex !important');
                $('.mitem_reports').attr('style', 'display: flex !important');
            }
            return null;
        })
        .catch((error) => {});

    // convert uk-english to us-english
    console.log('converting to us-english...');
    $('.course-enrolbtn').each(function() {
        let text = $(this).text();
        if (text === 'Enrol now') {
            $(this).text('Enroll now');
        }
    });
});

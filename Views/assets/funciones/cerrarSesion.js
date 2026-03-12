function CerrarSesion() {
    $.ajax({
        url: '/MN_JDR/Controllers/HomeController.php',
        method: 'POST',
        dataType: 'json',
        data: { btnCerrarSesion: true },
        success: function (response) {
            window.location.href = '/MN_JDR/Views/vHome/login.php';
        }
    });
};

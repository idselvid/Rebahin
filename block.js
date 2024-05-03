function removePopupAds() {
    var popups = document.getElementsByClassName('.pppppup, #pppppup, .popurl');
    for (var i = 0; i < popups.length; i++) {
        popups[i].parentNode.removeChild(popups[i]);
    }
}

// Panggil fungsi removePopupAds saat dokumen selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    removePopupAds();
});

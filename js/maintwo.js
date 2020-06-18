$(document).ready(function () {

    var VDV1 = document.querySelector('.history_VDV1');
    var VDV = document.querySelector('.history_VDV');
    var ctr = false;

    VDV.addEventListener('click', function () {
        VDV1.classList.toggle('active-VDV');
        ctr = !ctr;
        if(ctr < true){
            VDV.innerHTML = '<p class="p6">Открыть историю ВДВ</p>';
        } else {
            VDV.innerHTML='<p class="p6">Скрыть историю ВДВ</p>';
        }
    });

});
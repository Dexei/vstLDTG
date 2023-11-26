
function testing(){
    document.querySelector('.sidePANEL').classList.add('sidePANEL-view');
    document.querySelector('.side_con').classList.add('side_con-view');
}
function hidemenubar(){
    document.querySelector('.sidePANEL').classList.remove('sidePANEL-view');
    document.querySelector('.side_con').classList.remove('side_con-view');
}
function proceed(val){
        document.querySelector('.modal').classList.add('modal-proceed');
}

function loadVideo(e){
    var parent = this.parentNode;
    parent.style.paddingBottom = "76%";
    var dataSrc = parent.getAttribute('data-src');
    parent.innerHTML = '<iframe class="video" src="'+ dataSrc +'?rel=0&autoplay=1&wmode=transparent" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen wmode="Opaque"></iframe>';
}
var videoImage = document.querySelectorAll('.video-wrapper .video-image');
for(var i = 0; i < videoImage.length; i++){
    videoImage[i].addEventListener('click', loadVideo);
}
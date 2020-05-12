let items = document.querySelectorAll('.lyric_item');
items.forEach(item => {
    let lyric = '';
    item.addEventListener(item, function(){
       console.log('clicked');
       fetch('/lyrics/' + item.id)
           .then(res => res.text())
               .then(function (res) {
                   lyric = res.value;
                   console.log(lyric);
               });
       document.querySelector('.lyric h2').innerHTML = item.id;
       document.querySelector('.lyric div').innerHTML = lyric;

    });
});
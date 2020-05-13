let items = document.querySelectorAll('.lyric_item');
items.forEach(item => {
    item.addEventListener('click', function () {
        if (item.classList.contains('shown')){
            if (item.classList.contains('clicked')){
                item.classList.remove('clicked');
                $('.' + item.id).slideUp(500);
                return;
            } else {
                $('.' + item.id).slideDown(500);
                item.classList.add('clicked');
                return;
            }
        }
        let req = new XMLHttpRequest();
        req.open('GET', 'lyrics.json');
        req.onload = function () {
           // console.log(req.status);
            if (req.status >= 200 && req.status < 400){
                let lyrics = JSON.parse(req.responseText);
                let el = '';
                lyrics[0].parts.forEach(part => {
                    el += `<p>`;
                    part.forEach(line => {
                        el += line;
                        el += `<br>`
                    });
                    el += `</p>`;
                });
                let div = document.querySelector('.' + item.id);// $('.lyric .' + item.id);
                console.log(div);
                div.innerHTML = el;
                item.classList.add('clicked');
                item.classList.add('shown');
                item.insertAdjacentElement("beforeend", div);
            } else {
                console.log("Server returned error");
            }
        };
        req.onerror = function () {
            console.log('Connection error');
        };
        $('.' + item.id).slideDown(500);
        req.send();
    });
});

document.querySelector('#btn-theBalance').addEventListener('click', function () {
    alert('The Balance');
});

document.querySelector('#btn-theRide').addEventListener('click', function () {
    alert('The Ride');
});

document.querySelector('#btn-theBalcony').addEventListener('click', function () {
    alert('The Balcony');
});

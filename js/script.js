// - Creiamo il nostro array di oggetti che rappresentano ciascun post.Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data in formato americano, testo del post, immagine(non tutti i post devono avere una immagine), numero di likes.

// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es.Unsplash(https://unsplash.it/300/300?image=<id>)

//     - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
// 	- Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.
/**
 * 
 * @param {*} layout layout di stampa 
 * STAMPA UN LAYOUT IN UN CONTAINER PRESO DALL'HTML
 */
function printPost(layout) {
    //acquisisco container dove stampare dati
    const container = document.getElementById('container');
    // console.log(container);
    container.innerHTML += layout;
}
/**
 * 
 * @param {*} array array contente i post
 */
function createHTML (array) {
    for (let index = 0; index < array.length; index++) {
        const post = array[index];//singolo post
        const authorFirstLetters = post.author.split(' ');
        // console.log(authorFirstLetters);
        const layout = //layout post
        `
        <div class="post post">
            <div class="post__header">
            <div class="post-meta">
            <div class="post-meta__icon">
            <img class="profile-pic" src="${post['profile_image']}" alt="Phil Mangione">
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${post.author}</div>
                        <div class="post-meta__time">${post.time}</div>
                        </div>
                </div>
            </div>
            <div class="post__text">${post['text']}</div>
            <div class="post__image">
            <img src="${post.image}" alt="${authorFirstLetters[0][0]}${authorFirstLetters[1][0]}">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="${index}">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
                </a>
                </div>
                    <div class="likes__counter">
                    Piace a <b id="like-counter-${index}" class="js-likes-counter">${post['likes_counter']}</b> persone
                    </div>
                </div>
            </div>
        </div>
        `;
        printPost(layout);
    }
}
/**
 * cambia colore e incrementa/rimuove contatore like al click sul tag likes__cta
 */
function likes_counter_change () {
    //ottengo il bottone click per gestire il suo click
    const likes = document.querySelectorAll('.likes__cta');
    const labels = document.querySelectorAll('.like-button__label');
    // console.log(this.childNodes.style.color);
    const fa_thumbsUp = document.querySelectorAll('.like-button__icon.fas.fa-thumbs-up');
    for (let index = 0; index < likes.length; index++) {
        let clicked = false; //variabile che cambia in base ad ogni click
        const el = likes[index]; //bottone del post i-esimo
        const like_counter = document.getElementById(`like-counter-${index}`);
        el.addEventListener('click', function () {
            //acquisisco tag html
            //---fine acquisizione tag html
            if (!clicked) {
                clicked = true; 
                //modifica conteggio likes
                like_counter.innerHTML = parseInt(like_counter.innerHTML) + 1;
                allPost[index].likes_counter += 1;
                // modifica il colore della label 
                labels[index].style.color = 'blue';
                fa_thumbsUp[index].style.color = 'blue';
                // console.log(fa_thumbsUp[index]);
            } else { //click su click = annulla precedente mi piace
                clicked = false; 
                //modifica conteggio likes
                like_counter.innerHTML = parseInt(like_counter.innerHTML) - 1;
                allPost[index].likes_counter -= 1;
                // modifica il colore della label 
                labels[index].style.color = '#404040';
                fa_thumbsUp[index].style.color = '#404040';
            }
        })
    }
}
/**
 * Formatta le date in formato italiano(gg / mm / aaaa)
 */
function dateTransformUSAtoITA() {
    for (let index = 0; index < allPost.length; index++) {
        const USAdata = allPost[index];
        let arr = USAdata.time.split('-');
        // salva copia anno
        array_change_backup = arr[0];
        // scambia anno con mese
        arr[0] = arr[1];
        // scambia mese con anno
        arr[1] = array_change_backup;
        USAdata['time'] = `${arr[0]}/${arr[1]}/${arr[2]}`;
    }
}
/**
 * 
 * @param {*} post_array array contentente tutti i post 
 */
function init (post_array) {
    createHTML(post_array);
    likes_counter_change();
}
// --- TUTTI I MIEI POST
const allPost = [
    {
        author: 'Phil Mangiones',
        profile_image: 'https://unsplash.it/300/300?image=15',
        time: '12-10-2021',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut.Distinctio minima iusto.Ad ad maiores et sint voluptate recusandae architecto.Et nihil ullam aut alias.',
        // image: 'https://unsplash.it/600/300?image=171',
        likes_counter: 80
    },
    {
        author: 'Claudio Andriani',
        profile_image: 'https://unsplash.it/300/300?image=25',
        time: '12-9-2021',
        text: '',
        image: 'https://unsplash.it/600/300?image=529',
        likes_counter: 100
    },
    {
        author: 'Phil Mangiones',
        profile_image: 'https://unsplash.it/300/300?image=167',
        time: '12-8-2021',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut.Distinctio minima iusto.Ad ad maiores et sint voluptate recusandae architecto.Et nihil ullam aut alias.',
        image: 'https://unsplash.it/600/300?image=942',
        likes_counter: 73
    },
    {
        author: 'Phil Mangiones',
        profile_image: 'https://unsplash.it/300/300?image=496',
        time: '12-6-2021',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut.Distinctio minima iusto.Ad ad maiores et sint voluptate recusandae architecto.Et nihil ullam aut alias.',
        image: 'https://unsplash.it/600/300?image=111',
        likes_counter: 95
    }
];
// --- FINE TUTTI I MIEI POST
dateTransformUSAtoITA();
init(allPost); //stampa tutti i post presenti nell'array allPost
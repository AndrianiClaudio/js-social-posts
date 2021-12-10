// - Creiamo il nostro array di oggetti che rappresentano ciascun post.Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data in formato americano, testo del post, immagine(non tutti i post devono avere una immagine), numero di likes.

// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es.Unsplash(https://unsplash.it/300/300?image=<id>)

//     - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
// 	- Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.
function printPost(layout) {
    //acquisisco container dove stampare dati
    const container = document.getElementById('container');
    // console.log(container);
    container.innerHTML += layout;
}

// creo array
const allPost = [
    {
        author: 'Phil Mangiones',
        profile_image: 'https://unsplash.it/300/300?image=15',
        time: '12/10/2021',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut.Distinctio minima iusto.Ad ad maiores et sint voluptate recusandae architecto.Et nihil ullam aut alias.',
        image: 'https://unsplash.it/600/300?image=171',
        likes_counter: 80
    },
    {
        author: 'Claudio Andriani',
        profile_image: 'https://unsplash.it/300/300?image=25',
        time: '12/9/2021',
        text: '',
        image: 'https://unsplash.it/600/300?image=529',
        likes_counter: 100
    },
    {
        author: 'Phil Mangiones',
        profile_image: 'https://unsplash.it/300/300?image=167',
        time: '12/8/2021',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut.Distinctio minima iusto.Ad ad maiores et sint voluptate recusandae architecto.Et nihil ullam aut alias.',
        image: 'https://unsplash.it/600/300?image=942',
        likes_counter: 73
    },
    {
        author: 'Phil Mangiones',
        profile_image: 'https://unsplash.it/300/300?image=496',
        time: '12/6/2021',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut.Distinctio minima iusto.Ad ad maiores et sint voluptate recusandae architecto.Et nihil ullam aut alias.',
        image: 'https://unsplash.it/600/300?image=111',
        likes_counter: 95
    }
];

//STAMPA DI TUTTI I POST PRESENTI NEL MIO ARRAY
for (let index = 0; index < allPost.length; index++) {
    const post = allPost[index];//singolo post
    const layout = //layout post
    `
    <div class="post">
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
            <img src="${post.image}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${post['likes_counter']}</b> persone
                </div>
            </div>
        </div>
    </div>
    `;
    printPost(layout);
}

// tasto mi piace cliccabile con incremento counter likes
    // dobbiamo 'interagire' con il numero di like per poterlo incrementare
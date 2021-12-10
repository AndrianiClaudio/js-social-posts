// - Creiamo il nostro array di oggetti che rappresentano ciascun post.Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data in formato americano, testo del post, immagine(non tutti i post devono avere una immagine), numero di likes.

// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es.Unsplash(https://unsplash.it/300/300?image=<id>)

//     - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
// 	- Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.

// creo array
    // array contiene oggetti che rappresenano post
        // ogni post ha: nome autore, foto profilo, data in formato americano, testo del post, immagine(non tutti i post devono avere una immagine), numero di likes.
const allPost = [
    {
        author: 'Phil Mangiones',
        profile_image: 'https://unsplash.it/300/300?image=15',
        time: '4 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut.Distinctio minima iusto.Ad ad maiores et sint voluptate recusandae architecto.Et nihil ullam aut alias.',
        image: 'https://unsplash.it/600/300?image=171',
        likes_counter: 80
    }
];
// console.log(allPost);
//stampo seguendo layout di esempio 
const layout = 
`
<div class="post">
    <div class="post__header">
        <div class="post-meta">
            <div class="post-meta__icon">
                <img class="profile-pic" src="${allPost[0]['profile_image']}" alt="Phil Mangione">
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${allPost[0].author}</div>
                <div class="post-meta__time">${allPost[0].time}</div>
            </div>
        </div>
    </div>
    <div class="post__text">${allPost[0]['text']}</div>
    <div class="post__image">
        <img src="${allPost[0].image}" alt="">
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
                Piace a <b id="like-counter-1" class="js-likes-counter">${allPost[0]['likes_counter']}</b> persone
            </div>
        </div>
    </div>
</div>
`;
// console.log(allpost[0]);
//acquisisco container dove stampare dati
const container = document.getElementById('container');
// console.log(container);
container.innerHTML = layout;
// tasto mi piace cliccabile con incremento counter likes
    // dobbiamo 'interagire' con il numero di like per poterlo incrementare
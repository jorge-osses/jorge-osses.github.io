const url = "courses.json";
const container = document.querySelector('.courses');

fetch(url)
.then((response) => response.json() )
.then((data) => {
    console.log(data)
    data.reverse().forEach(element => {
        let div = document.createElement('div');
        div.className = 'responsive';
        div.innerHTML =`
            <div class="gallery">
            <div class="desc">
            <h4>${element.title}</h4>
            <p>
                ${element.place} <br>
                Expedición: ${element.date} <br>
                ID de la credencial: ${element.id}  <br>
                <a href="${element.link}" target="_blank">Ver credencial</a>
            </p>
            </div>
            </div>
        `;
        container.appendChild(div)
    });

})
.catch((error) => {
    console.log(error);
})

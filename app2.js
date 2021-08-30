const form = document.getElementById('form');
const ul = document.querySelector('ul');


const getTVShows = async(searchText) => {
    const apiKey = ("39b80372d332a70481350ffe138edb3c");

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${apiKey}`;

    const fetchedData = await axios.get(url);
    
    
    for (let item of fetchedData.data) {

        if (item) {
            const para = document.createElement('p');
            p.value = item.main;
            
            ul.append(para);
    
        }
    
    }
}



form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.dir(form.elements[0].value);
    const searchText = form.elements[0].value;

    getTVShows(searchText);

    form.elements[0].value = "";
   
})


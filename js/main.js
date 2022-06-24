const mode = document.getElementById('mode');
const body = document.body;

load();

mode.addEventListener('click', e => {
     body.classList.toggle('dark');
     store( body.classList.contains('dark'))
});

function load() {
    const darkmode = localStorage.getItem('dark');

    if(!darkmode) {
        store('false');
    } else if(darkmode == 'true') {
        body.classList.add('dark');
    }
}

function store(value) {
    localStorage.setItem('dark', value);
}
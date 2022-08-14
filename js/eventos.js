const URL = 'https://xp41-soundgarden-api.herokuapp.com/events'

async function listarEventos (){
    const response = await fetch(URL)
        const data = await response.json()


    const tabela = document.querySelector('.eventos')
    data.forEach((evento) =>{
        tabela.innerHTML += 
       
       `<article class="evento card p-5 m-3">
        <h2> ${evento.name} - </h2>
        <h2> ${evento.scheduled} </h2>
        <h4> ${evento.attractions} </h4>
        <p> ${evento.description} </p>
        <a href="#" id="reserva" class="btn btn-primary">reservar ingresso</a>
        </article>`
        
        
    } ) 

}
listarEventos()



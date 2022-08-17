const URL = 'https://xp41-soundgarden-api.herokuapp.com/events'
const modal = document.getElementById('container')
const inputID = document.getElementById('#id')
const inputNome = document.getElementById('modal-nome')
const inputEmail = document.getElementById('modal-email')
const inputTickets = document.getElementById('tickets')
const solicitarReserva = document.getElementById('modal-solicitar')
const btnX = document.querySelector('.fechar')



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
        <a id='reserva' class="btn btn-primary" onclick="modalOn('${evento._id}')">  reservar ingresso</a>
        </article>`          
    })    
}

listarEventos()


async function modalOn(id){
    modal.style.display = 'flex';
    inputID.value = id
    const res = await fetch(`${URL}/${id}`)
}

btnX.addEventListener('click', async () =>{
    modal.style.display = 'none'
})

solicitarReserva.addEventListener('click', async (event) =>{
   event.preventDefault()

   const evento = {
    owner_name: inputNome.value,
    owner_email: inputEmail.value,
    number_tickets: inputTickets.value,
    event_id: inputID.value
    }

    const res = await fetch('https://xp41-soundgarden-api.herokuapp.com/bookings',{method: 'POST',body:JSON.stringify(evento), headers: {'Content-Type': 'application/json'}})

})


const URL = 'https://xp41-soundgarden-api.herokuapp.com'
const modal = document.getElementById('container')
const inputId = document.querySelector('#inputId')
const inputNome = document.getElementById('modal-nome')
const inputEmail = document.getElementById('modal-email')
const inputTickets = document.getElementById('tickets')
const solicitarReserva = document.getElementById('modal-solicitar')
const btnX = document.querySelector('.fechar')



async function listarEventos (){
    const response = await fetch(`${URL}/events`)
        const data = await response.json()

    const tabela = document.querySelector('.eventos')
    data.forEach((evento) =>{
        tabela.innerHTML += 
       `<article class="evento card p-5 m-3">
        <h2> ${evento.name} - </h2>
        <h2> ${evento.scheduled} </h2>
        <h4> ${evento.attractions} </h4>
        <p> ${evento.description} </p>
        <a id=${evento._id} class="btn btn-primary" onclick="modalOn()" > reservar ingresso</a>
        </article>`            
    })    
}

listarEventos()

async function modalOn(){
    modal.style.display = 'flex'
    modal.setAttribute("evento_id", event.target.id)

}   

btnX.addEventListener('click', async () =>{
    modal.style.display = 'none'
})

solicitarReserva.addEventListener('click', async (event) =>{
   event.preventDefault()

   const reserva = {
    owner_name: inputNome.value,
    owner_email: inputEmail.value,
    number_tickets: inputTickets.value,
    event_id: modal.getAttribute("evento_id")
    }

    const res = await fetch(`${URL}/bookings`,{method: 'POST',body:JSON.stringify(reserva), headers: {'Content-Type': 'application/json'}})

    if (res.status == 201){
        alert('Reserva realizada com sucesso.')
    }
})


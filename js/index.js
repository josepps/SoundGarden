const URL = 'https://xp41-soundgarden-api.herokuapp.com'
const tabela = document.querySelector('#tabela')
const modal = document.querySelector('#container')
const btnX  = document.querySelector('.fechar')
const inputNome = document.querySelector('#modal-nome')
const inputEmail = document.querySelector('#modal-email')
const inputTickets = document.querySelector('#tickets')
const solicitarReserva = document.getElementById('modal-solicitar')


async function listarEventos (){
    const response = await fetch(`${URL}/events`)
        const data = await response.json()
            const show = data.slice(0,3)
        show.forEach(evento => {
        tabela.innerHTML +=
        `<article class="evento card p-5 m-3">
        <h2> ${evento.name} - </h2>
        <h2> ${evento.scheduled} </h2>
        <h4> ${evento.attractions} </h4>
        <p> ${evento.description} </p>
        <a id=${evento._id} class="btn btn-primary" onclick="modalOn()"> reservar ingresso</a>
        </article>`   
        });       
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

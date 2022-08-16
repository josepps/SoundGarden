const URL = 'https://xp41-soundgarden-api.herokuapp.com/events'
const modal = document.getElementById('container')

async function listarEventos (){
    const response = await fetch(URL)
        const data = await response.json()

    let tabela = document.querySelector('.eventos')
    data.forEach((evento) =>{
        tabela.innerHTML += 
       `<article class="evento card p-5 m-3">
        <h2> ${evento.name} - </h2>
        <h2> ${evento.scheduled} </h2>
        <h4> ${evento.attractions} </h4>
        <p> ${evento.description} </p>
        <a id='reserva' class="btn btn-primary">reservar ingresso</a>
        </article>`          
    } ) 

    function modalOn(){
        modal.style.display = 'flex'
    }
    
    let btn = document.querySelectorAll('#reserva')
        for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener('click', modalOn)
        }    

    
    function modalOff(){
        modal.style.display = 'none'
    }

    let btnX = document.querySelector('.fechar')
        btnX.addEventListener('click',modalOff)

}

listarEventos()






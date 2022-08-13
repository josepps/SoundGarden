const URL = 'https://xp41-soundgarden-api.herokuapp.com/events'

const inputNome = document.querySelector('#nome')
const inputPoster = document.querySelector('#poster')
const inputAtracoes = document.querySelector('#atracoes')
const inputDescricao = document.querySelector('#descricao')
const inputData = document.querySelector('#data')
const inputLotacao = document.querySelector('#lotacao')
const inputForm =  document.querySelector('form')
const edit = document.getElementsByClassName("btn btn-secondary")

const id = new URLSearchParams(window.location.search).get('id')



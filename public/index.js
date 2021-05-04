const body = document.body

const modalRewards = document.querySelectorAll('.modal .reward')
const modalContainerBack = document.querySelector('.modal--back-project')

const btnBack = document.querySelector('button.button--back')
const btnMenu = document.querySelector('button.button--menu')
const btnCloseBack = document.querySelectorAll('button.back-close-modal')

const btnContinue = document.querySelectorAll('button.button--continue')

btnBack.addEventListener('click', modalBack)

modalRewards.forEach(reward => {
  reward.addEventListener('click', rewardSelected)
})

btnCloseBack.forEach(button => {
  button.addEventListener('click', closeModal)
})

btnContinue.forEach(button => {
  button.addEventListener('click', donateFunction)
})

btnMenu.addEventListener('click', menuOpen)

function rewardSelected() {
  if (this.classList[1] === "reward--outstock") return

  modalRewards.forEach(reward => reward.classList.remove('reward--selected'))
  this.classList.add('reward--selected')
}

function modalBack() {
  body.classList.toggle('body--modal')
  modalContainerBack.classList.toggle('activated')
}

function menuOpen() {
  const modalMenu = document.querySelector('.modal--navbar')
  body.classList.add('body--modal')
  modalMenu.classList.toggle('activated')
}

function donateFunction() {
  const modalSupport = document.querySelector('.modal--support')

  modalContainerBack.classList.remove('activated')
  body.classList.remove('body--modal')

  modalSupport.classList.toggle('activated')
}

function closeModal() {
  const allModals = document.querySelectorAll('.modal')
  body.classList.remove('body--modal')

  allModals.forEach(modal => {
    modal.classList.remove('activated')
  })
}
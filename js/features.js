document.getElementById('show-btn').addEventListener('click', function(){
    document.getElementById('hidden-element').classList.remove('hidden')
    document.getElementById('add-money-btn').classList.add('hidden')
})

document.getElementById('show-add-money').addEventListener('click', function(){
    document.getElementById('add-money-btn').classList.remove('hidden')
    document.getElementById('hidden-element').classList.add('hidden')
})
function contar(){
  let ini = document.getElementById('txti')
  let fim = document.getElementById('txtf')
  let passo = document.getElementById('txtp')
  let res = document.getElementById('res')
  let erros = document.getElementById('erros')

  // test
  erros.innerHTML = '<h2></h2>'  //verificar se a dados

  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
      // alerta caso esteja sem dados
      erros.innerHTML = '<h2>VALORES INVALIDOS</h2>'
      window.alert('[ERRO] Verifique os dados!')
  } else {
     res.innerHTML = "Contando... <br>"
     // tranformando para numero
     let i = Number(ini.value)
     let f = Number(fim.value)
     let p = Number(passo.value)

     if(p <= 0){
        window.alert('Passo Invalido! Considerando PASSO 1')
        p = 1
     }

     if(i < f){
      for(let c = i; c <= f;c += p){
        res.innerHTML += `${c} \u{1F449}`
     }
     
     //contar do maior para o menor
     } else {
      for(let c = i; c>= f; c -= p){
        res.innerHTML += `${c} \u{1F449}`
      }
     }
     //bandeira no final
     res.innerHTML += `\u{1F3C1}`

  }
}
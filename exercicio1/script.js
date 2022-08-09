const num = +prompt('Coloque o numero a baixo')

// if(num %2 === 0){
//     if(num %3 == 0){
//     alert('esse número é divisivel por 2 e por 3')
//     console.log('esse número é divisivel por 2 e por 3')
// }else{ 
//     alert('esse número NÃO É divisivel por 2 e por 3')
//     console.log('esse número NÃO É divisivel por 2 e por 3')
// }}

if(num){
    console.log(num%2 === 0? 'O número é divisivel por 2' : '')
    if(num % 3 === 0) {
      console.log('O número é divisivel por 3')
    }
  }

// if(num % 2 === 0 || num % 3 === 0) {
//     console.log(num%2===0? 'Esse número é divisível por 2.':'Esse número é divisível por 3.')
//     console.log(num%3===0? 'Esse número é divisível por 3.':'')
//   }
    


//Loop
/*for(var i = 0; i <= 10;i++ ){
    console.log(i)
        
}
*/

let cores = ['azul' , 'rosa' , 'preto' , 'marrom']

cores.push('verde')
/*
for(let i = 0 ; i < cores.length ; i++){
    console.log(`A cor ${cores[i]} está na posição ${i}`)

}
*/
/*
for (let i in cores) {
    console.log(`A cor ${cores[i]} está na posição ${i}`)
}
*/
/*
for (let i = 0 ; i < cores.length ; i++){

    cores[i] = cores[i].toUpperCase()
    console.log(`A cor ${cores[i]} está na posição ${i}`)
}
*/


// Ordenando usando sort

/*
let carros = [
    {modelo: "toyota", ano: 2022},
    {modelo: "honda", ano: 2020},
    {modelo: "fiat", ano: 2021},
    {modelo: "honda2", ano: 2018},
    {modelo: "volvo", ano: 2015},
    {modelo: "bmw",ano: 2023},
]

console.log(carros.sort(
    function ordena(a,b){
        if(a.ano < b.ano){
            return 1
        } else if(a.ano > b.ano){
            return -1
        } else {
            return 0
        }
    }
)
)

console.log(carros.sort((a,b)=>{
    if(a.ano > b.ano){
        return 1
    } else if(a.ano < b.ano){
        return -1
    } else{
        return 0
    }
}))

*/

// Usando filter


let filtro = cores.filter((item) => {
    if(item.length >= 5){
        return true
    } else{
        return false
    }
})

console.log(filtro)

if(cores.includes("verde")){
     console.log(`tem verde`)
} else {
     console.log(`nao tem verde...`)
}

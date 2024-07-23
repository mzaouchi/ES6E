function Hello(){
    {
      var a = 5
      console.log(a)
    }
    console.log(a)
    return "Hello ES6"
  }
  
  console.log(Hello())


  function Hello() {
    {
      let b = 9
      console.log(b)
    }
    console.log(b)
    return "Hello ES6"
  }
  
  console.log(Hello())

  function Hello() {
    {
      const x = 5
      console.log(x)
    }
    console.log(x)
  
    return "Hello ES6"
  }
  
  console.log(Hello())

  const colors = ["Red","Blue","Brown"]

colors[0] = "Yellow"

console.log(colors)

colors.push("Green")

console.log(colors)

colors.pop()

console.log(colors)

colors.pop()
colors.pop()
colors.pop()

console.log(colors)

const user = {name : "Ala",age : 22,city :"PachiPacha"}
user.name = "Essia"
console.log(user)
user.track = "Fullstack"
console.log(user)
user = 5


var name = "Essia"
// console.log("Hello \n"+name)

console.log(`Hello ${name}`)

// var age = 50


// // if(age<18){
// //   console.log("Mineur")
// // }else if(age <60){
// //   console.log("Adulte")
// // }else{
// //   console.log("Vieux")
// // }
// var test = age < 18 ? "Mineur" : age < 60 ? "Adulte" : "Vieux"
// console.log(test)

var age  = 4

// if(age < 18){
//   console.log("Mineur")
// }
age < 18 && console.log('Mineur')


var user = {name : "Ala",age : 22, address : {town : "Laaouina",cp : 6666}}

// console.log(user.name)
// console.log(user.address.town)

var {name,age,address} = user
var {town} = address
console.log(name)
console.log(age)
console.log(town)

var t = [1,3,7,9]
var v = [5,9,6,3,8]
console.log([...t,...v])

console.log(Math.min(2,5,8))
console.log(Math.min(...t))
// console.log(t+v)
// console.log([t+v])
// console.log([t]+[v])

// var newT = []

// for(var i = 0; i <t.length; i++){
//   newT.push(t[i])
// }

// for(var i = 0;i<v.length;i++){
//   newT.push(v[i])
// }

// console.log(newT)






var t = [1,2,3,4]

console.log(t.reduce((accumulator,currentvalue)=>accumulator+currentvalue))

var essia = [2,3,6,8]

console.log(essia.map((el,i,t)=> el+1))
console.log(essia)


var essia = [2, 3, 6, 8]

essia.forEach((el, i, t) => t[i] = t[i]+1)


console.log(essia)

essia.forEach((el,i,t)=>console.log(el))

var essia = [2, 3, 6, 8]
var belhssane = [2, 'mahmoud',3,"a", 6, 8]

console.log(essia.filter((el,i,t)=>el>4))

console.log(belhssane.filter((el,i,t)=> typeof(el) == "number"))



console.log(essia.find((el,i,t)=> el == 30))
console.log(essia.findIndex((el,i,t)=> el == 9))

var essia = [2 , 6 ,3, 8, -1,0]

console.log(essia.sort((a,b)=>b-a))

var essia = [2 , 6 ,3, 8, -1,0]

console.log(essia.splice(3))

var str = "Bonjour la vie"

console.log(str.split(" "))

var essia = ["Belhsane","Boit","Boisson"]

console.log(essia.join("/"))

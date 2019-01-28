Patrones de diseño en node: Factory

Que difencia hay entre:

function Equilatero(sideA, sideB, sideC) {
  this.sideA = sideA,
  this.sideB = sideB,
  this.sideC = sideC,
}

Equilatero.prototype.getArea = function () {
  return this.sideA * this.sideB * this.sideC
}


const 

Ventaja que nos aporta este patron:

Se encarga de envolver la creasion de de las nuevas instancias dandonos mas fliexibilidad y control.

Nos permite separar la creacion del objeto de su implementacion

Quien va a utilizar a factory no tiene conocimiento alguno de como se lleva a cabo  las creasiones de las instancias

En lugar de usar new para crear las instancias delegamos, en este patron, esa responsabilidad

Nos permite ecalar mas facilmente

Nos provee de encapsulamiento, pudiendo declarar closures crear y devovler objetos en base a una condicion especifica 

En lo que a creasion de objetos se refiere, javasript es muy flexible, solo no solo disponemos del new, tenemos el Object.create y las funciones
pero que aporta cada caso ?

Al hablar de patrones de diseño generalmente lo primero que pensamos es en programación orientada a objetos, 
por lo tanto javascript(multiparadigma) no es en lo primero que pensamos.Pero veamos como aplicar los fundamentos de 
cada uno de los patrones nos resulta útil sobre todo en node, en esta caso el patrón es el Factory

Qué buscamos con este patrón ?

-Flexibilidad
Para ilustrar este ejemplo vamos a ver un detector de triangulos

function Triangle(sideA, sideB, sideC){
  if(sideA === sideB) && (sideA === sideC){
    return new Equilatero(sideA, sideB, sideC)
  } else if ()

}

class Equilatero {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA
    this.sideB = sideB
    this.sideC = sideC
  }
  getArea(){
    return this.sideA * this.sideB * this.sideC
  }
}

class Isoceles{

}

class Escaleno{

}

De esta manera no tenemos la responsabilidad de saber que tipo de triangulo es
const tri = Triangle(34, 45, 10) // el que sea
caso contrario tendriamos que haber instanciado el triangulo correspondiente teniendo que saber de antemano 

-Encapsulamiento
El encapsulamiento nos permite controlar el acceso a las propiedades del objeto de forma controlada (es uno de los patrones GRASP)
javascrip no provee modificadores de acceso (private, public, protected ) como si lo hacen lenguajes orientados a objetos, entonces como 
podemos emular este comportamiento ? rta: con el scope y el closures

function Equilatero (){
  const area = 4
  return {
    getArea: () => {
      return area
    }
  }
}

const foo = Equilatero()
console.log(foo.getArea()) // 4
console.log(foo.area) // undefined


Algo un poco mas util

function LoggerFactory () {
  const errors = []

  if (process.env.NODE_ENV === 'development') {
    return {
      print( message ){
        errors.push({
          path:__filename,
          time: Date(),
          message
        })
        console.log(`[${Date()}] ${__filename} LOG: ${message}`)
      },
      get (){
        return errors
      }
    }
  } else if(process.env.NODE_ENV === 'production'){
    return {
      print: () => {},
      get: () => {}
    }
  } else {
    throw new Error('Please set NODE_ENV !' )
  }
}

const foo = LoggerFactory()

foo.print("hola")
console.log(foo.get())

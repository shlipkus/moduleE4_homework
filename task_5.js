class Device{
	constructor(power){
		this.prop = 'property';
		this.plug = false
		this.power = power
	}


	plugIn(){
		this.plug = true
		console.log('Plug in')
	}

	unPlug(){
		this.plug = false
		console.log('Unplug')
	}

	conPower(){
		if(this.plug == false){
			console.log('Power consumption = 0 watts')
		}else{
			console.log(`Power consumption = ${this.power} watts`)
		}
	}
}	

class Lamp extends Device{ 
	constructor(name, power){
		super(power)
		this.name = name
		this.devtype = 'lighting device'
	}
}
class Kettle extends Device{
	constructor(name, volume, power){
		super(power)
		this.name = name
		this.devtype = 'heating device'
		this.volume = volume
	}
}


const lamp = new Lamp('Лампочка Ильича', 150)
const kettle = new Kettle('Самовар', 3, 1500)

console.log(lamp)
console.log(kettle)
kettle.conPower()

function Device(power){
	this.prop = 'property';
	this.plug = false
	this.power = power
}

Device.prototype.plugIn = function(){
	this.plug = true
	console.log('Plug in')
}

Device.prototype.unPlug = function(){
	this.plug = false
	console.log('Unplug')
}

Device.prototype.conPower = function(){
	if(this.plug == false){
		console.log('Power consumption = 0 watts')
	}else{
		console.log(`Power consumption = ${this.power} watts`)
	}
}	

function Lamp(name, power){
	this.name = name
	this.devtype = 'lighting device'
}
function Kettle(name, volume, power){
	this.name = name
	this.devtype = 'heating device'
	this.volume = volume
}

Lamp.prototype = new Device()
Kettle.prototype = new Device()

const lamp = new Lamp('Лампочка Ильича', 150)
const kettle = new Kettle('Самовар', 3, 1500)

console.log(lamp)
console.log(kettle)
kettle.conPower()

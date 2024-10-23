//Khai bao lop battery
let Battery = function () {
    this.setEnergy = function (energy) {
        this.energy = energy;
    }
    this.getEnergy = function () {
        return this.energy;
    }
    this.decreaseEnergy = function () {
        if(this.energy > 0) {
            this.energy--;
        }
    }
}

//Khai bao lop FlashLamp
let FlashLamp = function () {
    this.setBattery = function (battery) {
        this.battery = battery;
    }
    this.getBatteryInfo = function () {
        return this.battery.getEnergy();
    }
    this.light = function () {
        if(this.status) {
            alert('Lighting');
        }else {
            alert('Not lighting');
        }
    }
    this.turnOn = function () {
        this.status = true;
    }
    this.turnOff = function () {
        this.status = false;
    }
}

let battery = new Battery();
battery.setEnergy(10);

let flashLamp = new FlashLamp();
flashLamp.setBattery(battery);

document.write(`Battery info: ${flashLamp.getBatteryInfo()} <br>`);
flashLamp.light();

document.write('Turn on <br>');
flashLamp.turnOn();
flashLamp.light();
document.write(`Battery info: ${flashLamp.getBatteryInfo()} <br>`);

document.write('Turn off <br>');
flashLamp.turnOff();
flashLamp.light();
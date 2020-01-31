function ElectricLamp(status) {
    this.status = status;

    this.turnOn = function () {
        alert("Lighting");
        this.status = true;
    }

    this.turnOff = function () {
        alert("Turn off");
        this.status = false;
    }
}
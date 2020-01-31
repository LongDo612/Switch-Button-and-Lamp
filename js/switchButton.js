function SwitchButton(status) {
    this.status = status;

    this.switchOn = function (lamp) {
        this.status = true;
        lamp.turnOn();
    }

     this.switchOff = function (lamp) {
        this.status = false;
        lamp.turnOff();
     }
}
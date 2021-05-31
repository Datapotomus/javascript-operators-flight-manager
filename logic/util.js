function Util() {
    function calculateTotalDistributedPassengers(distributedPassengers) {

        let totalPassengers = 0;
        for (let value in distributedPassengers){
            totalPassengers += distributedPassengers[value];
        }
        return totalPassengers
    }
    function calculateTotalNumberOfPassengers(passengersArray) {

        let totalPassengers = 0;
        for (let key in passengersArray){
            totalPassengers += passengersArray[key];
        }
        return totalPassengers
    }
    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers}
}
module.exports = Util();


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
    function checkInput(input) {
        if (input === ""){
            throw new Error("The input should not be empty")
        } else if (typeof input !== 'number'){
            throw new Error("The input should be a number")
        } 
    }
    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput}
}
module.exports = Util();


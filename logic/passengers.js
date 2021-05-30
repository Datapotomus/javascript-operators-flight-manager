function Passengers() {

    function checkFlightCapacity(flightCapacity, passengerNums) {
        let totalPassengers = 0;
        for (let key in passengerNums){
            totalPassengers += passengerNums[key];
        }
        if (totalPassengers <= flightCapacity){
            return totalPassengers;
        }else if (totalPassengers > flightCapacity){
            throw new Error("The capacity of the flight is exceeded")
        }
    }
    function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers , numberOfFlights , businessSeatsPerFlight , economySeatsPerFlight) {
        let seatDistrobution = {
            vipPassengersWithBusinessSeats: 0,
            VIPpassengerswitheconomyseats: 0,
            regularpassengerswithbusinessseats: 0,
            regularpassengerswitheconomyseats: 0,
        } 
        
        let remainingVIPSeats = businessSeatsPerFlight;
        let remainingVIPPassengers = vipPassengers;
        let remainingEconomySeats = economySeatsPerFlight;
        let remainingRegularPassengers = regularPassengers;
    
        for (let index = remainingVIPSeats; index > 0; index--) {
            if (remainingVIPPassengers > 0){
                seatDistrobution.vipPassengersWithBusinessSeats++
                remainingVIPSeats--
                remainingVIPPassengers--
            } else{
                break
            }
        }
        for (let index = remainingVIPPassengers; index > 0; index--) {
            if (remainingEconomySeats > 0) {
                seatDistrobution.VIPpassengerswitheconomyseats++
                remainingVIPPassengers--
                remainingEconomySeats--
            } else {
                break
            }
    
        }
        for (let index = remainingVIPSeats; index > 0 ; index--) {
            if (remainingRegularPassengers > 0){
                seatDistrobution.regularpassengerswithbusinessseats++
                remainingVIPSeats--
                remainingRegularPassengers--
            } else{
                break
            }
            
        }
    
        for (let index = remainingEconomySeats; index > 0; index--) {
            if (remainingRegularPassengers > 0){
                seatDistrobution.regularpassengerswitheconomyseats++
                remainingEconomySeats--
                remainingRegularPassengers--
            } else{
                break
            }
            
        }
        return seatDistrobution;
    }

    return {checkFlightCapacity, distributeAllSeatsToAllPassengers};
}
module.exports = Passengers();

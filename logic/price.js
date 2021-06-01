function Prices() {
    function calculateFinalPrice(basePrice, passengerType, flightType) {
        let passengerPercentage = basePrice * (passengerType/100)
        let passengerVaritation = basePrice + passengerPercentage
        let calculatedPrice = passengerVaritation + (passengerVaritation * (flightType/100))
        return parseFloat(calculatedPrice).toFixed(2);
    }
    function calculateDefaultFinalPrice(basePrice, passengerType, flightType) {
        
    }
    return {calculateFinalPrice};
}

module.exports = Prices();
function Prices() {
    function calculateFinalPrice(basePrice, passengerType, flightType) {
        let passengerVaritation = basePrice + (basePrice * (passengerType/100))
        let finalPrice = passengerVaritation + (passengerVaritation * (flightType/100))
        return finalPrice.toFixed(2);
    }
    return {calculateFinalPrice};
}

module.exports = Prices();
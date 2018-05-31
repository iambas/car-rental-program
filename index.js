main()

function main() {
    for (number = 1; number <= 50; number++) {
        console.log(number)
        printRental(calculateCost(number))
    }
}

function calculateCost(numSeat) {
    let numSmall = Math.ceil(numSeat / 5)
    let numMedium = Math.ceil(numSeat / 10)
    let numLarge = Math.ceil(numSeat / 15)
    let rental = calCost(numSmall, numMedium, numLarge)

    for (smallIem = 0; smallIem <= numSmall; smallIem++) {
        for (mediumItem = 0; mediumItem <= numMedium; mediumItem++) {
            for (largeItem = 0; largeItem <= numLarge; largeItem++) {
                let sumItem = (5 * smallIem) + (10 * mediumItem) + (15 * largeItem)
                if (sumItem >= numSeat) {
                    let newRental = calCost(smallIem, mediumItem, largeItem)
                    rental = newRental.cost < rental.cost ? newRental : rental
                }
            }
        }
    }

    return rental
}

function printRental(rental) {
    let total = "Total = " + rental.cost + "$"
    let amount = ""
    if (rental.large > 0) amount += "L x " + rental.large + " "
    if (rental.medium > 0) amount += "M x " + rental.medium + " "
    if (rental.small > 0) amount += "L x " + rental.small + " "

    console.log(rental)
    console.log(amount)
    console.log(total)
    console.log()
}

function calCost(small, medium, large) {
    let cost = (5 * small) + (8 * medium) + (12 * large)
    return createRental(small, medium, large, cost)
}

function createRental(small, medium, large, cost) {
    return {
        small: small,
        medium: medium,
        large: large,
        cost: cost
    }
}
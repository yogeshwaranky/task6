let baseFee = .44
let cities = ["mdu", "py", "chn", ]
let uberRates = [450, 310, 515]

let customerName = "yogesh" 
let customerCity = "mdu" 

console.log("Hello", customerName+ ",  the Uber Rate is")

function getRate(customerCity) {
  
  function uberRate(customerCity, index) {
    
    let finalRate = (uberRates[index]) * baseFee
    return finalRate
  }
  
  console.log(customerCity, "rate is:", uberRate(customerCity, cities.indexOf(customerCity)))
}

getRate(customerCity)


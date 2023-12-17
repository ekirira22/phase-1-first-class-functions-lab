const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers){
    const firstTwoDrivers = drivers.slice(0,2)   
     return firstTwoDrivers    
}

const returnLastTwoDrivers = function(drivers){
    const lastTwoDrivers = drivers.slice(2)   
     return lastTwoDrivers    
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = val => () => val * val

const fareDoubler = val => val * 2 

const fareTripler = val => val * 3

const selectDifferentDrivers = function(arrayOfDrivers, cb){
   return cb(arrayOfDrivers)
}
selectDifferentDrivers(drivers, returnFirstTwoDrivers)


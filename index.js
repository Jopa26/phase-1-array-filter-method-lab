// Code your solution here

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


  function findMatching(drivers, carman) {
    return drivers.filter(function (driver) { 
        return driver.toLowerCase() === carman.toLowerCase() })
  }

  function fuzzyMatch(drivers,chofer) {
    return drivers.filter(function (driver) { 
      return driver.toLowerCase().substring(0, chofer.length) === chofer.toLowerCase() })
  }

  function matchName(drivers, argument) {
    return drivers.filter(function (driver) { 
      return driver.name === argument })
  }
const getAge = function(person) {
  // If yearOfDeath is undefined, use the current year
  const deathYear = person.yearOfDeath || new Date().getFullYear();
  return deathYear - person.yearOfBirth;
};


const findTheOldest = function(people) {

    const oldestPerson = people.reduce((currentOldest,nextPerson) => {

        const currentAge = getAge(currentOldest);
        const nextAge = getAge(nextPerson);

        if (nextAge > currentAge) {
            return nextPerson;
        } else {
            return currentOldest;
        }
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;

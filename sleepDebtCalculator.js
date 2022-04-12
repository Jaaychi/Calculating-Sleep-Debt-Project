const getSleepHours = day => {
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 8;
  } else if (day === 'wednesday') {
    return 8;
  } else if (day === 'thursday') {
    return 8;
  } else if (day === 'friday') {
    return 8;
  } else if (day === 'saturday') {
    return 8;
  } else if (day === 'sunday') {
    return 8;
  }
}

// console.log(getSleepHours('monday'))
// console.log(getSleepHours('tuesday'))

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') +getSleepHours('sunday');

// console.log(getActualSleepHours())

const getIdealSleepHours = () => {
  let idealHours = 9;
  return idealHours * 7;
}

// console.log(getIdealSleepHours())

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      return 'User has got perfect amount of sleep.';
    } else if (actualSleepHours > idealSleepHours) {
      return 'User got more sleep than needed. ' + 'User had ' + (actualSleepHours - idealSleepHours) +  ' more than needed this week.';
    } else if (actualSleepHours < idealSleepHours) {
      return 'User should get some rest. ' + 'User had ' + (idealSleepHours - actualSleepHours) + ' less hours of sleep this week.'
    }
}

console.log(calculateSleepDebt());

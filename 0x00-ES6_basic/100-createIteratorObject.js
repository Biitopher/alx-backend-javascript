export default function createIteratorObject(report) {
  let departments = Object.values(report);

  let employees = [];
  for (let department of departments) {
    employees = employees.concat(department);
  }

  let currentIndex = 0;

  return {
    next() {
      return currentIndex < employees.length ?
        { value: employees[currentIndex++], done: false } :
        { done: true };
    }
  };
}

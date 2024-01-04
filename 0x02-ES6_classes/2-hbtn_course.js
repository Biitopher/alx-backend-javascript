class HolbertonCourse {
  constructor(name, length, students) {
    this._name = typeof name === 'string' ? name : 'DefaultName';
    this._length = typeof length === 'number' ? length : 0;
    this._students = Array.isArray(students) ? students : [];
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new Error('Name should be a string.');
    }
  }

  set length(newLength) {
    if (typeof newLength === 'number') {
      this._length = newLength;
    } else {
      throw new Error('Length should be a number.');
    }
  }

  set students(newStudents) {
    if (Array.isArray(newStudents)) {
      this._students = newStudents;
    } else {
      throw new Error('Students should be an array of strings.');
    }
  }
}
export default HolbertonCourse;

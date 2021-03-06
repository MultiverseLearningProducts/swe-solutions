/** 
 * Represents a Person. 
 */
export default class Person {
    /**
     * Creates a Person.
     * 
     * @param {string} firstName - The first name of the person.
     * @param {string} lastName  - The last name of the person.
     * @param {string[]} parents - The parents of the person.
     */
    constructor(firstName, lastName, parents) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.parents = parents;
    }

    /**
     * Returns the parents of the individual.
     * @returns {string} The parents of the individual.
     */
    childOf() {
        return this.parents.map(parent => parent.firstName).join(' & ') || "parents unknown"
    }
}

  
  


class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.xp = 0; // XP is always zero for new characters
    this.inventory = [10,1]; // Gold: inventory[0] and Keys: inventory[1]
  }
  // Attack a target
  attack(target) {
    if (this.health > 0) {
      const damage = this.strength;
      console.log(
        `${this.name} attacks ${target.name} and causes ${damage} damage points`
      );
      target.health -= damage;
      if (target.health > 0) {
        console.log(`${target.name} has ${target.health} health points left`);
      } else {
        target.health = 0;
        const bonusXP = 10;
        const goldWon = target.inventory[0];
        const keysWon = target.inventory[1];
        console.log(
          `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points
          and ${goldWon} gold and ${keysWon} keys`
        );
        this.xp += bonusXP;
        this.inventory[0] += goldWon;
        this.inventory[1] += keysWon;
      }
    } else {
      console.log(`${this.name} can't attack (they've been eliminated)`);
    }
  }
  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points, ${this
      .strength} as strength and ${this.xp} XP points and ${this.inventory[0]} gold 
      and ${this.inventory[1]} keys`;
  }
}
const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);
const monster = new Character("Spike", 40, 20);

monster.attack(aurora);
monster.attack(glacius);
aurora.attack(monster);
glacius.attack(monster);
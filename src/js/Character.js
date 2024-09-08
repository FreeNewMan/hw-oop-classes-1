class Character {
  constructor(name, type) {
    const types = ['Bowerman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon' ];
   
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя игрока должно быть длиной от 2 до 10 символов')
    } else {
      this.name = name;
    }
    if (!types.includes(type)) {
      throw new Error('Неизвестный персонаж')
    } else {
      this.type = type;
    }
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

}

export default Character;



export const actors = [
  {name: 'Bowerman', type: 'Bowerman', health: 100, level: 1, attack: 25, defence: 25}, 
  {name: 'Swordsman', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10}, 
  {name: 'Magician', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40}, 
  {name: 'Undead', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25}, 
  {name: 'Zombie', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10}, 
  {name: 'Daemon', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40},  
];

class Character {
  constructor(args) {
    if (args.name.length < 2 || args.name.length > 10) {
      throw new Error('Имя игрока должно быть длиной от 2 до 10 символов')
    }
    if (!actors.map(item => item.type).includes(args.type)) {
      throw new Error('Неизвестный персонаж')
    }
    this.name = args.name;
    this.type = args.type;
    this.health = args.health;
    this.level = args.level;
    this.attack = args.attack;
    this.defence = args.defence;
  }

}

export default Character;



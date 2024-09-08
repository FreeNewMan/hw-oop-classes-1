import Character from "../Character";

// const actors = [
//   {name: 'Bowerman', type: 'Bowerman', health: 100, level: 1, attack: 25, defence: 25}, 
//   {name: 'Swordsman', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10}, 
//   {name: 'Magician', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40}, 
//   {name: 'Undead', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25}, 
//   {name: 'Zombie', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10}, 
//   {name: 'Daemon', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40},  
// ];



describe('Проверка класса Character', () => { 
  test('Проверка длины имени наименьшее ', () => {
    expect(() => new Character('B','Bowerman')).toThrowError("Имя игрока должно быть длиной от 2 до 10 символов")
  });
  test('Проверка длины имени наибольшее ', () => {
    expect(() => new Character('BowermanBowerman','Bowerman')).toThrowError("Имя игрока должно быть длиной от 2 до 10 символов")
  });
  test('Проверка типа персонажа', () => {
    expect(() => new Character('Noname', 'Noname')).toThrowError("Неизвестный персонаж")
  });
}); 

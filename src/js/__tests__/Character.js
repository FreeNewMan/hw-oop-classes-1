import Character, {actors} from "../Character"

describe('Проверка класса Character', () => { 
  test('Проверка длины имени наименьшее ', () => {
    expect(() => new Character({name: 'B', type: 'Bowerman', health: 100, level: 1, attack: 25, defence: 25})).toThrowError("Имя игрока должно быть длиной от 2 до 10 символов")
  });
  test('Проверка длины имени наибольшее ', () => {
    expect(() => new Character({name: 'BowermanBowerman', type: 'Bowerman', health: 100, level: 1, attack: 25, defence: 25})).toThrowError("Имя игрока должно быть длиной от 2 до 10 символов")
  });
  test('Проверка типа персонажа', () => {
    expect(() => new Character({name: 'Noname', type: 'Noname', health: 100, level: 1, attack: 25, defence: 25})).toThrowError("Неизвестный персонаж")
  });
  test('Проверка создания ожидаемого персонажа', () => {
    expect(new Character({name: 'Magician', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40})).toEqual({name: 'Magician', type: 'Magician', level: 1, health: 100, attack: 10, defence: 40});
  });
  test.each(
    actors,
  )('Проверка создания персонажа %s', (actorItem) => {
    expect(new Character(actorItem)).toEqual(actorItem);
  });
}); 

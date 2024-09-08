import Character from "../Character";

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

import setUpAttacks from '../app';

const characters = [
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
];
const charactersEnd = [
  {name: 'маг', health: 97},
  {name: 'лучник', health: 77},
  {name: 'мечник', health: 7},
  ];
  const charactersEnd2 = [
    {name: 'маг', health: 96},
    {name: 'лучник', health: 77},
    {name: 'мечник', health: 7},
    ];
    const charactersEnd3 = [
      {name: 'маг', health: 94},
      {name: 'лучник', health: 72},
      {name: 'мечник', health: 4},
      ];
      const charactersEnd4 = [
        {name: 'маг', health: 84},
        {name: 'лучник', health: 62},
        ];      
test('should correct1', () => {
  const attacks = setUpAttacks(characters);
  const result = attacks[0](9,0);
  expect(result).toEqual(charactersEnd);
});
const characters2 = [
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
];
test('should correct2', () => {
  const attacks2 = setUpAttacks(characters2);
  const result = attacks2[0](10,0);
  expect(result).toEqual(charactersEnd2);
});

const characters3 = [
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
];

test('should correct3', () => {
  const attacks2 = setUpAttacks(characters3);
  const result = attacks2[1](20,1);
  expect(result).toEqual(charactersEnd3);
});

const characters4 = [
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
];

test('should correct4', () => {
  const attacks2 = setUpAttacks(characters4);
  const result = attacks2[1](50,1);
  console.log(result);
  expect(result).toEqual(charactersEnd4);
});
const expect = require('chai').expect;
const World = require('../src/world');
const WorldParser = require('../src/world_parser');

const screen = [
  "########################################",
  "# :O:::O    ::   :   OO : :: :+* :O:*:+#",
  "#OO :: :  :*::+ +:: ::  + O::+ O: +::  #",
  "#O+:: *::+::::: : :: :*::: O:O: +::::  #",
  "#:: :::::/ ::+OO O+::+:*+:: ::  :O+: :O#",
  "#::  :O :   O::O*::: / ::: :+O:  :::*:O#",
  "#: :OO:+:::O+O ::::O     :::::*O:++::  #",
  "#:: :*O:+*:*:+ :+ +OO*:*::O:::+ ::::::+#",
  "# ::  :::::::::+O: ::++: :: ::O:: +: :*#",
  "#  ::::+:::O:++*:: ::O :::+::: :O:+ :::#",
  "#::::O: :::O: **:O: :+:*:O:  :  +: ::*:#",
  "#::::+::+: +: :::::::   O:: * :+ :+*:O*#",
  "#+:: :+:+:::: :: O: + O+::O::::OO+OO :+#",
  "#+:: ::* :: +O: :O:::+: ::+  O:+::   O*#",
  "#O *O:O:: +::+:::++  : ::OA:*O: :: :O::#",
  "#:: ::* :: : :: : :+ :+::+O::::: *: : :#",
  "# : O:  : O::::+::+:::O*O+ ++O  ::::* O#",
  "#: :  :+::::::: O::O+:O: +:::: ::OO:O+:#",
  "# ::::: :+: O:O: ::O::O:::::+ O:  ::: :#",
  "#:/ ::+: O:O: O**: : :*: :: :+:*:**:++:#",
  "#:  +:+:: O: :++O::O O:: :::: : ::: :+:#",
  "########################################"
];

describe('WorldParser', () => {
  it('should return parsed from screen World', () => {
    const world = new World(40, 22);
    const parser = new WorldParser(world);

    expect(parser.parse(screen)).to.be.instanceof(World);
  });
});

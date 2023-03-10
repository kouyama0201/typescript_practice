// 文字列型
var title: string = 'Angular';
title = 'Angular!';

// 数値型
var n: number = 9;

// 真偽値型
var isOpen: boolean = true;

// 配列型
var keywords: (string | number)[] = ['name', 'email', 'body', 0];

// ダブル型
var payment: [number, string, number] = [1, 'apple', 0];

// オブジェクト型
var object: { [key: string]: string } = {
  name: 'Last First',
  id: 'test',
};
var post: object = [{ id: 12, content: 'lorem ipsum' }];

// 共用型(Union型)
var sample: string | number | boolean;
sample = 'tk';
sample = 100;
sample = true;

// enum型
enum KeyCode {
  Backspace = 8,
  Tab = 9,
  Enter = 13,
}

console.log(KeyCode.Backspace); // = 8

enum ErrorCode {
  OK = 200,
  BAD_RESPONSE = 400,
  UNAUTHORIZED = 401,
}

console.log(ErrorCode.OK);

enum Character {
  Bob, // 0
  Dad, // 1
  Mom, // 2
}

console.log(Character.Bob);

// any型 どの型も使える
var something: any = 'foo';
something = 100;
something = true;
something = { id: 1 };

// null, undefined型
var el: Element | null = document.querySelector('#app');
var foo: undefined = undefined;

// 型推論
var unknown = 'string';
unknown = 10;

// let
let hoo = 'hoo';
let date = new Date();

if (true) {
  let hoo = 'hoo';
}
console.log(hoo);

// {
//   let hoo1 = 'hoo1';
// }

for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);

for (let j = 0; j < 5; j++) {
  console.log(j);
}
// console.log(j); // 参照できない

var hoge = 'hoge';

function logHoge() {
  console.log(hoge); // undefined
  let hoge = 'new hoge!';
  console.log(hoge); // new hoge!
}

logHoge();

// 定数(一度入れたら変更ができないデータの箱のこと)
const currentYear: number = 2020;
currentYear = 2021;

const PI = Math.PI;

// テンプレート文字列 (Template Literals)
let template1 = `This is Template strings.`;
let name = 'tk';
let template2 = `
  Hello, TypeScript tutorial.
  Thank you. ${name}
`;
console.log(template2);

// スプレッド演算子
let categories = ['post', 'news', 'info'];
// ...categories

// 複製
let copyCat = [...categories]; // 'post', 'news', 'info'
console.log(copyCat);

// 連結
let pushCat = ['other', ...categories];
console.log(pushCat);

let unshiftCat = [...categories, 'other'];
console.log(unshiftCat);

// 途中に挿入
let insertCat = ['other', ...categories, 'Q&A'];
console.log(insertCat);

// 2つの配列をマージ
let mergeCat = [...categories, ...copyCat];
console.log(mergeCat);

// オブジェクト
let post = { id: 1, content: 'dummy', created: '2020-04-01' };

let copyObj = { ...post };
console.log(copyObj);

let pushObj = { ...post, updated: '2020-04-05' };
console.log(pushObj);

let mergeObj = { ...post, ...pushObj };
console.log(mergeObj);

let test = { ...categories };
console.log(test);

// 分割代入
let categories = ['post', 'news', 'info', 'other'];

// let a = categories[0];
// let b = categories[1];
// let [a, b, , d] = categories;
// let [a, b, ...rest] = categories;
// console.log(a, b, rest);

let [a = 10, b = 7] = [1];
console.log(a, b);

let post = { id: 1, content: 'dummy', created: '2020-04-01' };

const { id, content:body } = post;
console.log(id, body);

const { id, name } = user.accountInfo.data;
// user.accountInfo.data.id

function test({ a, b, c }) {

}

// 関数
function greet(name: string = 'tk'): void {
  console.log(`Hello world! ${name}`);
}
greet('Taro');

// 可変長引数
function sum(...values: number[]): number {
  return values.reduce(function(prev, current) {
    return prev + current;
  });
}
console.log(sum(1, 3, 5, 9));

// アロー関数
// () => {}

let add = (x1: number, x2: number): number => {
  return x1 + x2;
};
console.log(add(1, 3));

let hello = name => `Hello, ${name}!`;
;
console.log(hello('tk'));

let getValue = (): number => {
  return document.getElementById('app').getElementsByTagName('div').firstChild.getAttribute('value')
  .toFixed(2),
}

document.getElementById('button1')?.addEventListener('click', function() {
  console.log(this); // <button></button>
});

// this => window
document.getElementById('button1')?.addEventListener('click', () => {
  console.log(this); // Window
});

// クラス
class クラス名 {
  プロパティ = 'プロパティ1';

  constructor() {
    // 初期化関数
    this.プロパティ = 'プロパティ';
  }

  メソッド1() {
    console.log('テスト');
    this.プロパティ = 'プロパティ3';
  }
}
const インスタンス = new クラス名(); // インスタンス化
インスタンス.プロパティ = 'プロパティ2';
インスタンス.メソッド1();

class Animal {
  age: number = 10;
  private _legs = 1;

  constructor(public isCry: boolean) {
    this.age = 2;
  }

  cry(): void {
    if (this.isCry) {
      alert(`age: ${this.age}`);
    }
  }

  // アクセサメソッド(getter, setter)
  get legs() {
    return 4;
  }

  set legs(value: number) {
    if (value > 1) {
      this._legs = value;
    }
  }

  // get email() {
  //   return this.formGroup.get('email');
  // }
  // dog.email
}

let dog = new Animal(true);
dog.cry();
dog.legs = 4;
console.log(dog.legs);

// クラスの継承
class Dog extends Animal {
  constructor(public isCry: boolean) {
    super(isCry);
    this.age = 10;
  }

  cry(): void {
    if (this.isCry) {
      alert('Bow, wow'!);
    }
    console.log('dog is cry!');
    super.cry();
  }
}

// インターフェイス (Interface)
interface Animal {
  name: string;
  legs: number;
  isCry: boolean;
  cry(): void;
}

interface SuperAnimal extends Animal {
  canRun: boolean;
}

let Dog: Animal = {
  name: 'Maru',
  legs: 4,
  isCry: true,
  cry: function () {
    console.log('Bow wow!');
  }
}

class Dog implements Animal {
  name: string = 'Maru';
  legs: number = 4;
  isCry: boolean = true;
  canRun: boolean = true;
  cry(): void {
    if (this.isCry) {
      console.log('Bow, wow!');
    }
  }
}

let maru = new Dog();
maru.cry();

// ジェネリック (Genrics)
class NumberStore {
  data: number;
}

class StringStore {
  data: string;
}

// class AnyStore {
//   data: any;
// }

class Store<T> { // T(Type), U , V , T1 , T2 , T3
  data: T; // number
  getStore(): T {
    return this.data;
  }
}

let stringData = new Store<number>();
let booleanData = new Store<boolean>();

function hello<T>(keyword: T) {
  console.log(`Log: ${keyword}.`);
}
hello<string>('Hello, tk!');
hello<number>(10000);

class Component<T, U> {
  name: T;
  created: U;
}
let component = new Component<string, number>();
// component.created = '2020/04/01';

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
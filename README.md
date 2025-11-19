<h1>1.What are some differences between interfaces and types in TypeScript?</h1>
<p>ইন্টারফেস এবং টাইপ দেখতে একই ধরনের মনে হবে এবং উভয় object এর ধরন এবং বৈশিষ্ট্য বর্ননা করতে ব্যবহৃত হয় তবে এদের মধ্যে অনেক পার্থক্য আছে।
</p>

### interface
Interface একই নামে একাধিকবার টাইপ ডিক্লেয়ার করা যায় টাইপ স্ক্রিপ্ট নিজ থেকে এটি মারজ করে ফেলে।

```ts
interface User {
    name: string
}

interface User {
    age: number
}

```

<P>Type এভাবে করতে পারে না তবে টাইপ এর কিছু বৈশিষ্ট্য আছে  Interface করতে পারে না।
টাইপ union type, primitive type এবং tuple type তৈরী করতে পারে। </P> 

```ts

type phone= string| number      (union)
type name = string              (primitive)
type price = [number , number]  (tuple)

```
<p>
    Object oriented প্রোগ্রামিং এর ক্ষেত্রে  ইন্টারফেস কিছু Extra সুবিধা দেয় যেমন extends, implements যা type দিতে পারে না
</p>
###emaple:

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  roll: number;

  constructor(name: string, age: number, roll: number) {
    super(name, age); 
    this.roll = roll;
  }
}

class Teacher extends Person {
  subject: string;

  constructor(name: string, age: number, subject: string) {
    super(name, age); 
    this.subject = subject;
  }
}
```

সহজভাবে বলতে গেলে, Interface ব্যবহার করা হয় object এর shape  ডিফাইন করতে এবং ভবিষ্যতে এটি extend এর প্রয়োজন পড়ে।



<h1>3. Explain the difference between any, unknown, and never types in TypeScript.</h1>

Typescript আমাদের বিশেষ তিনটি type দিয়ে থাকে যা সাধারণত অন্য কোন programming language পাওয়া যায় না।
এগুলো হলো any, unknown এবং never. এই টাইপ গুলে আমরা অন্যান্য প্রোগামিং language যেমন, c,c++, java etc এগুলোতে দেখি না।এই টাইপ গুলে আমাদের অজানা কোন ডাটা থাকলে সেটিকে ডিফাইন করতে সাহায্য করে।

### any:

এটি typescript এর সকল টাইপ মেকিং বন্ধ করে দেয়। এটি সবথেকে ফ্লেক্সিবল। any দিয়ে টাইপ ডিক্লিয়ার করলে যেকোন ধরনের মান assign করা যায় বিনা error এ অপারেশন করা যায়। টাইপ সেইফটি একেবারে নেই। এটা যত সম্ভব এড়িয়ে চলা উচিত।

**example:**

```ts
const name:any = "Afnan sayed"
name = 124354
name = false  
data.anyMethod(); // কোনো error নেই যদিও runtime-এ error হতে পারে
```

### unknown:

Unknown হলো any এর নিরাপদ বিকল্প। এটি দিয়ে ডিক্লেয়ার করলে যে কোন মান assign করা যায় তবে ব্যবহার আগে type check করতে হবে। এতে করে অনেকটা টাইপ সেইফটি বজায় থাকে। বলতে পারি any এর থেকে নিরাপদ।

```ts
const name:unknown = "Afnan sayed"
name = 124354   // কোনো error নেই

if (typeof  name === "string") {
  console.log(name.toUpperCase()); // এখন ঠিক আছে
}

```

### never:

Never হলে এমন type যা দিয়ে type ডিক্লেয়ার করা হলে variable আর কোন মান assign করা যায় না। এটি এমন একটি টাইপ যা কখনো কোনো মান গ্রহণ করে না। এটি এমন কিছু represent করে যা কখনো ঘটবে না। 

এটি সাধারণত সেই সব function-এ ব্যবহৃত হয় যেগুলো কখনো normal execution-এ ফিরে আসে না ,বা যেগুলো সবসময় error throw করে। সাধারণত এটি এমন function এ ব্যবহৃত হয় যেটি কখনো সফলভাবে return করবে না। 

```ts

function throwError(message: string): never {
  throw new Error(message);
}

```







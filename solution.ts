type FormatValue = string | number | boolean;

const formatValue = (value: FormatValue): FormatValue => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value * 10;
  } else if (typeof value === 'boolean') {
    return !value;
  }

  return value;
};

type GetLength = string | any[];

const getLength = (value: GetLength): number => {
  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length;
  }
  return 0;
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type Items = {
  title: string;
  rating: number;
};

const ratingValidation = (items: Items[]): boolean => {
  return items.every(item => item.rating >= 1 && item.rating <= 5);
};

const filterByRating = (items: Items[]): Items[] => {
  const isRatingTrue = ratingValidation(items);
  if (!isRatingTrue) {
    console.log('Rating must me 1-5');
    return [];
  }
  const filteredItems = items.filter(item => item.rating > 4);
  return filteredItems;
};

type Users = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: Users[]): Users[] => {
  return users.filter(user => user.isActive);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
  const { title, author, publishedYear, isAvailable } = book;
  console.log(
    `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${
      isAvailable ? 'Yes' : 'No'
    }`
  );
};

const getUniqueValues = <T extends string | number>(
  arr1: T[],
  arr2: T[]
): T[] => {
  const newArray = [...arr1, ...arr2];

  const result: T[] = [];
  for (let i = 0; i < newArray.length; i++) {
    const currentValue = newArray[i];
    let isExist = false;

    for (let j = 0; j < result.length; j++) {
      if (currentValue === result[j]) {
        isExist = true;
        break;
      }
    }
    if (!isExist) {
      result.push(currentValue);
    }
  }
  return result;
};

interface Products {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const validateDiscount = (items: Products[]): boolean => {
  return items.every(
    item =>
      item.discount === undefined ||
      (item.discount >= 0 && item.discount <= 100)
  );
};

const calculateTotalPrice = (products: Products[]): number => {
  if (products.length === 0) {
    return 0;
  }
  if (!validateDiscount(products)) {
    console.log(
      'Valid parentage amount is 0-100, your have wrong percentage in your given products'
    );
    return 0;
  }
  const result = products.reduce(
    (acc, product) => {
      const { price, quantity, discount } = product;

      let withOutPercentagePrice = price * quantity;

      if (discount && discount > 0) {
        withOutPercentagePrice = withOutPercentagePrice * (1 - discount / 100);
      }

      const totalPrice = acc.total + withOutPercentagePrice;

      return { total: totalPrice };
    },
    { total: 0 }
  );
  return result?.total;
};

//? 문제 3 : 재고 정렬
//자판기 애플리케이션에서 재고가 많은 순서대로 상품을 정렬해야 합니다.
//어떤 배열 메서드를 사용해야 할까요?
interface Item{
    name:string;
    stock:number;
}
const items : Item[] = [
    {name:"콜라", stock:5},
    {name:"사이다", stock:0},
    {name:"물", stock:10},
    {name:"주스", stock:2}
];

//재고가 많은 순서대로 상품을 정렬하세요
const three = items.sort((a,b)=>{
    return b.stock-a.stock;
})
console.log(three)

//? 문제 4 : 특정상품
//자판기 애플리케이션에서 특정 이름의 상품을 찾아야 합니다. 어떤 배열 메서드를 사용해야 할까요?
//어떤 배열 메서드를 사용해야 할까요?

//이름이 "사이다"인 상품을 찾으세요.
const four = items.find((item)=>{
    return item.name === '사이다'; 
});
console.log(four)

//? 문제 5 : 모든 상품의 총 재고 계산
//자판기 애플리케이션에서 모든 상품의 총 재고를 계산해야 합니다.
//어떤 배열 메서드를 사용해야 할까요?

//모든 상품의 총 재고를 계산하세요.
const five = items.reduce((total,item)=>{
    return total + item.stock
},0);
console.log(five)

//? 문제 6 : 상품 이름 리스트 생성
//자판기 애플리케이션에서 모든 상품의 이름을 배열로 생성해야 합니다.
//어떤 배열 메서드를 사용해야 할까요?

//모든 상품의 이름을 배열로 생성하세요.
const six = items.map((item)=>{
    return item.name;
});
console.log(six)

//? 문제 7 : 특정 가격 이상의 상품 필터링
//자판기 애플리케이션에서 가격이 1000원 이상인 상품만을 필터링해야 합니다.
//어떤 배열 메서드를 사용해야 할까요?
interface Item2{
    name:string;
    price:number;
}
const items2 : Item2[] = [
    { name: "콜라", price: 1000 },
    { name: "사이다", price: 1200 },
    { name: "물", price: 800 },
    { name: "주스", price: 1500 },
];

//가격이 1000원 이상인 상품만 나열하도록 수정하세요
const seven = items2.filter((item)=>{
    return item.price>=1000;
});
console.log(seven)

//? 문제 8 : 상품 재고 유무 체크
//자판기 애플리케이션에서 재고가 하나라도 있는지 확인해야 합니다.
//어떤 배열 메서드를 사용해야 할까요?
const items8 : Item[] = [
    {name:"콜라", stock:5},
    {name:"사이다", stock:0},
    {name:"물", stock:10},
    {name:"주스", stock:0}
];

//재고가 하나라도 있는지 확인하세요.
const eight = items8.some((item)=>{
    return item.stock>=0;
});
console.log(eight)

//? 문제 9 : 모든 상품의 재고 확인
//자판기 애플리케이션에서 모든 상품의 재고가 있는지 확인해야 합니다.
//어떤 배열 메서드를 사용해야 할까요?
interface Item{
    name:string;
    stock:number;
}

//모든 상품의 재고가 있는지 확인하세요.
const nine = items.every((item)=>{
    return item.stock>0;
});
console.log(nine)

//? 문제 10 : 상품 이름과 가격으로 객체 생성
//자판기 애플리케이션에서 모든 상품의 이름과 가격을 키-값 쌍으로 가지는 객체를 생성해야 합니다.
//어떤 배열 메서드를 사용해야 할까요?
interface Item2{
    name:string;
    price:number;
}

//이름과 가격을 키-값 쌍으로 가지는 객체를 생성하세요
const ten = items2.reduce((obj,item)=>{
    obj[item.name]=item.price;
    return obj;
},{});
//객체 초기화를 시켜줘야한다.
console.log(ten)
//? 문제 1 : 재고가 없는 상품 필터링
//자판기 애플리케이션에서 각 상품의 재고를 관리하고 있습니다.
//재고가 없는 상품을 필터링하여 나열하지 않도록 하려면 어떤 배열 메서드를 사용해야 할까요?
interface Item{
    name:string;
    stock:number;
}
interface Item2{
    name:string;
    price:number;
}
const items : Item[] = [
    {name:"콜라", stock:5},
    {name:"사이다", stock:0},
    {name:"물", stock:10},
    {name: "주스", stock:0}
];

const one = items.filter((item)=>{
    return item.stock>0;
})
console.log(one)


//? 문제 2 : 상품 가격 리스트 생성
//자판기 애플리케이션에서 모든 상품의 이름과 가격을 배열로 생성해야 합니다.
//어떤 배열 메서드를 사용해야 할까요?
//상품의 이름과 가격을 배열로 생성
const items2 : Item2[] = [
    { name: "콜라", price: 1000 },
    { name: "사이다", price: 1200 },
    { name: "물", price: 800 },
    { name: "주스", price: 1500 },
];

//상품의 이름과 가격을 배열로 생성하세요
const two = items2.map((item)=>{
    return `${item.name} : ${item.price}원`
});
console.log(two);
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
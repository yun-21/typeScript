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
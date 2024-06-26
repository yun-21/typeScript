//? 문제 1 : 재고가 없는 상품 필터링
//자판기 애플리케이션에서 각 상품의 재고를 관리하고 있습니다.
//재고가 없는 상품을 필터링하여 나열하지 않도록 하려면 어떤 배열 메서드를 사용해야 할까요?
interface Item{
    name:string;
    stock:number;
}
const items : Item[] = [
    {name:"콜라", stock:5},
    {name:"사이다", stock:0},
    {name:"물", stock:10},
    {name: "주스", stock:0}
];

const availableitems = items.filter((item)=>{
    return item.stock>0;
})
console.log(availableitems)
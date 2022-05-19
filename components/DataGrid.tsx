import react from 'react';
interface Item{
    id:number
}
interface DataGrids<T >{
    items:T[];
}
export default function  DataGrid<T extends Item>({items}:DataGrids<T>){
    return<>

 {
    items.map((item)=><li key={item.id}>{JSON.stringify(item)}</li>)
}
    </>
}

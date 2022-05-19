import react from 'react';
import DataGrid from '../components/DataGrid';

const Test = () => {

    const user= [
        { id: 1, name: 'tarun', job: 'SDE1' },
        { id: 2, name: 'bhan', job: 'SDE2' },
        { id: 3, name: 'singh', job: 'SDE3' },
    ];
    const orders=[
        {id:1,items:12,quamt:120},
        {id:2,items:13,quamt:1220},
        {id:3,items:33,quamt:1210},


    ];
    return <>
        <h1>Hello Typescript</h1>
    <DataGrid items={user} />
    <br>
    </br>
    <DataGrid items={orders} />
    </>
}
export default Test;
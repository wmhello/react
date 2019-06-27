import React from 'react';
import ReactDOM from 'react-dom';

let me_params=[
    {
    name:"lis",
    age:21
    }
    ,
    {
        name:"zhangsan",
        age:23
    }
]

class Me extends React.Component
{

    render()
    {
        return <div>
            {this.props.users.map((item)=>{
               return  <h2>{item.name}_{item.age}</h2>
        })}

        </div>
    }
}


ReactDOM.render(
  <Me   users={me_params}/>,
    document.getElementById('root')
);

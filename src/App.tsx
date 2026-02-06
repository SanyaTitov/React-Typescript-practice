import React from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import {IUser} from './components/types/types'

const App = () => {
  const users: IUser[] = [
    {id: 1, name: 'Sanya', email: 'alexsandrvladimirovih2008@gmail.com', address: {city: 'Ekb', street: 'Saharova 69', zipcode: 'chestno-hz'}},
    {id: 2, name: 'Zheka', email: 'brownbich@gmail.com', address: {city: 'Tomsk', street: 'Lebedeva 38', zipcode: 'chestno-hz'}}
  ]
  return(
    <div>
      <Card onClick = {(num) => console.log('click', num)} variant = {CardVariant.primary} width='200px' height='200px'>
        <button>Кнопка</button>
      </Card>
        <UserList users = {users}/>
    </div>
  );
};

export default App;
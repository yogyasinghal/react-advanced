import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import List from './components/List';
import { useAppDispatch } from './store/store';
import { fetchPeople } from './store/features/people/peopleSlice';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPeople());
  });
  return (
    <div className="">
        <Add/>
        <List/>
        <hr/>
        <Cart/>
        <hr/>
        <ProductList/>
        
    </div>
  );
}

export default App;

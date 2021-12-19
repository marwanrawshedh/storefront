import React from 'react';
import { connect } from 'react-redux';
import  {cat} from './redux/action';
import  {dog} from './redux/action';
import Footer from './components/Footer';
import Button from '@mui/material/Button';
import Header from './components/Header';
import Product from './components/Products';
function App(props) {
  return (
    <div>
<Header/>
      
      <Button variant={props.cart.cat.active?"contained":"outlined"} onClick={props.cat}>
        cat
      </Button>
      <Button variant={props.cart.dog.active?"contained":"outlined"} onClick={props.dog}>
        dog
      </Button>
      <Product/>
      <Footer/>
    </div>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  cat: () => dispatch(cat()),
  dog: () => dispatch(dog()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
import { Routes } from '@angular/router';
import { CardlistComponent } from './cardlist/cardlist.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CartComponent } from './cart/cart.component';
import { CarddetailsComponent } from './carddetails/carddetails.component';


export const routes: Routes = [
    {
      path: '',
      component: CardlistComponent,
      title: 'Home',
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login',
    },
    {
      path: 'register',
      component: RegisterComponent,
      title: 'Register',
    },
    {
        path: 'carddetails/:id',
        component: CarddetailsComponent,
        title: 'Details',
    },
    {
        path: 'cart',
        component: CartComponent,
        title: 'Cart',
    },
    {
      path: '**',
      component: NotfoundComponent,
      title: 'Not Found',
    },
  ];


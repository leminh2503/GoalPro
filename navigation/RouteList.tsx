import { SignupScreen } from '../screens/SignupScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { SigninScreen } from '../screens/SigninScreen';
import { OtpScreen } from '../screens/OtpScreen';

export enum IconBottom {
  HOME = 'Home',
  CALENDAR = 'Calendar',
  CHART = 'Chart',
  THREEDOTS = 'Threedots',
}

const routes: any[] = [
  {
    component: HomeScreen,
    name: 'Home',
    title: 'Home',
    isAuth: false,
    isBottom: true,
    icon: IconBottom.HOME,
  },
  {
    component: OtpScreen,
    name: 'Otp',
    title: 'Otp',
    isAuth: false,
  },
  {
    component: SignupScreen,
    name: 'Signup',
    title: 'Signup',
    isAuth: false,
  },
  {
    component: SigninScreen,
    name: 'Signin',
    title: 'Signin',
    isAuth: false,
    isHeader: false,
  },
];

export default routes;

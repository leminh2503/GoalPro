import { SignupScreen } from '../screens/SignupScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { SigninScreen } from '../screens/SigninScreen';
import { OtpScreen } from '../screens/OtpScreen';
import { TrainingScreen } from '../screens/HomeScreen/Training';
import { TrainingDetailScreen } from '../screens/HomeScreen/TrainingDetail';
import { StrategyScreen } from '../screens/StrategyScreen';
import { LessonScreen } from '../screens/LessonScreen';
import { InfoScreen } from '../screens/InfoScreen';

export enum IconBottom {
  HOME = 'HOME',
  STRATEGY = 'STRATEGY',
  LESSON = 'LESSON',
  INFO = 'INFO',
}

const routes: any[] = [
  {
    component: TrainingDetailScreen,
    name: 'TrainingDetail',
    title: '',
    isHeader: false,
    isAuth: false,
    isBottom: false,
  },
  {
    component: TrainingScreen,
    name: 'Training',
    title: '',
    isHeader: false,
    isAuth: false,
    isBottom: false,
  },
  {
    component: HomeScreen,
    name: 'Home',
    title: 'Home',
    isAuth: false,
    isBottom: true,
    icon: IconBottom.HOME,
  },
  {
    component: StrategyScreen,
    name: 'Strategy',
    title: '',
    isAuth: false,
    isBottom: true,
    icon: IconBottom.STRATEGY,
  },
  {
    component: LessonScreen,
    name: 'Lesson',
    title: '',
    isAuth: false,
    isBottom: true,
    icon: IconBottom.LESSON,
  },
  {
    component: InfoScreen,
    name: 'Info',
    title: '',
    isAuth: false,
    isBottom: true,
    icon: IconBottom.INFO,
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

import Svg, { Path } from 'react-native-svg';

export const IconStrategy = ({ color = '#71717A' }: { color?: string }) => (
  <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
    <Path
      d="M22.875 12.6302C23.535 11.8802 23.005 10.7102 22.005 10.7102H18.915V3.5102C18.915 2.4502 17.595 1.9502 16.895 2.7502L9.32501 11.3502C8.66501 12.1002 9.195 13.2702 10.195 13.2702H13.285V20.4702C13.285 21.5302 14.605 22.0302 15.305 21.2302L19.935 15.9702"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.375 4H2.375"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.375 20H2.375"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.375 12H2.375"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

import Svg, { Path } from 'react-native-svg';

export const IconHome = ({ color = '#71717A' }: { color?: string }) => (
  <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
    <Path
      d="M3.66001 19.24C3.90001 20.66 5.26 21.81 6.7 21.81H17.9C19.33 21.81 20.7 20.65 20.94 19.24L22.27 11.28C22.43 10.3 21.93 8.99002 21.16 8.37002L14.23 2.83004C13.16 1.97004 11.43 1.97003 10.37 2.82003L3.44001 8.37002C2.66001 8.99002 2.16001 10.3 2.33001 11.28L3.01002 15.37"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.3 10.5C10.92 10.5 9.8 11.62 9.8 13C9.8 14.38 10.92 15.5 12.3 15.5C13.68 15.5 14.8 14.38 14.8 13"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

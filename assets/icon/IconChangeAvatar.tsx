import Svg, { Path, Rect } from 'react-native-svg';
import React from 'react';

export const IconChangeAvatar = ({
  color = '#71717A',
  width = 16,
  height = 16,
}: any) => (
  <Svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <Rect width="36" height="36" rx="18" fill="#3F3F46" />
    <Path
      d="M10.3085 23.2082C10.4085 24.9248 11.3335 26.3332 13.6335 26.3332H22.3668C24.6668 26.3332 25.5835 24.9248 25.6918 23.2082L26.1251 16.3248C26.2418 14.5248 24.8085 12.9998 23.0001 12.9998C22.4918 12.9998 22.0251 12.7082 21.7918 12.2582L21.1918 11.0498C20.8085 10.2915 19.8085 9.6665 18.9585 9.6665H17.0501C16.1918 9.6665 15.1918 10.2915 14.8085 11.0498L14.2085 12.2582C13.9751 12.7082 13.5085 12.9998 13.0001 12.9998C11.1918 12.9998 9.75845 14.5248 9.87512 16.3248L10.0918 19.7165"
      stroke="#71717A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.7501 14.6665H19.2501"
      stroke="#71717A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18.0001 23.0002C19.4918 23.0002 20.7085 21.7835 20.7085 20.2918C20.7085 18.8002 19.4918 17.5835 18.0001 17.5835C16.5085 17.5835 15.2918 18.8002 15.2918 20.2918C15.2918 21.7835 16.5085 23.0002 18.0001 23.0002Z"
      stroke="#71717A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

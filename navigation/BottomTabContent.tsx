import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
  useRoute,
  useTheme,
} from '@react-navigation/native';
import RouteList, { IconBottom } from './RouteList';
import { RootState } from '../lib/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { IconHome } from '../assets/icon/IconHome';
import { IconStrategy } from '../assets/icon/IconStrategy';
import { IconLesson } from '../assets/icon/IconLesson';
import { IconPeople } from '../assets/icon/IconPeople';

const BottomTabContent = React.memo(function BottomTabContent() {
  const navigation = useNavigation();
  const theme = useTheme().colors;
  const route = useRoute();
  const dispatch = useDispatch();
  const { token } = useSelector((state: RootState) => state.auth);
  const currentRoute = getFocusedRouteNameFromRoute(route) ?? 'Home';

  console.log(currentRoute);

  const getColor = (name: string, index: number): string => {
    if (currentRoute === undefined) {
      return index === 0 ? '#00CD38' : '';
    }

    if (name === currentRoute) {
      return '#00CD38';
    }

    return '#71717A';
  };

  return (
    <View style={[styles.main, { backgroundColor: theme.background }]}>
      {RouteList.map(
        ({ name, title, icon, isBottom }, index) =>
          isBottom && (
            <TouchableOpacity
              key={name}
              onPress={(): void => {
                navigation.navigate('BottomTab', {
                  screen: name,
                });
              }}
              // style={styles.itemContainer}
            >
              <View style={styles.itemContainer}>
                {icon === IconBottom.HOME && (
                  <IconHome color={getColor(name, index)} />
                )}
                {icon === IconBottom.STRATEGY && (
                  <IconStrategy color={getColor(name, index)} />
                )}
                {icon === IconBottom.LESSON && (
                  <IconLesson color={getColor(name, index)} />
                )}
                {icon === IconBottom.INFO && (
                  <IconPeople
                    width={24}
                    height={24}
                    color={getColor(name, index)}
                  />
                )}
              </View>
            </TouchableOpacity>
          )
      )}
    </View>
  );
});

export default BottomTabContent;

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    paddingVertical: 7,
  },
  main: {
    alignItems: 'center',
    bottom: 0,
    display: 'flex',
    elevation: 5,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-around',
    left: 0,
    position: 'absolute',
    right: 0,
  },
  btnCircleUp: {
    width: 82,
    height: 82,
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    // borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9F9F9',
    bottom: 30,
    borderTopWidth: 1,
    borderColor: '#F9F9F9',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.05,
    // shadowRadius: 2,
    // elevation: 1,
  },
});

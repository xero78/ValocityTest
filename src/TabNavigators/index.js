import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from './Tabs/Welcome';
import Categories from './Tabs/Categories';
const TabNavigators = () => {
    const Tab = createBottomTabNavigator();
  return (
<NavigationContainer>
<Tab.Navigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Welcome') {
                iconName = focused
                  ? require('../../assets/tabs/welcome.png')
                  : require('../../assets/tabs/welcome.png');
              } else if (route.name === 'Categories') {
                iconName = focused
                  ? require('../../assets/tabs/category.png')
                  : require('../../assets/tabs/category.png');
              }
              return (
                <Image
                  source={iconName}
                  style={{ width: size, height: size,  }}
                />
              );
            },
            tabBarLabel: ({ focused, color }) => (
                <Text
                  style={[
                    styles.tabLabel,
                    { color: focused ? '#A4C9FF' : '#000',  fontWeight:'500' },
                  ]}
                >
                  {route.name}
                </Text>
              ),
              tabBarStyle: {
                backgroundColor: '#ebeef7',   
              },
              headerShown: false,
          })}
>
      <Tab.Screen name="Welcome" component={Welcome} />
      <Tab.Screen name="Categories" component={Categories} />
    </Tab.Navigator>
</NavigationContainer>


  )
}

export default TabNavigators

const styles = StyleSheet.create({})
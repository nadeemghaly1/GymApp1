import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';



export default function Nav() {

    const styles = StyleSheet.create({
        logo: {
          width: 100,
          height: 100,
        },
      });
  
const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
      
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',overflow:'scroll' }}>
      <Text>Home!</Text>

    </View>
  );
}

function WorkoutScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Workout!</Text>
      </View>
    );
  }

function SettingsScreen() {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
  return (

      <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'Workout') {
                iconName = focused ? 'barbell-sharp':'barbell-sharp';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list' : 'ios-list';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Workout" component={WorkoutScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>



    
  );
}


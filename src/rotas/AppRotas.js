import { View, StyleSheet, StatusBar, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from 'react-native-vector-icons'
import CursoRotas from './CursoRotas';
import HomeRotas from './HomeRotas';
import PerfilRotas from './PerfilRotas';
import logoTipo from '../../assets/imagens/fatecflix.png'
import { CursosProvider } from '../context/Cursos';
import { PerfilProvider } from '../context/Perfil';
import Aula from '../telas/Aula';

//https://feathericons.com/

export default function AppRotas() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <CursosProvider>
      <PerfilProvider>
      <StatusBar backgroundColor="black" barStyle={'light-content'} translucent={true} />
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          headerShown: true,
          tabBarActiveTintColor: '#ff0534',
          tabBarInactiveTintColor: 'white',
          headerTitle: ()=>{
            if (route.name === 'Home') return <Header />
            if (route.name === 'Curso') return <Header />
            if (route.name === 'Perfil') return <Header />
            if (route.name === 'Aulas') return null
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarStyle: {
            backgroundColor: "black",
            borderTopWidth: 0,
          },
          headerStyle: {
            borderBottomWidth: 0,
            height: 100,
          },
          headerTransparent: true,
          tabBarIcon: ({ color }) => {
            if (route.name === 'Home') {
              return <Feather name="home" size={18} color={color} />
            } else if (route.name === 'Curso') {
              return <Feather name="play" size={18} color={color} />
            } else if (route.name === 'Aulas') {
              return <Feather name="monitor" size={18} color={color} />
            } else {
              return <Feather name="user" size={18} color={color} />
            }
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeRotas} />
        <Tab.Screen name="Curso" component={CursoRotas} />
        <Tab.Screen name="Aulas" component={Aula} />
        <Tab.Screen name="Perfil" component={PerfilRotas} />
      </Tab.Navigator>
      </PerfilProvider>
      </CursosProvider>
    </NavigationContainer>
  )
}


function Header() {
  return(
    <View>
      <Image source={logoTipo} style={styles.logoImagem} />
    </View>
  )
}

const styles = StyleSheet.create({
  logoImagem: {
    width: 210,
    height: 48,
    resizeMode: 'stretch',
    borderRadius: 12,
  }
})

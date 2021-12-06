import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const updateStorage = async (usersData: []) => {
  try {
    await AsyncStorage.setItem('users', JSON.stringify(usersData))
  }
  catch(e){
    console.log("Error updating async storage")
  }
}

const getStorage = async () => {
  try {
    const data = await AsyncStorage.getItem('users')
    return data != null ? JSON.parse(data) : null
  }
  catch(e){
    //If for some reason we are unable to retrieve data from local stoage we will return null.
    console.log("Error retriveing data from local storage")
    console.log(e)
    return null
  }
}

const fetchUsers = async () => {
  const userEndpoint = "https://reqres.in/api/users?page=1"
  try {
    const response = await fetch(userEndpoint)
    const {data} = await response.json()
    await updateStorage(data)
    return data
  }
  catch (e){
    console.log(e)
    console.log("Error fetching users ! ")
    console.log("We will try to use existing users data from localStoage")
    //since fetching from API failed we will use data from our localStoage
    return await getStorage()
  }
}

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [usersData, setUsersData] = React.useState(null);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
        });
        //Load data from API
        const loadedUsersData = await fetchUsers()
        setUsersData(loadedUsersData)
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return [isLoadingComplete, usersData];
}

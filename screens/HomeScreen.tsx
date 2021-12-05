import React, {useEffect,useState} from "react";
import { FlatList } from "react-native";
import { RootStackScreenProps } from "../types";
import { View } from "react-native";
import UserCard from "../components/UserCard";
import { Headline } from "react-native-paper";
import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async () => {
  try {
    const data = await AsyncStorage.getItem('users')
    return data != null ? JSON.parse(data) : null
  }
  catch(e){
    console.log("Error retriveing data from local storage")
    console.log(e)
  }
}

export default function HomeScreen({
}: RootStackScreenProps<"Home">) {
  const [users,setUsers] = useState(null)
  console.log(users)

  useEffect(async () => {
    const newUserData = await getData()
    setUsers(newUserData)
  }, [])

  const generateCard = ({item}) => (<UserCard id={item.id} name={item.first_name}/>)

  return (
    <View style={{margin: 7}}>
      <Headline>AVAILABLE USERS</Headline>
      <FlatList data={users} renderItem={generateCard} keyExtractor={item => item.id}/>
    </View>
  );
}

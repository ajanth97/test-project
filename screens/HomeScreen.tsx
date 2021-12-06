import React, { useContext, useState } from "react";
import { FlatList } from "react-native";
import { RootStackScreenProps } from "../types";
import { View } from "react-native";
import UserCard from "../components/UserCard";
import { Headline, TextInput } from "react-native-paper";
import { usersContext } from "../contexts/UsersContext";
import StyledButton from "../components/StyledButton";
import { useNavigation } from "@react-navigation/core";


export default function HomeScreen({
}: RootStackScreenProps<"Home">) {
  const users = useContext(usersContext)
  const [searchValue, setSearchValue] = useState("")
  const navigation = useNavigation()

  const onChangeSearch = (searchText) => {
    setSearchValue(searchText)
  }

  const onSearchSubmit = () => {
    const key =  searchValue - 1
    const user = users[key]
    if (user !== undefined){
      const {id} = user
      const {first_name} = user
      navigation.navigate("UserDetail", {userId: id, name: first_name})
    }
  }

  const generateCard = ({item}) => (<UserCard id={item.id} name={item.first_name}/>)

  return (
    <View style={{margin: 7, flex: 1}}>
      <View style={{padding: 10}} >
       <TextInput onChangeText={onChangeSearch} value={searchValue} mode="outlined"label="Search by User ID" placeholder="User ID" keyboardType="numeric"/>
       <StyledButton onPress={onSearchSubmit}>Search</StyledButton>
      </View>
      <Headline>AVAILABLE USERS</Headline>
      <FlatList data={users} renderItem={generateCard} keyExtractor={item => item.id} />
    </View>
  );
}

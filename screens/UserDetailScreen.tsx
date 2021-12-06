import React, {useContext} from "react";
import { RootStackScreenProps } from "../types";
import { View  } from "react-native";
import UserDetailCard from "../components/UserDetailCard";
import { Headline } from "react-native-paper";
import { usersContext } from "../contexts/UsersContext";
import { useNavigation } from "@react-navigation/core";
import StyledButton from "../components/StyledButton";

export default function UserDetailScreen({
  route,
}: RootStackScreenProps<"UserDetail">) {
  const users = useContext(usersContext)
  const navigation = useNavigation()
  const {userId} = route.params
  const {name} = route.params
  const user = users[userId - 1]
  const {last_name} = user
  const {email} = user
  const {avatar} = user
  

  return (
    <View style={{margin: 7}}>
      <Headline>USER PROFILE</Headline>
      <UserDetailCard  firstName={name} lastName={last_name} email={email} avatar={avatar}/>
      <StyledButton onPress={() => {navigation.goBack()}} >Go Back</StyledButton>
    </View>
  );
}

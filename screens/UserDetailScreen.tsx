import React from "react";
import { RootStackScreenProps } from "../types";
import { View  } from "react-native";
import UserCard from "../components/UserCard";
import { Headline } from "react-native-paper";

export default function UserDetailScreen({
  route,
}: RootStackScreenProps<"UserDetail">) {
  const {userId} = route.params
  const {name} = route.params
  return (
    <View style={{margin: 7}}>
      <Headline>USER PROFILE</Headline>
      <UserCard  id={userId} name={name}/>
    </View>
  );
}

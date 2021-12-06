import React from "react"
import { useTheme } from "@react-navigation/native"
import { useNavigation } from "@react-navigation/core"
import { Card as DefaultCard, Subheading, Caption } from "react-native-paper";

type UserCardProps = {
    id: string,
    name: string,
  };
  

export default function UserCard(props: UserCardProps) {
    const theme = useTheme();
    const navigation = useNavigation();
    const {id} = props
    const {name} =props
    return (
      <DefaultCard theme={theme} style={{margin: 12}} onPress={() => {navigation.navigate('UserDetail',{userId:id, name: name})}}>
        <DefaultCard.Content>
          <Subheading>
            ID <Caption>              {id}</Caption>
          </Subheading>
          <Subheading>
            Name <Caption>       {name}</Caption>
          </Subheading>
        </DefaultCard.Content>
      </DefaultCard>
    );
}
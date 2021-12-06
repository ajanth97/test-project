import React from "react";
import { Card as DefaultCard, Subheading, Caption, Avatar } from "react-native-paper";
import { useTheme } from "@react-navigation/native"

type UserDetailCardProps = {
    firstName: string,
    lastName: string,
    email: string,
    avatar: string,
  };
  
export default function UserDetailCard(props: UserDetailCardProps) {
    const theme = useTheme();
    const {firstName} = props
    const {lastName} = props
    const {email} = props
    const {avatar} = props
    return (
      <DefaultCard theme={theme} style={{margin: 12}}>
        <DefaultCard.Content>
        <Avatar.Image source={{uri:avatar}}/> 
          <Subheading>
            First Name <Caption>       {firstName}</Caption>
          </Subheading>
          <Subheading>
            Last Name <Caption>       {lastName}</Caption>
          </Subheading>
          <Subheading>
            Email <Caption>                  {email}</Caption>
          </Subheading>          
        </DefaultCard.Content>
      </DefaultCard>
    );
}
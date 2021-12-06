import React from "react";
import { Button } from "react-native-paper";
import {primaryColor} from "../constants/Colors"

interface StyledButtonProps {
    onPress: () => void;
    children?: ReactNode
}

const StyledButton:React.FC<StyledButtonProps> = ({children, onPress}) => {
    return(
        <Button onPress={onPress} mode="contained" style={{borderBottomRightRadius: 30, margin : 15}} color={primaryColor}>
            {children}
        </Button>
    )
}

export default StyledButton
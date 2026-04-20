import { useThemeColors } from "@/hooks/useThemeColors";
import { View, ViewProps, ViewStyle } from "react-native";

type Props = ViewProps

export function Card({style, ...rest}: Props){
    const colors = useThemeColors()
    return <View style={[style, styles, {backgroundColor:  colors.greenLight}]} {...rest}  />
}

const styles = {
    borderRadius: 8,
    overflow: 'hidden'
} satisfies ViewStyle
import { useThemeColors } from "@/hooks/useThemeColors";
import { StyleSheet, Text, ViewStyle } from "react-native";
import { Card } from "./Card";
import { EquipeCard } from "./EquipeCard";
import { Row } from "./Row";

type Props = {
    style?: ViewStyle,
    date?: string,
    homeName?: string, 
   // homeLogo?: string,
    awayName?: string, 
    //awayLogo?: string
}

export function CurrentMatchCard({style, date, homeName,awayName}: Props){
    const colors = useThemeColors();
    return <Card style={[ styles.card, {backgroundColor:  colors.greenLight} ]} >
        <Row>
            <EquipeCard value={homeName}></EquipeCard>
            <Text>{date}</Text>
            <EquipeCard value={awayName}></EquipeCard>
        </Row>
    </Card>
    
}


const styles = StyleSheet.create({
    card: {
        position: "relative",
        alignItems: 'center',
        padding: 4
    }
})
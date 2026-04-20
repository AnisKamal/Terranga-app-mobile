import { useThemeColors } from "@/hooks/useThemeColors";
import { StyleSheet, Text, ViewStyle } from "react-native";
import { Card } from "./Card";
import { EquipeCard } from "./EquipeCard";
import { Row } from "./Row";

type Props = {
    style?: ViewStyle,
    name: string
}

export function CurrentMatchCard({style, name}: Props){
    const colors = useThemeColors();
    return <Card style={[ styles.card, {backgroundColor:  colors.greenLight} ]} >
        <Row>
            <EquipeCard value="senegal"></EquipeCard>
            <Text>{name}</Text>
            <EquipeCard value="Maroc"></EquipeCard>
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
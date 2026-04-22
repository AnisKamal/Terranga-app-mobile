import { Image, Text } from "react-native";
import { Card } from "./Card";

type Props = {
    value?: string, 
}

export function EquipeCard({value} : Props){
    return (
        <Card >
            <Image 
            width={16}
            height={16}
            source={require("@/assets/images/senegal.png")}
            />
            <Text>{value}</Text>
        </Card>
    )
        
}

import { CurrentMatchCard } from "@/components/CurrentMatchCard";
import { useThemeColors } from "@/hooks/useThemeColors";
import { StyleSheet } from 'react-native';

export default function Index() {
  const colors = useThemeColors()
  return (
    <CurrentMatchCard style={styles.body} name="12/04/2026" >
      
    </CurrentMatchCard>
  )
  
  /*
  return (
    <Card style={styles.body}>

    </Card>  )
    */
}

const styles = StyleSheet.create({
   body: {
    height: 200, 
    flex: 1,
    marginTop: 24
  },
}); 

import { CurrentMatchCard } from "@/components/CurrentMatchCard";
import { useFetchQuery } from "@/constants/useFetchQuery";
import { useThemeColors } from "@/hooks/useThemeColors";
import { StyleSheet } from 'react-native';

export default function Index() {
  const colors = useThemeColors()
  const { data: matchs, isLoading, error } = useFetchQuery("api/v1/matchs");

  console.log("loading:", isLoading);
  console.log("error:", error);
  console.log("matchs:", matchs);
  const match = matchs?.[0];  
  return (
    <CurrentMatchCard style={styles.body} date={match?.date} homeName={match?.homeName} awayName={match?.awayName}  >
      
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

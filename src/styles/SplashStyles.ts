import { StyleSheet } from "react-native";
import { colors } from "../common/colors";
import { ws,hs } from "../designs/measurement.design";

 export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.splashFirst,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: ws(286),
    height: hs(53),
  },
  background:{
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  image:{
    width:'100%',
    height:'100%'
  }
});

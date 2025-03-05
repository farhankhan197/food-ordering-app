import { StyleSheet } from 'react-native';
import Colors from '@/src/constants/Colors';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View } from '@/src/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daal Makhani</Text>
      <Text style={styles.price}>Price :  ₹ 80 </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical:10,
  },

  price:{
    color:Colors.light.tint,
    fontWeight:'bold',
  }
});

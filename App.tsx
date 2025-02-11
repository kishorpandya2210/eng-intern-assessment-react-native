import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import StopWatch from './src/StopWatch';
import { Icon } from '@rneui/themed';

/**
 * Main application component containing the Stopwatch and title.
 */
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <View style= {styles.title}>
          <Icon 
            name='timer'
            type='material-community'
            size={80}
            color={'#fff'}
          />
          <Text style= {styles.text}>Stopwatch</Text>
        </View>
        <StopWatch />
    </SafeAreaView>
  );
}

// Styles for the App component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  text: {
    fontSize: 50,
    color: '#fff'
  },
});

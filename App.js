import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

const App = () => (
  <View style={styles.container}>
    <SafeAreaView style={styles.nav}>
      <Text style={styles.text}>Nav bar</Text>
    </SafeAreaView>
    <SafeAreaView style={styles.content}>
      <Text style={styles.textLight}>
      Veja como vem, veja bem, veja como vem vai, vai, vem, veja bem como vai, veja como vai veja bem, veja bem como vem vai vem se ela vai também, cuidado meu amigo não vá se estrepar não queira dar um passo mais largo que as pernas podem dar, não se iluda com um beijo, uma frase ou um olhar, não vá se perder por aí
      </Text>
    </SafeAreaView>
    <SafeAreaView style={styles.tab}>
      <Text style={styles.text}>Tab bar</Text>
    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontWeight: '600',
    fontSize: 18,
    paddingVertical: 10,
  },
  textLight: {
    color: '#000',
    fontSize: 15,
    padding: 10,
  },
  content: {
    backgroundColor: 'darkgray',
    marginTop: 20,
  },
  nav: {
    backgroundColor: 'darkgray',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  tab: {
    backgroundColor: 'darkgray',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
});

export default App;

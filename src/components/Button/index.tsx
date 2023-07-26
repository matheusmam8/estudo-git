import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function Button() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>Clique aqui!</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#565',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
    marginTop: 10
  },
});
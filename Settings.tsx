import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, Button, StatusBar } from 'react-native';
import { RootStackParamList } from './router';
import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList>;
const Settings = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Text>Settings Screen</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};
export default Settings;

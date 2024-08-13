import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View, Button, StatusBar } from 'react-native';
import { RootStackParamList } from './router';
import styles from './styles';
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
const Home = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>Home Content</Text>
    </View>
  );
};
export default Home;

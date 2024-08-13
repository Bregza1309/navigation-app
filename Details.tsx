import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './router';
import { View, Text, StatusBar } from 'react-native';
import styles from './styles';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
/*type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;
export default ({ route }: Props) => {
  const navigation = useNavigation();
  const { content, title } = route.params;
  useEffect(() => {
    navigation.setOptions({ title });
  });
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Text>{content}</Text>
    </View>
  );
};*/

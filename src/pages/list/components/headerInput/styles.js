import { StyleSheet } from 'react-native';
import { colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.header,
  },
  form: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    backgroundColor: colors.input,
    marginVertical: 15,
    marginLeft: 20,
    fontSize: 12,
    borderRadius: 5,
    padding: 5,
  },
  adicionar: {
    padding: 10,
    marginHorizontal: 5,
  },
  icone: {
    color: colors.titleBotao,
  },
});

export default styles;

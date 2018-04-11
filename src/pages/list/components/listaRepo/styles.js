import { StyleSheet } from 'react-native';
import { metrics, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBotao: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.boxItem,
    marginTop: 10,
    marginHorizontal: 15,
    borderRadius: metrics.borda,
    padding: 15,
  },
  containerImag: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },
  containerName: {
    marginHorizontal: 10,
  },
  textoTitulo: {
    color: colors.titleBotao,
    fontSize: 16,
  },
  textoDesc: {
    color: colors.descBotao,
    fontSize: 12,
  },
  containerIcon: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  icon: {
    color: colors.descBotao,
  },

});

export default styles;

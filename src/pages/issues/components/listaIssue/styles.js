import { StyleSheet } from 'react-native';
import { metrics, colors } from 'styles';

const styles = StyleSheet.create({
  contatiner: {
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
    borderRadius: 23,
  },
  containerName: {
    marginHorizontal: 10,
    flex: 1,
  },
  textoTitulo: {
    color: colors.titleBotao,
    fontSize: 16,
    fontWeight: 'bold',
  },
  textoDesc: {
    color: colors.descBotao,
    fontSize: 12,
  },
  containerIcon: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  icon: {
    color: colors.descBotao,
  },

});

export default styles;

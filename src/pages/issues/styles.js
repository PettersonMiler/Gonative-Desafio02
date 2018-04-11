import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    marginTop: 10,
  },
  containerFiltro: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 15,
    borderRadius: metrics.borda,
    backgroundColor: colors.containerFiltro,
  },
  botao: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  filtroAtivado: {
    fontWeight: 'bold',
    opacity: 1,
  },
  filtroDesativado: {
    opacity: 0.5,
  },
});

export default styles;

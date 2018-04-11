import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import PropTypes from 'prop-types';
import styles from './styles';

const ListaIssue = ({ issue }) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.containerBotao}
      onPress={() => { Linking.openURL(issue.html_url); }}
    >
      <Image
        style={styles.containerImag}
        source={{ uri: issue.user.avatar_url }}
      />
      <View style={styles.containerName}>
        <Text style={styles.textoTitulo} numberOfLines={1}>{issue.title}...</Text>
        <Text style={styles.textoDesc}>{issue.user.login}</Text>
      </View>
      <View style={styles.containerIcon}>
        <Icon name="chevron-right" size={20} style={styles.icone} />
      </View>
    </TouchableOpacity>
  </View>
);

ListaIssue.propTypes = {
  issue: PropTypes.shape({
    html_url: PropTypes.string,
    avatar_url: PropTypes.string,
    title: PropTypes.string,
    login: PropTypes.string,
  }).isRequired,
};

export default ListaIssue;

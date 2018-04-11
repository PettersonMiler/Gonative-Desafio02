import { StackNavigator } from 'react-navigation';

import List from 'pages/list';
import Issues from 'pages/issues';

const Routes = StackNavigator(
  {
    List: { screen: List },
    Issues: { screen: Issues },
  },
  {
    initialRouteName: 'List',
  },
);

export default Routes;

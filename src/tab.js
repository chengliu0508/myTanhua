import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import Friend from './pages/friend';
import Group from './pages/group';
import Message from './pages/message';
import My from './pages/my';
import TabNavigator from 'react-native-tab-navigator';
import * as SvgData from './res/fonts/iconSvg';
const dataSource = [
  {
    icon: SvgData.group,
    selectedIcon: SvgData.selectedGroup,
    tabPage: 'Group',
    tabName: '圈子',
    badge: 0,
    component: Group,
  },
  {
    icon: SvgData.friend,
    selectedIcon: SvgData.selectedFriend,
    tabPage: 'Friend',
    tabName: '交友',
    badge: 0,
    component: Friend,
  },
  {
    icon: SvgData.message,
    selectedIcon: SvgData.selectedMessage,
    tabPage: 'Message',
    tabName: '消息',
    badge: 5,
    component: Message,
  },
  {
    icon: SvgData.my,
    selectedIcon: SvgData.selectedMy,
    tabPage: 'My',
    tabName: '我的',
    badge: 0,
    component: My,
  },
];

const Tabbar = props => {
  const [selectedTab, setSelectedTab] = React.useState('Friend');
  useEffect(() => {
    // console.log('props', props);
  }, [props]);

  return (
    <View style={{flex: 1, backgroundColor: '#F5FCFF'}}>
      <TabNavigator>
        {dataSource.map((v, i) => {
          return (
            <TabNavigator.Item
              key={i}
              selected={selectedTab === v.tabPage}
              title={v.tabName}
              tabBarStyle={stylesheet.tab}
              titleStyle={{color: '#999'}}
              selectedTitleStyle={{color: 'green'}}
              // renderIcon={() => (
              //   <SvgUri
              //     width="20"
              //     height="20"
              //     source={{
              //       uri: 'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg',
              //     }}
              //   />
              // )}
              // renderSelectedIcon={() => (
              //   <SvgUri width="20" height="20" source={require('./res/img/homer.svg')} />
              // )}
              badgeText={v.badge}
              onPress={() => setSelectedTab(v.tabPage)}>
              <v.component {...props} />
            </TabNavigator.Item>
          );
        })}
      </TabNavigator>
    </View>
  );
};

const stylesheet = StyleSheet.create({
  tab: {
    color: 'red',
    justifyContent: 'center',
  },
  tabIcon: {
    color: '#999',
    width: 23,
    height: 23,
  },
});

export default Tabbar;

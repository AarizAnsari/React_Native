import {
  Button,
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ProductFooter from '../components/ProductFooter';
import Filters, {FILTER, selectedFilters} from '../components/Filters';

const ProductFilter = (props: {
  navigation: {navigate: (arg0: string) => void};
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.body}>
      <View style={styles.ScrollView}>
        <FlatList
          data={Object.keys(selectedFilters)}
          renderItem={({item}) => (
            <SelectedFilter name={item}  />
          )}
        />
      </View>
      <ProductFooter
        title1="SORT"
        title2="FILTER"
        action1={() => {}}
        action2={setVisible}
        arg1={true}
        arg2={true}
      />
      <Modal visible={visible} animationType="slide">
        <View style={styles.modal}>
          <Filters action={setVisible} />
          <ProductFooter
            title1="CLOSE"
            title2="APPLY"
            action1={setVisible}
            action2={setVisible}
            arg1={false}
            arg2={false}
          />
        </View>
      </Modal>
    </View>
  );
};

export default ProductFilter;

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    flex: 1,
  },
  footer: {
    height: '8%',
    borderColor: 'grey',
    borderTopWidth: 1,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  ScrollView: {
    height: '92%',
    backgroundColor: '#ebf4db',
  },
  divider: {
    height: '70%',
    width: 1,
    backgroundColor: 'grey',
  },
  text: {
    color: 'black',
    fontWeight: '800',
    fontSize: 16,
  },
  modal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});

type propType = {
  name: string;
};

function SelectedFilter(props: propType) {
  const data = (selectedFilters[props.name]);
  if (data.length > 0) {
    return (
      <View>
        <Text style={{fontSize: 22}}> {props.name} - </Text>
        <FlatList
          data={data}
          horizontal={true}
          renderItem={({item}) => <Text style={{fontSize: 22}}> {item}, </Text>}
        />
      </View>
    );
  } else {
    return null;
  }
}

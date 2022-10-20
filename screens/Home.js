import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, FlatList, Image, TouchableOpacity  } from 'react-native';
export default function Home() {
  const Food = ([

    {
      id: "1",
      image: require("./screens/assets/a.png"),
      name: "Peter Lughes",
      price: "44.00",
      img2: require("./assets/vh.png"),
      img3: require("./assets/b.png")
    },
    {
      id: "2",
      image: require("./screens/assets/a.png"),
      name: "Peter Lughes",
      price: "44.00",
      img2: require("./assets/vh.png"),
      img3: require("./assets/b.png")
    },
    {
      id: "3",
      image: require("./screens/assets/a.png"),
      name: "Peter Lughes",
      price: "44.00",
      img2: require("./assets/vh.png"),
      img3: require("./assets/b.png")
    }, {
      id: "4",
      image: require("./screens/assets/a.png"),
      name: "Peter Lughes",
      price: "44.00",
      img2: require("./assets/vh.png"),
      img3: require("./assets/b.png")
    }, {
      id: "5",
      image: require("./screens/assets/a.png"),
      name: "Peter Lughes",
      price: "44.00",
      img2: require("./assets/vh.png"),
      img3: require("./assets/b.png")
    }, {
      id: "6",
      image: require("./screens/assets/a.png"), 
      name: "Peter Lughes",
      price: "44.00",
      img2: require("./assets/vh.png"),
      img3: require("./assets/b.png")
    },
  ]);
  const render = ({ item }) => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 70 }}>
        <View style={{ height:200}}>
          <Image source={item.image} style={{ width: 100, height: 100 }}>

          </Image>
          <Text style={{ marginRight: 10, width: 140, }}>{item.name}</Text>
          <Text style={{ marginRight: 10, width: 140, }}>{item.price}</Text>
          {/* <Image source={item.img2} style={{ width: 0, height: 100 }}>

          </Image> */}
        </View>
        <View style={{ height:200}}>
          <Image source={item.image} style={{ width: 100, height: 100 }}>

          </Image>
          <Text style={{ marginRight: 10, width: 240 }}>{item.name}</Text>
          <Text style={{ marginRight: 10, width: 240 }}>{item.price}</Text>
        </View>
      </View>

    )
  }



  return (
    
    <View style={{}}>
    <View style={{flexDirection:'row',}}>
    <View style={{paddingTop:20, marginLeft:10,}}>
    <Image source={require('./assets/v.png')}/>
    </View>
    <View style={{paddingTop:20,marginLeft:140,}}>
      <Text>Home</Text>
    </View>
    <View style={{paddingTop:5,marginLeft:120,}}>
    <Image source={require('./assets/dn.png')}/>
    </View>
   
    </View>
    
      <View style={{ flexDirection: 'row', borderBottomColor: 'black', borderBottomWidth: 1, alignItems: 'center' }}>
        <View style={{ borderColor: 'black', marginTop: 30,marginLeft:80, marginBottom: 30, borderWidth: 2, height: 40, width:170, }}>
          <TextInput placeholder='Search' style={{ padding: 4, paddingLeft: 10, }} onChangeText={(e) => setWork(e)}></TextInput>
        </View>
        <View style={{marginLeft:30}}>
          <TouchableOpacity>
              <Image source={require('./assets/plus.png')}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ paddingTop: 30, height:300, }}>

        <FlatList data={Food} renderItem={render} keyExtractor={item => item.id}>
        </FlatList>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

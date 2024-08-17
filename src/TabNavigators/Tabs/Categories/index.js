import { Dimensions, FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import TopCategoryList from '../../../components/TopCategoryList'
import { TopCatgories, workersData } from '../../../Helper/Workerslist'
import { horizontalScale, moderateScale, verticalScale } from '../../../Helper/Scale'
const { width, height } = Dimensions.get('window');

const Categories = () => {
  const [toplist, setToplist] = useState(TopCatgories)
  const [Alldata, setAllData] = useState(workersData)
  const [filteredData, setFilteredData] = useState(workersData);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchText, setSearchText] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('');

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image
        style={styles.profileImage}
        source={{ uri: item.profileImage }}
        resizeMode='cover'

      />
      <Text style={styles.name}>{item.name}</Text>
      <Image
        source={{uri:item?.country?.flagImage}}
        style={styles.flagIcon}
      />
    </View>
  );



  const filterCategories = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setFilteredData(Alldata);
    } else {
      setSelectedCategory(category);
      const filtered = Alldata.filter((item) => item.category === category);
      setFilteredData(filtered);
    }
  };

  const handleSearch = (text) => {
    setSearchText(text);
    const lowercasedText = text.toLowerCase();
    let filtered = Alldata.filter(item => {
      const matchesName = item.name.toLowerCase().includes(lowercasedText);

      return matchesName
    });

    setFilteredData(filtered);
  };


  return (
    <View style={styles.container}>
      <TopCategoryList toplist={toplist} filterCategories={filterCategories} selectedCategory={selectedCategory} />

      <View style={styles.Textinputcontainer}>
        <Image
          source={require('../../../../assets/images/search.png')}
          style={styles.icon}

        />
        <TextInput
          placeholder='Search'
          placeholderTextColor='#000'
          style={styles.input}
          value={searchText}
          onChangeText={text => {
            setSearchText(text)
            handleSearch(text)
          }}
        />
      </View>

      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={4}
        contentContainerStyle={styles.list}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebeef7',
  },
  Textinputcontainer: {
    marginVertical: verticalScale(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: horizontalScale(20),
    height: verticalScale(20),
    position: 'absolute',
    zIndex: 3,
    left: 25,
  },
  input: {
    width: '90%',
    height: verticalScale(45),
    backgroundColor: '#e6e6e6',
    borderRadius: moderateScale(6),
    marginHorizontal: horizontalScale(20),
    paddingHorizontal: horizontalScale(30),
    color: '#000', 
  },

  list: {

  },
  itemContainer: {
    // margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'red',
    width:'22%',
    marginHorizontal:horizontalScale(6),
    marginVertical:verticalScale(3)

  },
  profileImage: {
    width: horizontalScale(70),
    height: verticalScale(70),
    borderRadius: width / 2,
  },
  name: {
    marginVertical: 5,
    fontSize: moderateScale(12),
    fontWeight: 'bold',
    color: '#000'
  },
  category: {
    fontSize: 12,
    color: 'gray',
  },
  categoryImage: {
    width: '22%',
    height: verticalScale(50),
    borderRadius: width / 2,
  },
  flagIcon: {
    width: horizontalScale(20),
    height: verticalScale(20),
    position: 'absolute',
    top: 4,
    right: 2,
  },
})

export default Categories

import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../../Helper/Scale'
const { width, height } = Dimensions.get('window')
const TopCategoryList = (props) => {
    const { toplist, filterCategories, selectedCategory } = props
    // console.log(toplist)

    return (
        <View style={styles.Toplistcontainer}>
            <View style={styles.ContentWrap}>
                {
                    toplist?.map((item, index) => {
                        return (
                            <TouchableOpacity
                                onPress={() => filterCategories(item?.category)}
                                style={[styles.contentContainer,   {
                                    backgroundColor: selectedCategory === item?.category ? '#d0d0d0' : '#ffffff',
                                    borderColor: selectedCategory === item?.category ? '#007bff' : '#cccccc',
                                    borderWidth:selectedCategory===item?.category? 1:0
                                  }]} key={index}>
                                <Image source={{ uri: item?.categorypic }} style={styles.contentImage} />
                                <Text style={styles.contentText}>{item?.category}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default TopCategoryList

const styles = StyleSheet.create({

    Toplistcontainer: {
        height: '12%',
        backgroundColor: '#e6e6e6',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ContentWrap: { flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' },
    contentContainer:{ width: '19%', alignItems: 'center',backgroundColor:'red' },
    contentImage: { width: horizontalScale(60), height: verticalScale(60), borderRadius: width / 2 },
    contentText: { color: '#000', fontWeight: '500', fontSize: moderateScale(10) }
})
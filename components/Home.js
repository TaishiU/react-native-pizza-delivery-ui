import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../assets/colors/colors';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';



const Home = ({ navigation }) => {

    const renderCategoryItem = ({ item }) => {
        return (
            <TouchableOpacity>
                <View style={[styles.categoryItemWrapper,
                {
                    backgroundColor: item.selected ? colors.primary : colors.white,
                    marginLeft: item.id === 1 ? 20 : 0
                }
                ]}>
                    <Image
                        source={item.image}
                        style={styles.categoryItemImage}
                    />
                    <Text style={styles.categoryItemTitle}>{item.title}</Text>
                    <View style={[styles.categorySelectWrapper,
                    {
                        backgroundColor: item.selected ? colors.white : colors.primary
                    }
                    ]}>
                        <Image
                            source={require('../assets/images/right.png')}
                            style={styles.categorySelectItem}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        )
    };

    return (
        <View styele={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false} //縦にスクロールした時のスクロールバーを消す
                showsHorizontalScrollIndicator={true} //横にスクロールした時のスクロールバーを消す
            >
                {/* Header */}
                <SafeAreaView>
                    <View style={styles.headerWrapper}>
                        <Image
                            source={require('../assets/images/person.png')}
                            style={styles.profileImage}
                        />
                        <Image
                            source={require('../assets/images/menu.png')}
                            style={styles.menu}
                        />
                    </View>
                </SafeAreaView>

                {/* Titles */}
                <View style={styles.titlesWrapper}>
                    <Text style={styles.titlesSubTitle}>Food</Text>
                    <Text style={styles.titlesTitle}>Delivery</Text>
                </View>

                {/* Search */}
                <View style={styles.searchWrapper}>
                    <Image
                        source={require('../assets/images/search.png')}
                        style={styles.searchIcon}
                    />
                    <View style={styles.search}>
                        <Text style={styles.searchText}>Search...</Text>
                    </View>
                </View>

                {/* Categories */}

                <View style={styles.categoriesWrapper}>
                    <Text style={styles.categoriesTitle}>Categories</Text>
                    <View style={styles.categoriesListWrapper}>
                        <FlatList
                            data={categoriesData}
                            renderItem={renderCategoryItem}
                            keyExtractor={item => item.id}
                            horizontal={true} //横並びにする
                            showsHorizontalScrollIndicator={false} //横にスクロールした時のスクロールバーを消す
                        />
                    </View>
                </View>



                {/* Popular */}
                <View style={styles.popularWrapper}>
                    <Text style={styles.popularTitle}>Popular</Text>
                    {popularData.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            onPress={() => navigation.navigate('Details', {
                                item: item,
                            })}
                        >
                            <View
                                style={[styles.popularCardWrapper,
                                {
                                    marginTop: item.id === 1 ? 10 : 20
                                }
                                ]}>
                                <View>
                                    {/* <View> */}
                                    <View style={styles.popularTopWrapper}>
                                        <Image
                                            source={require('../assets/images/star.png')}
                                            style={styles.popularTopIcon}
                                        />
                                        <Text style={styles.popularTopText}>Top of the Week</Text>
                                    </View>

                                    <View style={styles.popularTitlesWrapper}>
                                        <Text style={styles.popularTitlesTitle}>{item.title}</Text>
                                        <Text style={styles.popularTitlesWeight}>Weight  {item.weight}</Text>
                                    </View>

                                    <View style={styles.popularCardBottom}>
                                        <View style={styles.addPizzaButton}>
                                            <Image
                                                source={require('../assets/images/plus.png')}
                                                style={styles.addPizzaButtonIcon}
                                            />
                                        </View>
                                        <View style={styles.ratingWrapper}>
                                            <Image
                                                source={require('../assets/images/ratingStar.png')}
                                                style={styles.ratingWrapperIcon}
                                            />
                                            <Text style={styles.rating}>{item.rating}</Text>
                                        </View>
                                    </View>
                                    {/* </View> */}
                                </View>
                                <View style={styles.popularCardRight}>
                                    <Image
                                        source={item.image}
                                        style={styles.popularCardRightImage}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20, //水平方向に幅を取る
        paddingTop: 20,
        alignItems: 'center',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40,
        //影を付ける
        shadowColor: colors.black,
        shadowOffset: { //影の方向
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.07, //影の濃さ
        shadowRadius: 5,　//影のぼかし量
        elevation: 1,
    },
    menu: {
        width: 35,
        height: 35,
    },
    titlesWrapper: {
        marginTop: -5,
        paddingHorizontal: 20,
    },
    titlesSubTitle: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
        color: colors.textDartk,
    },
    titlesTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        color: colors.textDartk,
        marginTop: 5,
    },
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    searchIcon: {
        width: 21,
        height: 21,
    },
    search: {
        flex: 1,
        marginLeft: 10,
        borderBottomColor: colors.textLight,
        borderBottomWidth: 2,
    },
    searchText: {
        fontFamily: 'Montserrat-Regular',
        color: colors.textLight,
        fontSize: 14,
        marginBottom: 5,
    },
    categoriesWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    categoriesTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,

    },
    categoriesListWrapper: {
        paddingTop: 15,
        paddingBottom: 20,
    },
    categoryItemWrapper: {
        backgroundColor: colors.primary,
        marginRight: 20,
        marginBottom: 10,
        borderRadius: 20,
        //影を付ける
        shadowColor: colors.black,
        shadowOffset: { //影の方向
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.07, //影の濃さ
        shadowRadius: 5,　//影のぼかし量
        elevation: 1,
    },
    categoryItemImage: {
        width: 60,
        height: 60,
        marginTop: 25,
        alignSelf: 'center',
        marginHorizontal: 20,
    },
    categoryItemTitle: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        marginTop: 10,
    },
    categorySelectWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 26,
        height: 26,
        borderRadius: 26,
        marginBottom: 20,
        //影を付ける
        shadowColor: colors.black,
        shadowOffset: { //影の方向
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.07, //影の濃さ
        shadowRadius: 5,　//影のぼかし量
        elevation: 1,
    },
    categorySelectItem: {
        width: 10,
        height: 10,
        alignSelf: 'center',
        // resizeMode: 'contain',
    },
    popularWrapper: {
        paddingHorizontal: 20,
    },
    popularTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
    },
    popularCardWrapper: {
        backgroundColor: colors.white,
        borderRadius: 25,
        paddingTop: 20,
        paddingLeft: 20,
        // overflow: 'hidden', //カード部分からはみ出した部分を切り取る(非表示にする)
        flexDirection: 'row',
        //影を付ける
        shadowColor: colors.black,
        shadowOffset: { //影の方向
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.07, //影の濃さ
        shadowRadius: 5,　//影のぼかし量
        elevation: 1,
    },
    popularTopWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    popularTopIcon: {
        width: 15,
        height: 15,
    },
    popularTopText: {
        marginLeft: 5,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
    },
    popularTitlesWrapper: {
        marginTop: 20,
    },
    popularTitlesTitle: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
        color: colors.textDartk,
    },
    popularTitlesWeight: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 12,
        color: colors.textLight,
        marginTop: 5,
    },
    popularCardBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: -20,
    },
    addPizzaButton: {
        backgroundColor: colors.primary,
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
    },
    addPizzaButtonIcon: {
        width: 20,
        height: 20,
    },
    ratingWrapper: {
        flexDirection: 'row',
        marginLeft: 20,
    },
    ratingWrapperIcon: {
        width: 16,
        height: 16,
    },
    rating: {
        marginLeft: 5,
        fontSize: 15,
        fontFamily: 'Montserrat-SemiBold',
    },
    popularCardRight: {
        flexDirection: 'row',
        marginLeft: 25,
        paddingTop: 10,
    },
    popularCardRightImage: {
        width: 220,
        height: 130,
        resizeMode: 'contain', //画像を全て同じサイズにする
    },
});

export default Home;


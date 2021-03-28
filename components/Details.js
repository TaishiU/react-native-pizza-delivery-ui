import React from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native'
import colors from '../assets/colors/colors';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const Details = ({ route, navigation }) => {

    const { item } = route.params;
    console.log(item);

    const renderIngredientsItem = ({ item }) => {
        return (
            <View style={styles.ingredientsItemWrapper}>
                <Image
                    source={item.image}
                    style={styles.ingredientsImage}
                />
            </View>
        )
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <SafeAreaView>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={styles.headerWrapper}>
                        <View style={styles.headerLeft}>
                            <Image
                                source={require('../assets/images/left.png')}
                                style={styles.headerLeftIcon}
                            />
                        </View>
                        <View style={styles.headerRight}>
                            <Image
                                source={require('../assets/images/whiteStar.png')}
                                style={styles.headerRightIcon}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>

            {/* Title */}
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{item.title}</Text>
            </View>

            {/* Price */}
            <View style={styles.priceWrapper}>
                <Text style={styles.price}>${item.price}</Text>
            </View>

            {/* Pizza info */}
            <View style={styles.infoWrapper}>
                <View style={styles.infoLeftWrapper}>
                    <View style={styles.infoItemWrapper}>
                        <Text style={styles.infoItemTitle}>Size</Text>
                        <Text style={styles.infoItemText}>
                            {item.sizeName} {item.sizeNumber}
                        </Text>

                        <Text style={styles.infoItemTitle}>Crust</Text>
                        <Text style={styles.infoItemText}>
                            {item.crust}
                        </Text>

                        <Text style={styles.infoItemTitle}>Delivery in</Text>
                        <Text style={styles.infoItemText}>
                            {item.deliveryTime} min
                        </Text>
                    </View>
                </View>
                <View>
                    <Image source={item.image} style={styles.itemImage} />
                </View>
            </View>

            {/* Ingredients */}
            <View style={styles.ingredientsWrapper}>
                <Text style={styles.ingredientsTitle}>Ingredients</Text>
                <View style={styles.ingredientsListWrapper}>
                    < FlatList
                        data={item.ingredients}
                        renderItem={renderIngredientsItem}
                        keyExtractor={item => item.id}
                        horizontal={true} //横並びにする
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>

            {/* OrderButton */}
            <TouchableOpacity onPress={() => alert('Thanks, Your order🎉')}>
                <View style={styles.orderWrapper}>
                    <Text style={styles.orderText}>Get it!</Text>
                </View>
            </TouchableOpacity>

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
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,

    },
    headerLeft: {
        borderColor: '#E5E5E5',
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
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
    headerLeftIcon: {
        width: 12,
        height: 12,
    },
    headerRight: {
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 10,
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
    headerRightIcon: {
        width: 15,
        height: 15,
    },
    titleWrapper: {
        paddingHorizontal: 20,
        marginTop: 30,
    },
    title: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        color: colors.textDark,
        width: '50 %',
    },
    priceWrapper: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    price: {
        color: colors.price,
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
    },
    infoWrapper: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    infoLeftWrapper: {
        paddingLeft: 20,
    },
    infoItemWrapper: {
        marginBottom: 20,
        // backgroundColor: colors.primary,
    },
    infoItemTitle: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        color: colors.textLight,
    },
    infoItemText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
        color: colors.textDark,
        paddingBottom: 20,
    },

    itemImage: {
        resizeMode: 'contain',
        marginLeft: 30,
        resizeMode: 'contain', //画像を全て同じサイズにする
    },
    ingredientsWrapper: {
        marginTop: 20,
    },
    ingredientsTitle: {
        paddingHorizontal: 20,
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        color: colors.textDark,
    },
    ingredientsListWrapper: {
        paddingHorizontal: 20,
    },
    ingredientsItemWrapper: {
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 15,
        borderRadius: 15,
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
    ingredientsImage: {
        resizeMode: 'contain',
        width: 65,
        height: 65,
    },
    orderWrapper: {
        // width: 300,
        marginTop: 40,
        marginHorizontal: 50,

        backgroundColor: colors.primary,
        borderRadius: 50,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        //影を付ける
        shadowColor: colors.black,
        shadowOffset: { //影の方向
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2, //影の濃さ
        shadowRadius: 5,　//影のぼかし量
        elevation: 1,
    },
    orderText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
        color: colors.textDark,
    },
});

export default Details








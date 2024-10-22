import { View, Text, ScrollView, StyleSheet, Pressable, Image } from 'react-native';
import React, {useState} from 'react';
import { data } from '../../constants/data';
import styles from '../../styles/list';
import { Divider } from '@rneui/themed';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const ListView = () => {
    return (
            <ScrollView
                contentContainerStyle={styles.scrollViewContainer}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.titleFavorite}>
                Social Media Feed
                </Text>
                {data.dataLocation.map((item) => (
                    
                    <ListViewItem
                        key={item.id}
                        id={item.id}
                        user={item.user}
                        content={item.content}
                        title={item.name}
                        imgUrl={item.imgUrl}
                        avatarUrl={item.avatarUrl}
                        likes={item.likes}
                        comments={item.comments}
                        shares={item.shares}
                    />
                ))}
            </ScrollView>
    );
};

const ListViewItem = ({ id,user, title, content, avatarUrl, imgUrl, likes, comments, shares}) => {
    const [likeCount, setLikeCount] = useState(likes);
    const [isLiked, setIsLiked] = useState(false);
    const [commentCount, setCommentCount] = useState(comments);
    const [shareCount, setShareCount] = useState(shares);

    
    const handleLikePress = () => {
        isLiked? 
            setLikeCount((prev) => prev - 1)
            :
            setLikeCount((prev) => prev + 1);

        setIsLiked(!isLiked);
    };

    const handleCommentPress = () => {
        setCommentCount((prev) => prev + 1);
    };

    const handleSharePress = () => {
        setShareCount((prev) => prev + 1);
    };

    return (
        <View style={styles.cardWrapMain}>
            <Pressable style={styles.cardWrap}>
                <View style={styles.profile_wrap}>
                    <Image 
                        source={{ uri: avatarUrl }}
                        style={styles.avatar_img}
                        resizeMode='cover'
                    />
                    <Text
                    style={styles.user_name}>
                        {user}
                    </Text>
                </View>

                <Text
                    style={styles.content}>
                        {content}
                </Text>

                <View style={styles.userPostWrap}>
                    <Image
                        source={{ uri: imgUrl }}
                        style={styles.img_main}
                        resizeMode='cover'
                    />
                </View>

                <View style={styles.interact_wrap}>
                    <Text style={styles.interact_text}>
                        {likeCount} Likes
                    </Text>
                    <Text style={styles.interact_text}>
                        {commentCount} Comments
                    </Text>
                    <Text style={styles.interact_text}>
                        {shareCount} Shares
                    </Text>
                </View>

                <Divider width={2} style={styles.divider}/>

                <View style={styles.interact_wrap}>
                    <Pressable style={styles.interact_wrap_btn} onPress={handleLikePress}>
                        <AntDesign name={isLiked? "like1": "like2"} size={20} color={isLiked? "blue": "black"} />
                        <Text style={isLiked? styles.interact_btn_pressed : styles.interact_btn}>
                            Likes
                        </Text>
                    </Pressable>
                    <Pressable style={styles.interact_wrap_btn} onPress={handleCommentPress}>
                        <FontAwesome6 name="comment-alt" size={18} color="black" />
                        <Text style={styles.interact_btn}>
                            Comments
                        </Text>
                    </Pressable>
                    <Pressable style={styles.interact_wrap_btn} onPress={handleSharePress}>
                    <AntDesign name="sharealt" size={20} color="black" />
                        <Text style={styles.interact_btn}>
                            Shares
                        </Text>
                    </Pressable>
                </View>
                
            </Pressable>
        </View>
    );
};

export default ListView;

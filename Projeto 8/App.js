import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

const Avatar = ({ url }) => <Image source={{ uri: url }} style={styles.avatar} />;

const Heading = ({ children }) => <Text style={styles.heading}>{children}</Text>;

const Title = ({ children, style }) => <Text style={[styles.title, style]}>{children}</Text>;

const WoofCard = ({ name, avatar }) => (
  <View style={styles.woofCardContainer}>
    <Avatar url={avatar} />
    <Title style={styles.woofCardTitle}>{name}</Title>
  </View>
);

const WoofPost = ({ image, title, description }) => (
  <View style={styles.woofPostContainer}>
    <Image source={{ uri: image }} style={styles.woofPostImage} />
    <View style={styles.woofPostContent}>
      <Title style={styles.woofPostTitle}>{title}</Title>
      <Text style={styles.woofPostDescription} numberOfLines={2}>{description}</Text>
    </View>
  </View>
);

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.mainScroll}>
        
        <Heading>Trending Woofs</Heading>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {data.woofs.map(woof => (
            <WoofCard key={woof.id} name={woof.name} avatar={woof.avatar} />
          ))}
        </ScrollView>

        <Heading>New Woof Posts</Heading>
        <View style={styles.postsContainer}>
          {data.posts.map(post => (
            <WoofPost
              key={post.id}
              image={post.image}
              title={post.title}
              description={post.description}
            />
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const data = {
  woofs: [
    { id: '1', name: 'REX', avatar: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=100' },
    { id: '2', name: 'BALL-R', avatar: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=100' },
    { id: '3', name: 'HAPPY', avatar: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=100' },
    { id: '4', name: 'FLUFFY', avatar: 'https://images.unsplash.com/photo-1537151608804-ea2f1ea14a15?auto=format&fit=crop&q=80&w=100' }
  ],
  posts: [
    { id: '1', title: 'HAPPY WOOFS', description: "How to keep your Woof happy and healthy. We've asked some of the best experts out there.", image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=400' },
    { id: '2', title: 'WOOFS & FRIENDS', description: "Best friends are important for humans, but also for dogs.", image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=400' },
    { id: '3', title: 'GOOD WOOFS', description: "When they behave right, they are not a danger to society.", image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=400' }
  ]
};

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: '#F8F8F8' 
  },
  mainScroll: { 
    flex: 1 
  },
  avatar: { 
    width: 64, 
    height: 64, 
    borderRadius: 32 
  },
  heading: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    margin: 16, 
    color: '#1A1A1A' 
  },
  title: { 
    fontWeight: 'bold', 
    color: '#1A1A1A' 
  },
  woofCardContainer: { 
    backgroundColor: '#FFF', 
    padding: 12, 
    borderRadius: 12, 
    marginRight: 16, 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: '#EAEAEA',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  },
  woofCardTitle: { 
    marginTop: 8, 
    textAlign: 'center' 
  },
  horizontalScroll: { 
    paddingLeft: 16, 
    paddingBottom: 16 
  },
  woofPostContainer: { 
    flexDirection: 'row', 
    backgroundColor: '#FFF', 
    marginHorizontal: 16, 
    marginBottom: 16, 
    borderRadius: 12, 
    overflow: 'hidden', 
    borderWidth: 1, 
    borderColor: '#EAEAEA',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  },
  woofPostImage: { 
    flex: 1
  },
  woofPostContent: { 
    flex: 2, 
    padding: 12, 
    justifyContent: 'center' 
  },
  woofPostTitle: { 
    fontSize: 16, 
    marginBottom: 4,
    textTransform: 'uppercase'
  },
  woofPostDescription: { 
    fontSize: 14, 
    color: '#666' 
  },
  postsContainer: { 
    paddingBottom: 20 
  }
});
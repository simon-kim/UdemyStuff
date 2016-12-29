import React from 'react'
import { View, Text, Image, Linking } from 'react-native'
import Card from './card'
import CardSection from './cardSection'
import Button from './button'

const AlbumDetail = ({ album }) => {
  const { title,
    artist,
    thumbnail_image,
    image,
    url,
  } = album
  const { textContainer,
    thumbnailStyle,
    thumbnailContainer,
    albumTitle,
    imageStyle,
  } = styles

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainer}>
          <Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
        </View>
        <View style={textContainer}>
          <Text style={albumTitle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image source={{ uri: image }} style={imageStyle} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  )
}

const styles = {
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  albumTitle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
}

export default AlbumDetail

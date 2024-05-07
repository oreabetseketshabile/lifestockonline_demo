import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Button, Image, FlatList } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import CustomButton from './CustomButton';

const PlaceAuctions = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startTime,setstartTime]=useState("");
  const [endTime, setEndTime] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startingPrice, setStartingPrice] = useState('');
  const [sellerId, setSellerId] = useState('');
  const [Placebids, setPlacebids] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState([]);

  const handlebid = () => {
    // Validation if necessary
    if (title.trim() === '') {
      alert('Please enter a title.');
      return;
    }
  if (description.trim() === '') {
    alert('Please enter a description.');
    return;
  }

  if (!endTime || !new Date(endTime).getTime()) {
    alert('Please enter a valid end time.');
    return;
  }

  if (!startDate || !new Date(startDate).getTime()) {
    alert('Please enter a valid start date.');
    return;
  }

  if (startingPrice.trim() === '') {
    alert('Please enter a starting price.');
    return;
  }

  if (sellerId.trim() === '') {
    alert('Please enter a seller ID.');
    return;
  }

    

    // Construct the message object
    const newbid = {
      title,
      description,
      startTime,
      endTime,
      startDate,
      endDate,
      startingPrice,
      sellerId,
      selectedImages,
      selectedVideos,
    };

    // Add the new bid to the bids array
    setPlacebids([...Placebids, newbid]);

    // Clear input fields and selected images/videos
    setTitle('');
    setDescription('');
    setstartTime('');
    setEndTime('');
    setStartDate('');
    setEndDate('');
    setStartingPrice('');
    setSellerId('');
    setSelectedImages([]);
    setSelectedVideos([]);
  };

  const handleImageSelection = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        setSelectedImages([...selectedImages, source]);
      }
    });
  };

  const handleVideoSelection = () => {
    const options = {
      title: 'Select Video',
      mediaType: 'video',
      storageOptions: {
        skipBackup: true,
        path: 'videos',
      },
    };

    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled video picker');
      } else if (response.error) {
        console.log('VideoPicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        setSelectedVideos([...selectedVideos, source]);
      }
    });
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ textAlign: 'center', fontSize: 24, marginBottom: 20 }}>Place Auction</Text>

      {/* Input Fields */}
      <ScrollView>
          <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={text => setDescription(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="start Time"
          value={endTime}
          onChangeText={text => setstartTime(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="End Time"
          value={endTime}
          onChangeText={text => setEndTime(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Start Date"
          value={startDate}
          onChangeText={text => setStartDate(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="End Date"
          value={endTime}
          onChangeText={text => setEndDate(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Starting Price"
          value={startingPrice}
          onChangeText={text => setStartingPrice(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Seller ID"
          value={sellerId}
          onChangeText={text => setSellerId(text)}
        />
      </ScrollView>

      {/* Image Selection */}
      <Button title="Select Image" onPress={handleImageSelection} />

      {/* Display Selected Images */}
      <FlatList
        data={selectedImages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image
            source={item}
            style={{ width: 100, height: 100, margin: 5 }}
          />
        )}
        vertical
      />

      {/* Video Selection */}
      <Button title="Select Video" onPress={handleVideoSelection} />

      {/* Display Selected Videos */}
      <FlatList
        data={selectedVideos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Video
            source={item}
            style={{ width: 100, height: 100, margin: 5 }}
            controls
          />
        )}
       vertical
      />

      {/* Display Messages */}
       <ScrollView style={styles.messageContainer}>
        {Placebids.map((bid, index) => (
          <View key={index} style={styles.message}>
            <Text style={styles.messageText}>{`Title: ${bid.title}`}</Text>
            <Text style={styles.messageText}>{`Description: ${bid.description}`}</Text>
            <Text style={styles.messageText}>{`Start Time: ${bid.endTime}`}</Text>
            <Text style={styles.messageText}>{`End Time: ${bid.endTime}`}</Text>
            <Text style={styles.messageText}>{`Start Date: ${bid.startDate}`}</Text>
            <Text style={styles.messageText}>{`End Date: ${bid.startDate}`}</Text>
            <Text style={styles.messageText}>{`Starting Price: ${bid.startingPrice}`}</Text>
            <Text style={styles.messageText}>{`Seller ID: ${bid.sellerId}`}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Send Button */}
      <CustomButton label="Send Auction" onPress={handlebid} />
    </View>
  );
};

const styles = {
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    padding: 10,
  },
  messageContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    padding: 10,
    maxHeight: 100,
  },
  message: {
    marginBottom: 10,
  },
  messageText: {
    fontWeight: 'bold',
  },
};

export default PlaceAuctions;

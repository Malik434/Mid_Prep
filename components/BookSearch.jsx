// import React, { useState } from 'react';
// import { TextInput, FlatList, Text, View } from 'react-native';

// export default function BookSearch({ books }) {
//   const [search, setSearch] = useState('');

//   const filteredBooks = books.filter(book =>
//     book.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <View>
//       <TextInput
//         value={search}
//         onChangeText={setSearch}
//         placeholder="Search for a book"
//       />
//       <FlatList
//         data={filteredBooks}
//         keyExtractor={item => item.id}
//         renderItem={({ item }) => <Text>{item.title}</Text>}
//       />
//     </View>
//   );
// }
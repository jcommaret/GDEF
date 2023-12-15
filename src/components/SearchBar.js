import React, { useState } from "react";
import data from "../data/data.json";
import { FlatList } from "react-native";

const SearchBarFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    filterData(value);
  };

  const filterData = (searchTerm) => {
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  return (
    <View>
      <Text
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />

      <FlatList>
        {filteredData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </FlatList>
    </View>
  );
};

export default SearchBarFilter;

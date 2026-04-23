import { View, Text, StyleSheet } from "react-native";

export default function Temperatura({ actual, min, max, indiceDia }: any) {

  const textoDia =
    indiceDia === 0 ? "AYER" :
    indiceDia === 1 ? "HOY" :
    "MAÑANA";

          return (
            <View style={styles.container}>
              
              <Text testID="temp-current">
            {`${actual}°`}
          </Text> 

              <Text testID="temp-min">
          {`${min}°`}
        </Text>

        <Text testID="temp-max">
          {`${max}°`}
        </Text>
              {}
      <Text style={styles.day}>
        {textoDia}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", marginTop: 20 },

  main: {
    fontSize: 80,
    fontWeight: "bold",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  side: {
    fontSize: 22,
    marginHorizontal: 10,
  },

  separator: {
    fontSize: 18,
    color: "#999",
  },

  day: {
    marginTop: 10,
    fontSize: 14,
    letterSpacing: 2,
  }
  
});
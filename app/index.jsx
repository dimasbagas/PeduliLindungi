import { Image, StatusBar, Text, TextInput, View } from "react-native";

export default function Index() {
  return (
    <>
      <StatusBar
        StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#39D9C6",
          flex: 1,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>
          Sign your Account
        </Text>
        <Text style={{ textAlign: "center" }}>
          Enter your email and password to log in
        </Text>
        <Image source={require("../assets/images/gambar.png")}></Image>
        <View>
          <Text style={{ fontSize: 20 }}>Email</Text>
          <TextInput
            placeholder="Enter your email"
            style={{
              width: 301,
              height: 57,
              borderRadius: 10,
              paddingHorizontal: 20,
              borderColor: "#855757",
              borderWidth: 2,
              marginBottom: 10,
              fontSize: 20,
            }}
          ></TextInput>
          <Text style={{ fontSize: 20 }}>password</Text>
          <TextInput
            placeholder="Enter your password"
            style={{
              width: 301,
              height: 57,
              borderRadius: 10,
              paddingHorizontal: 20,
              borderColor: "#855757",
              borderWidth: 2,
              fontSize: 20,
            }}
          ></TextInput>
          <Text style={{textAlign: 'right', color: '#6200FF', marginTop: 5}}>Forget password?</Text>
        </View>
      </View>
    </>
  );
}

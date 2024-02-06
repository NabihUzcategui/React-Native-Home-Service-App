import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import TabNavigation from "./app/navigations/tabNavigation";
import Login from "./app/screens/LoginScreen/login";

// const tokenCache = {
//   async getToken(key) {
//     try {
//       return SecureStore.getItemAsync(key);
//     } catch (err) {
//       return null;
//     }
//   },
//   async saveToken(key, value) {
//     try {
//       return SecureStore.setItemAsync(key, value);
//     } catch (err) {
//       return;
//     }
//   },
// };

export default function App() {
  return (
    <ClerkProvider
      // tokenCache={tokenCache}
      publishableKey="pk_test_c21hcnQtZ29hdC04My5jbGVyay5hY2NvdW50cy5kZXYk"
    >
      <View style={styles.container}>
        {/* Sign in component */}
        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        {/* Sign out component */}
        <SignedOut>
          <Login />
        </SignedOut>

        <StatusBar style="auto" />
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
});

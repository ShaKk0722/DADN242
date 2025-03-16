import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import { StatusBar } from "expo-status-bar"
import { Link } from "expo-router"

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.title}>Misting System.</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Your system,{"\n"}your rules</Text>
          <Text style={styles.subheading}>Manage your system from{"\n"}anywhere, anytime</Text>
        </View>

        <Image
          source={{
            uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hUSOWP2ldiFzQflhUbswiPTVszH30c.png",
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.footer}>
        <Link href="/login" asChild>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Log in</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/register" asChild>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
        </Link>

        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuButtonText}>≡</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    marginTop: 40,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1a237e",
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  textContainer: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1a237e",
    marginBottom: 10,
  },
  subheading: {
    fontSize: 16,
    color: "#666",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 20,
    marginVertical: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#1a237e",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  loginButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  registerButton: {
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#1a237e",
  },
  registerButtonText: {
    color: "#1a237e",
    fontWeight: "bold",
  },
  menuButton: {
    padding: 10,
  },
  menuButtonText: {
    fontSize: 24,
  },
})
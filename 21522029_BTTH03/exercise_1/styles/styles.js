import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center", 
    paddingHorizontal: 16,
  },
  containerSignUp: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: '28%',
    width: 100, 
    height: 100,
    backgroundColor: "black",
    borderRadius: 50, 
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 12,
    textAlign: "center",
  },
  formContainer: {
    width: "90%", 
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 16, // Adds padding on left and right
    marginBottom: 12,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#D1D5DB", // Slate color
    alignItems: "center",
    width: "80%",
  },
  textInput: {
    flex: 1,
    paddingLeft: 8,
  },
  forgotPasswordContainer: {
    alignItems: "flex-end",
    width: "100%",
  },
  forgotPasswordText: {
    color: "#F472B6", // pink-400 equivalent
  },
  loginButton: {
    paddingVertical: 12,
    backgroundColor: "#F97316", // orange-500 equivalent
    borderWidth: 2,
    borderRadius: 8,
    marginVertical: 16,
  },
  loginButtonText: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
  },
  orContainer: {
    alignItems: "center",
    marginVertical: 16,
  },
  orText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },
  signupText: {
    textAlign: "center",
  },
  signupLink: {
    fontWeight: "bold",
    color: "#2563EB", // blue-600 equivalent
  },
  
  logo: {
    width: 80,
    height: 80,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    display: "flex",
  },
  logoIcon: {
    fontSize: 52,
    color: "#61dbfb",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  formContainer: {
    width: "100%",
    marginTop: 16,
  },
  inputGroup: {
    flexDirection: "row",
    padding: 12,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: "#c0c0c0",
    borderRadius: 8,
  },
  input: {
    flexGrow: 1,
    paddingLeft: 8,
  },
  button: {
    padding: 12,
    backgroundColor: "#f97316",
    borderWidth: 2,
    borderColor: "#f97316",
    borderRadius: 8,
    textAlign: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "white",
  },
  footerText: {
    textAlign: "center",
    marginTop: 16,
  },
  link: {
    fontWeight: "bold",
    color: "#2563eb",
  },

});

export default styles;

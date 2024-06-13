# A Material You Android Password Manager

## Overview
Very Simple Material You Android Password Manager is a lightweight application designed to help you securely manage your passwords on your Android device. With a user-friendly interface and minimalistic design, it aims to provide a hassle-free experience for storing and retrieving your sensitive information.

## Screenshots
<div style="display: flex; flex-direction: 'row';">
  <img src="https://github.com/ronitkrshah/password_manager/assets/118371892/71416867-b9bc-4f4e-870b-76777c5d0561" width=20%>
  <img src="https://github.com/ronitkrshah/password_manager/assets/118371892/db695a74-b6dc-468f-9c38-3680fdcd6484" width=20%>
  <img src="https://github.com/ronitkrshah/password_manager/assets/118371892/7dd631cb-a27e-4b01-8e27-cef96518a044" width=20%>
  <img src="https://github.com/ronitkrshah/password_manager/assets/118371892/5114b872-2cb6-4e9f-bc10-a9744359fc48" width=20%>
  <img src="https://github.com/ronitkrshah/password_manager/assets/118371892/daa1d08f-e7a8-4dbb-bca4-2f1a6e6bfabf" width=20%>
  <img src="https://github.com/ronitkrshah/password_manager/assets/118371892/9bc439dc-df45-4738-9916-8386bb90b790" width=20%>
</div>

## Installation
Go To [Releases](https://github.com/ronitkrshah/password_manager/releases) and Download latest build.

## 🛡️ Secure and Stylish Features 📱
- **Material Design Magic**: Experience a sleek and intuitive interface that's in sync with Google's Material Design 3 principles. It's not just modern; it's a joy to use!

- **Dynamic Color Delight**: Dive into a world of visual dynamism! This app seamlessly supports Dynamic Colors on Android 12+ devices, ensuring a vibrant and engaging user experience.

- **Biometric Auth**: Say goodbye to passwords and hello to convenience! Unlock the app effortlessly with Biometric authentication. Your data stays safe without the hassle.

- **AES Encryption Fortress**: Ensuring the security of passwords is our top priority. With AES Encryption, they're locked down tight, guaranteeing the confidentiality and security of your data.

- **Import and Export Data**: Seamlessly manage your passwords! Easily import and export your data, making it convenient to move between devices or back up your valuable information.

- **No Internet Connection**: This App doesn't require an Internet Connection

## Build Guide 🛠️

Follow these essential steps to build your app:

1. **Set Your Personal Secret Key**: Navigate to `src/constants/keys.ts` and set your personal secret key on variable `APP_ENCRYPTION_KEY`. This ensures the security of your app's data.
    - Example
      ```typescript
      // Example
      export const APP_ENCRYPTION_KEY = '6FPZi8xLZS6O0xJMJx180DtAQOdWVLr0';
      ```

3. **Build the Android App**:
   - Navigate to the `android` directory in your project.
   - Run the following command:
     ```
     ./gradlew assembleRelease
     ```
   This command will compile your Android app into a release build.

4. **Locate Your APK(s)**:
   Once the build process is complete, you can find your APK(s) in the `android/app/build/outputs/apk/release/` directory.

Following these steps will help you successfully build and distribute your app, providing users with a secure and reliable password management solution.


## Contributions
Contributions are welcome! If you encounter any bugs, have feature requests, or would like to contribute to the development of the app, please feel free to submit an issue or pull request on our GitHub repository.

## License
This project is licensed under the [GPL v3](LICENSE).

# Steps to download the apk (Android only) : 
~ Right click on the file named as contacts.apk , click on save link as and save it to your local machine.
~ Now you can simply install the apk file on your android device and it is ready to use.

# Libraries and plugins : 
1. expo-cli (global)
2. expo-status-bar
3. react
4. react-native
5. @bable/core
6. To run on web please add (npx expo install react-dom react-native-web @expo/webpack-config) to the project.

# Code Explanation : 
* The 'data' array contains a list of contacts which is acting as the source of data for this apk . Each contact object has properties as id, name, number, and email.
* The ContactList component is defined as a functional component using the useState hook to manage state variables. It initializes contact and selectContact as empty strings.
  which will be updated in the later stages.
* The contactSearch function is a handler that updates the contact state variable when the user types in the search input.
* The pressedContact function is called when a contact is pressed. It updates the selectContact state variable with the selected contact.
* The popupClose function is called when the user closes the contact details popup. It resets the selectContact state variable to null.
* The contactFiltered variable filters the data array based on the contact state variable. It returns a new array that contains only the contacts whose names match
  the search query.
* The renderItem function is a callback function used by the FlatList component to render each contact item. It displays the contact's name and number, and when
  pressed, it calls the pressedContact function to show the contact details.
* The ContactList component returns the JSX elements representing the user interface. It consists of a search input field, a FlatList component displaying the filtered
  contacts, and a modal that appears when a contact is selected.
* The modal is shown when the selectContact state variable is not null. It displays the selected contact's details, including their name, a user icon, call, text, and
  video icons, and their phone number and email. There is also a "Close" button that triggers the popupClose function when pressed.
* At last the ContactList component is exported as default and get imported in App.js from which we are showing the output in the frontend.

<!-- In case unable to download the apk from the github repo please refer to this G-drive link -->
* https://drive.google.com/file/d/1WXhOMbqSydJtQqQ5gpo2Q9M2xf_wDNTB/view?usp=sharing

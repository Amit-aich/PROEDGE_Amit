# Steps to download the apk (Android only) : 
* Right click on the file named as Contacts.apk , click on save link as and save it to your local machine.
* Now you can simply install the apk file on your android device and it is ready to use.

# Libraries and pl
ugins : 
1. expo-cli (global)
2. expo-status-bar
3. expo-contacts(to fetch contact from device)
4. react
5. react-native
6. @bable/core
7. To run on web please add (npx expo install react-dom react-native-web @expo/webpack-config) to the project.

# Code Explanation : 

* The useEffect hook is used to load the contacts when the component mounts.
   Inside the hook, the loadContacts function is defined as an asynchronous function.
   The requestPermissionsAsync function from the Contacts module is called to request contact access permission ,
   if the permission is granted (status === 'granted'), the getContactsAsync function is called to retrieve contact data.
   If contacts are found (data.length > 0), the retrieved data is stored in the data state variable.
 
 * The contactSearch function is defined to update the contact state variable with the user's search query.
   The pressedContact function is defined to update the selectContact state variable with the selected contact object.
   The popupClose function is defined to reset the selectContact state variable and close the contact details popup.
   The contactFiltered variable uses the filter function on the data state variable to filter contacts based on the contact search query.

* The renderItem function is defined to render each contact item in the FlatList. It displays the contact's name and phone number if available, along with a user   logo image.

* The renderContactDetails function is defined to render the contact details popup as a Modal component. It displays the selected contact's details, including       name, user icon, and icons for call, text, and video actions.The phone number is displayed if available, a close button is provided to close the popup.

*In case unable to download the apk from the github repo please refer to this G-drive link :
* https://drive.google.com/file/d/1ltmSzAJUc4l555asuwTG27iKFEFu-1U3/view?usp=sharing

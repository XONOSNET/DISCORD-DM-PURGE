/* DISCORD DM MESSAGE REMOVAL SCRIPT
 * ---------------------------------
 * I do not take credit for writing this script. I've only taken what was written and fixed it + provide instructions
 * to make it actually work. It will delete all of YOUR messages from a DM but it will not remove the other person(s)
 * as you do not have permission to do so unless you're the creator of a group chat.
 *
 * INSTRUCTIONS
 * ---------------------------------
 * Note: You MUST open discord in a desktop browser as this will not work in the discord mobile or pc/mac apps. While
 * you can open dev tools in the app, you cannot easily obtain the token id which is crucial.
 *
 * Step  1.) Open Chrome or Firefox
 * Step  2.) Navigate to https://discordapp.com and login.
 * Step  3.) Navigate to the DM you wish to clear out.
 * Step  4.) Go to Discord Settings > Appearance > Advanced > Turn on Developer Mode
 * Step  5.) Go to the last message you sent where you want the deletion to start, hover over it, open the context menu
 *           by clicking the 3-dotted line icon and click "Copy ID".
 * Step  6.) In the script below, paste in the message ID in between the single quotes of the `var before = '<here>';`
 * Step  7.) Open Dev Tools
 *           - Chrome Users Press F12
 *           - Firefox Users Press CTRL+SHIFT+I
 * Step  8.) Navigate to local storage in the dev tools.
 *           - Chrome Users: Applications Tab -> Local Storage -> https://discordapp.com
 *           - Firefox Users: Storage Tab -> Local Storage -> https://discordapp.com
 * Step  9.) Scroll to the bottom and hit F5 (Refresh Page). You'll notice that a key labeled "token" appears and disappears.
 *           That is your discord session token. Press F5 again, double-click the value and CTRL+C it before it disappears.
 *           Note: You may need to attempt this several times to actually get it.
 * Step 10.) Paste your token ID into the authToken variable. It should look something like this:
 *
 *           const authToken = "MTY2MzE5MTEwNTA5MDM1NTIw.DyOMNw.1RQS9UdaG6mUufW6Ka5AvkZXXD0";
 *
 * Step 11.) Your script is now ready to be run. Copy and paste the entire script into the console of your browser's dev tools.
 *           Both Chrome & Firefox have a Console tab. Simply paste it into the console area and hit enter. You will begin to
 *           see your messages remove from the chat history starting from the message ID you entered.
 */


var before = ''; // <-- Delete all messages before this message id.
clearMessages = function(){
    
    const authToken = ""; // <--- THIS is the most important thing. See instructions on how to get it.
    const channel = window.location.href.split('/').pop();
    const baseURL = `https://discordapp.com/api/channels/${channel}/messages`;
    const headers = {"Authorization": authToken };

    let clock = 0;
    let interval = 500;

    function delay(duration) {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(), duration);
        });
    }

    fetch(baseURL + '?before=' + before + '&limit=100', {headers})
        .then(resp => resp.json())
        .then(messages => {
        return Promise.all(messages.map((message) => {
            before = message.id;
            return delay(clock += interval).then(() => fetch(`${baseURL}/${message.id}`, {headers, method: 'DELETE'}));
        }));
    }).then(() => clearMessages());
}
clearMessages();

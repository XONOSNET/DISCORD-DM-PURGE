<h2><u>DISCORD DM MESSAGE REMOVAL SCRIPT</u></h2>
<hr></hr>
<p><u>I do not take credit for writing this script</u>. I've only taken what was written and fixed it + provide instructions
to make it actually work. It will delete all of YOUR messages from a DM but it will not remove the other person(<i>s</i>)
as you do not have permission to do so unless you're the creator of a group chat.</p>
<hr>
<h3>INSTRUCTIONS</h3>
<hr></hr>
<p><strong>Note</strong>: You MUST open discord in a desktop browser as this will not work in the discord mobile or pc/mac apps. While
you can open dev tools in the app, you cannot easily obtain the token id which is crucial.</p>
<hr></hr>
<p><strong>Step  1</strong>.) Open Chrome or Firefox.</p>
<p><strong>Step  2</strong>.) Navigate to https://discordapp.com and login.</p>
<p><strong>Step  3</strong>.) Navigate to the DM you wish to clear out.</p>
<p><strong>Step  4</strong>.) Go to Discord Settings > Appearance > Advanced > Turn on <strong>Developer Mode</strong></p>
<p><strong>Step  5</strong>.) Go to the last message you sent where you want the deletion to start, hover over it, open the context menu</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;by clicking the 3-dotted line icon and click "Copy ID".</p>
<p><strong>Step  6</strong>.) In the script below, paste in the message ID in between the single quotes of the `var before = '<here>';`</p>
<p><strong>Step  7</strong>.) Open Dev Tools</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Chrome Users Press F12</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Firefox Users Press CTRL+SHIFT+I</p>
<p><strong>Step  8</strong>.) Navigate to local storage in the dev tools.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Chrome Users: Applications Tab -> Local Storage -> https://discordapp.com</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Firefox Users: Storage Tab -> Local Storage -> https://discordapp.com</p>
<p><strong>Step  9</strong>.) Scroll to the bottom and hit F5 (Refresh Page). You'll notice that a key labeled "token" appears and disappears.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;That is your discord session token. Press F5 again, double-click the value and CTRL+C it before it disappears.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Note</strong>: You may need to attempt this several times to actually get it.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Note</strong>: Image examples of what this looks like are below.</p>
<p><strong>Step 10</strong>.) Paste your token ID into the authToken variable. It should look something like this:</p>
        
                  const authToken = "MTY2MzE5MTEwNTA5MDM1NTIw.DyOMNw.1RQS9UdaG6mUufW6Ka5AvkZXXD0";
        
<p><strong>Step 11</strong>.) Your script is now ready to be run. Copy and paste the entire script into the console of your browser's dev tools.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Both Chrome & Firefox have a Console tab. Simply paste it into the console area and hit enter. You will begin to</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;see your messages remove from the chat history starting from the message ID you entered.</p>
<hr></hr>
<p><u>Firefox</u></p>
<p><img src="https://cdn.discordapp.com/attachments/479347425316962314/535864075440095242/unknown.png"/></p>

<p><u>Chrome</u></p>
<p><img src="https://media.discordapp.net/attachments/479347425316962314/535864423986757647/unknown.png"/></p>

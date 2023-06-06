![image](https://github.com/TristanCopley/delnorte-csa/assets/89225438/bc74339e-0ce7-45eb-88be-42ecec4a95d5)

# Del Norte CSA Website Redone

An easier and simpler way for Mr. Mortensen to interact with his students and for his students to interact with his content during the entire school year for CSA. A better and cleaner version of jupyter notebook documentation.

## Logging in

All one needs to access the content of the website is signing in through Google. With a login, you will be able to access the course material and with submissions of frqs and mcqs, your name will be associated with your work.


## Developing

When cloning the site and developing, one will need to run ` npm install -g pnpm ` in their bash terminal for the project. This will only work with updated versions of npm and nvm/node.js.  

Use ` curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash ` to install the newest version of nvm (Node Version Manager). 
(As of May 2023)  

After installating nvm, run ` nvm install node `.  

After all installations are finished, run ` pnpm i ` in terminal.

To run a local version of the server, run ` pnpm run dev `

All commands:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
nvm install node
npm install -g pnpm
pnpm i
pnpm run dev
```

## Building

Del Norte CSA by Us is open source code, and free to develop on for everyone and be attributed for their own purpose

## Formatting and Adding Files

All routing is based on where each page is located in the project. Add files of certain pages by using page.svelte and layout.svelte files, then work using markdown. There are many samples within the project that will make understanding how to add to the project much simpler.

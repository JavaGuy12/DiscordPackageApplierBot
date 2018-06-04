const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Fortnite Chat Package Applier");
});

let prefix = "?";

client.on("message", (message) =>{
  
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if(!message.author.bot) return;
  
  if(command === prefix + "role"){
    var username = args[0];
    var role = args[1];
    var roleObj = message.guild.roles.find("name", role);
    
    if(roleObj === null){
     message.channel.send("Oops! That role isn't defined!");
      return;
    }
    
    var member = message.guild.members.get("name", username);
    
    member.addRole(roleObj);
    
    message.guild.channels.find("name", "general").send("Thanks for your donation, " + username + "!");
  }
  });
  
client.login(process.env.TOKEN);

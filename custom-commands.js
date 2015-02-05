/**
 * Custom Commands
 *
 * This is bascially where most of the core custom commands goes.
 * Commands Table of Contents:
 */
 
var customCommands = {
	/*********************************************************
	 * Override commands
	 *********************************************************/
	join: function(target, room, user, connection) {
		if (!target) return false;
		var targetRoom = Rooms.get(target) || Rooms.get(toId(target));
		if (!targetRoom) {
			return connection.sendTo(target, "|noinit|nonexistent|The room '" + target + "' does not exist.");
		}
		if (targetRoom.isPrivate && !user.named) {
			return connection.sendTo(target, "|noinit|namerequired|You must have a name in order to join the room '" + target + "'.");
		}
		if (!user.joinRoom(targetRoom || room, connection)) {
			return connection.sendTo(target, "|noinit|joinfailed|The room '" + target + "' could not be joined.");
		}
		if (target.toLowerCase() == "lobby") {
			return connection.sendTo('lobby','|html|<div class="Broadcast-yellow" border="5"><center><img src="http://i58.tinypic.com/2lj18o6.jpg"></center><br />' +
                                        '<center><b><font size="4">Welcome to Universal Server!</b></font><br>' +       
                                        'Here at our server we call home we have a community of our own. The community offers things like Sports, Casino, Pokemon Help, League, Tiers, and more. What makes this server special you say is what you make of it, Our guestv are the most important people for our server, without you guys it not really a server is it?<br>' +
                                        'Well if you need any help, ask an Staff {Consider that their symbols show as an; Driver (%), Moderator (@), Leader (&), or an Admin (~)<br>' +
                                        'If you need anything or need help with a different server, feel free to pm BeforeMath, Judgmental, Or Judge Joe Brownz.<br>' +
                                        'We hope you have fun while you\'re here at the InterVersal Server! If so, then please be sure to tell your friends about us!<br>' +
                                        '</u></b></center><br/><center><a href ="https://gist.github.com/E4Arsh/8577715"><b>This Server is hosted By BlakJack</b></a></center><br/><br/> ' +
                                        '<hr width="85%">' +
                                        '<center><a href="http://theinternationserver.weebly.com/"><button class="blackbutton" title="Site"><font color="red"><b>Site</b></a></button>   |   <a href="http://universityis.boards.net/"><button class="blackbutton" title="Forums"><font color="red"><b>Forums</b></a></button>' +
                                        '</div>');
		}
	},

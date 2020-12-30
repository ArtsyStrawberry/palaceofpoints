function bookmarklet() {
  var studioid = location.href.replace(/\D+/g, '');
    if(document.getElementById("curator-action-bar")) {
      var div = document.createElement("span");
      div.innerHTML = '<div class="button grey small" style="margin-left:10px;color:red;font-weight:bold;" id="WLpromote"><span>Promote New Manager</span></div><div class="button grey small" style="margin-left:10px;color:red;font-weight:bold;" id="WLinvite"><span>Invite New Manager</span></div><div class="button grey small" style="margin-left:10px;color:red;font-weight:bold;" id="WLleave"><span>Leave all Studios</span></div>';
      document.getElementById("curator-action-bar").appendChild(div);
alert("Hello! Welcome to the PoP Manager Invitation + Promotion toolkit by ArtsyStrawberry. This toolkit contains buttons to invite and promote a new PoP manager in all of the banking studios, the main studio, and the manager discussion. There is also an option to remove yourself from all PoP affiliated studios. Press OK to proceed.");
      document.getElementById("WLpromote").onclick = function() {
        var user = prompt("Type the username of the scratcher to promote in ALL of the PoP banking studios + main studio + manager discussion! Please ensure that they have been invited to all of the studios before proceeding.");
        if(!user) return;
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 4127027 + "/promote/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5228741 + "/promote/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 4192306 + "/promote/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 4192310 + "/promote/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 4201277 + "/promote/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 4380199 + "/promote/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 4647409 + "/promote/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 4931594 + "/promote/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5088204 + "/promote/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5163881 + "/promote/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5225333 + "/promote/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5268384 + "/promote/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5306784 + "/promote/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5348864 + "/promote/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5516116 + "/promote/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5586664 + "/promote/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5647632 + "/promote/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5750167 + "/promote/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5843568 + "/promote/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 6051843 + "/promote/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 14538307 + "/promote/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 25093561 + "/promote/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 25383792 + "/promote/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 25736997 + "/promote/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 25979361 + "/promote/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 26317863 + "/promote/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 26537059 + "/promote/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 26704289 + "/promote/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 26919486 + "/promote/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 27192324 + "/promote/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 27509302 + "/promote/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 27859968 + "/promote/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 28146382 + "/promote/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 28403501 + "/promote/?usernames=" + user});
        alert("Promoted " + user + " to manager in all studios. Refresh to see updated changes.");
      }

      document.getElementById("WLinvite").onclick = function() {
        var user = prompt("Type the username of the scratcher to invite to ALL of the PoP banking studios + main studio + manager discussion! Please ensure that they have been promoted to manager before proceeding.");
        if(!user) return;
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 4127027 + "/invite_curator/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5228741 + "/invite_curator/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 4192306 + "/invite_curator/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 4192310 + "/invite_curator/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 4201277 + "/invite_curator/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 4380199 + "/invite_curator/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 4647409 + "/invite_curator/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 4931594 + "/invite_curator/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5088204 + "/invite_curator/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5163881 + "/invite_curator/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5225333 + "/invite_curator/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5268384 + "/invite_curator/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5306784 + "/invite_curator/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5348864 + "/invite_curator/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5516116 + "/invite_curator/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5586664 + "/invite_curator/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5647632 + "/invite_curator/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5750167 + "/invite_curator/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5843568 + "/invite_curator/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 6051843 + "/invite_curator/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 14538307 + "/invite_curator/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 25093561 + "/invite_curator/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 25383792 + "/invite_curator/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 25736997 + "/invite_curator/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 25979361 + "/invite_curator/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 26317863 + "/invite_curator/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 26537059 + "/invite_curator/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 26704289 + "/invite_curator/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 26919486 + "/invite_curator/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 27192324 + "/invite_curator/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 27509302 + "/invite_curator/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 27859968 + "/invite_curator/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 28146382 + "/invite_curator/?usernames=" + user});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 28403501 + "/invite_curator/?usernames=" + user});
        alert("Invited " + user + " to all studios. Refresh to see updated changes.");
      }

        document.getElementById("WLleave").onclick = function() {
        var confirmation = confirm("Leave ALL PoP studios? Please confirm.");
        if(!confirmation) return;
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 4127027 + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5228741 + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 4192306 + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 4192310 + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 4201277 + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 4380199 + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 4647409 + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 4931594 + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5088204 + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5163881 + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5225333 + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5268384 + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5306784 + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5348864 + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5516116 + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5586664 + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5647632 + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5750167 + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 5843568 + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 6051843 + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 14538307 + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 25093561 + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 25383792 + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 25736997 + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 25979361 + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 26317863 + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 26537059 + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 26704289 + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 26919486 + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 27192324 + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 27509302 + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 27859968 + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 28146382 + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
        $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + 28403501 + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
        location.reload();
      }
    } else {
      var x = confirm("You are not a manager in this studio. Only possible action is to leave. If you want to leave, please press OK");
      if(x) {
        var y = confirm("Leave studio? Please confirm.");
        if(y) {
          $.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + studioid + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
          location.reload();
        }
      }
    }
}

if(location.host === "scratch.mit.edu" && document.getElementsByClassName("media-grid curators").length && !(document.getElementById("WLpromote"))) bookmarklet();

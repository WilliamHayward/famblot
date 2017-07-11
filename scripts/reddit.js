module.exports = function(robot) {
    robot.hear(/\/?r\/(.*) ?/i, function(res) {
        if (res.message.user.name.toLowerCase() !== "famblot") {
            var subreddit = res.match[1].split(" ")[0];
            res.send("https://reddit.com/r/" + subreddit);
        }
    });
}

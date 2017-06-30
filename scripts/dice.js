module.exports = function(robot) {
    function rollDice(sides) {
        return Math.floor(Math.random() * sides) + 1;
    }

    robot.respond(/roll ?(.*)?/i, function(res) {
        if (res.match.length > 1 && res.match[1] !== undefined) {
            var list = res.match[1].split(' ');
            var dice;
            var count;
            var sides;
            var results;
            var result;
            var total;
            for (i = 0; i < list.length; i++) {
                dice = list[i];
                if (dice.match(/[0-9]+d[0-9]+/)) {
                    count = dice.split('d')[0];
                    sides = dice.split('d')[1];
                    if (count > 99) {
                        res.send(dice + ": That is too many dice. I only have small robotic hands.");
                        return;
                    }
                    results = "";
                    total = 0;
                    for (d = 0; d < count; d++) {
                        if (d > 0) {
                            results += ", ";
                        }
                        result = rollDice(sides);
                        results += result;
                        total += result;
                    }

                    if (count > 1) {
                        results = dice + ": (" + results + ") = " + total;
                    } else {
                        results = dice + ": " + total;
                    }
                    
                    res.send(results);
                } else {
                    res.send(dice + ": That ain't no dice I ever heard of. #d# format only, pal.");
                }
            }
        } else {
            res.send("Gotta give me some dice to work with, buddy.")
        }
    })
}

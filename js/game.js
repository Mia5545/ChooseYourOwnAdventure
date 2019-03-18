// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You come across a plain black door and a colorful door",
            choices: [
                {
                    text: "Enter the black door",
                    nextLevel: "investigation_room",
                },

                {
                    text: "Enter the colorful door",
                    nextLevel: "candy_room",
                },
            ]
        },

        candy_room: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: " Good Choice :) Choose a weapon",
            choices: [
                {
                    text: "Knife",
                    nextLevel: "Slaying",
                }
                ,
                {
                    text: "pillow",
                    nextLevel: "guilty_room",
                },
            ]
        },
        guilty_room: {
            message:"Glad to know you are a lovely person, but that won't help you",
            choices: [
                {
                    text: "start over",
                    nextLevel: "start",
                },
             ]
        },
        investigation_room: {
            message: "The colorful door is the right answer...",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
}








const quizData = [{
        levelName: "Beginner",
        questions: [{
                img: "https://betacssjs.chesscomfiles.com/bundles/web/images/offline-play/standardboard.png",
                text: "What color begins the game ?",
                points: 10,
                negativePoints: -5,
                options: [{
                        value: "White",
                        isCorrect: true
                    },
                    {
                        value: "Black",
                        isCorrect: false
                    }
                ]
            },
            {
                img: "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/pdrpnht/phptRZQID.png",
                text: "How does the knight move ?",
                points: 10,
                negativePoints: -5,
                options: [{
                        value: "L-Shape",
                        isCorrect: true
                    },
                    {
                        value: "S-shape",
                        isCorrect: false
                    }
                ]
            },
            {
                img: "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/pdrpnht/phphyuHlD.png",
                text: "Can a king directly put another king in checkmate ?",
                points: 10,
                negativePoints: -5,
                options: [{
                        value: "False",
                        isCorrect: true
                    },
                    {
                        value: "True",
                        isCorrect: false
                    }
                ]
            },
            {
                img: "https://betacssjs.chesscomfiles.com/bundles/web/images/offline-play/standardboard.png",
                text: "How many of the 16 chess pieces have legal moves on your first move ?",
                points: 10,
                negativePoints: -5,
                options: [{
                        value: "10",
                        isCorrect: true
                    },
                    {
                        value: "8",
                        isCorrect: false
                    }
                ]
            },
            {
                img: "https://clanquest.org/wiki/images/b/b5/Scandinavian_001.png",
                text: "How does the pawn capture ?",
                points: 10,
                negativePoints: -5,
                options: [{
                        value: "forwards",
                        isCorrect: false
                    },
                    {
                        value: "diagonally",
                        isCorrect: true
                    }
                ]
            },
        ]
    },

    {
        levelName: "Advanced",
        questions: [{
                img: "https://i2.wp.com/chesspathways.com/wp-content/uploads/2019/08/6a-300x300.png",
                text: "Which gambit is shown in the above picture ?",
                points: 10,
                negativePoints: -5,
                options: [{
                        value: "King's Gambit",
                        isCorrect: false
                    },
                    {
                        value: "Queen's Gambit",
                        isCorrect: true
                    },
                ]
            },
            {
                img: "http://4.bp.blogspot.com/-0-VyPRD2kHc/Ui4qb3VeeJI/AAAAAAAAFg8/5W7er8U4iz0/s1600/anand.jpg",
                text: "How many Times did Vishy Anand become World Champion ?",
                points: 10,
                negativePoints: -5,
                options: [{
                        value: "Five",
                        isCorrect: true
                    },
                    {
                        value: "Four",
                        isCorrect: false
                    },
                ]
            },
            {
                img: "https://media.wired.com/photos/5932a09d2a990b06268abee5/191:100/w_1280,c_limit/deep-blue-kasparov.jpg",
                text: "Which computer defeated Garry Kasparov in 1997 ?",
                points: 10,
                negativePoints: -5,
                options: [{
                        value: "Deep Blue",
                        isCorrect: true
                    },
                    {
                        value: "Stock fish",
                        isCorrect: false
                    },
                ]
            },
            {
                img: "https://static.toiimg.com/thumb/msid-80315299,width-1200,height-900,resizemode-4/.jpg",
                text: "Whom did Magnus Carlsen defeat to become the world champion ?",
                points: 10,
                negativePoints: -5,
                options: [{
                        value: "Vishwanathan Anand",
                        isCorrect: true
                    },
                    {
                        value: "Anish Giri",
                        isCorrect: false
                    }
                ]
            },
            {
                img: "https://img.latestgkgs.com/2017/12/30/-1514616203.jpg",
                text: "Vishwanathan Anand is the first sportsperson to win the Padma Vibhushan Award ?",
                points: 10,
                negativePoints: -5,
                options: [{
                        value: "True",
                        isCorrect: true
                    },
                    {
                        value: "False",
                        isCorrect: false
                    }
                ]
            },
        ]
    }
]


module.exports = { quizData };
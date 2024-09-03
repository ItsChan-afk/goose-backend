const data = {
    roles: [
        {
            name: 'Astral',
            slug: 'astral',
            role: 'goose',
            short: 'Can send spirit through walls',
            description: 'The Astral can take their spirit out of their body for 10 seconds. Their spirit outside of the body moves slowly, can not see other player\'s colors or names and has a low vision range.',
            image: 'https://goose-backend-g6bw.vercel.app/gooses_images/astral.png'
        },
        {
            name: 'Avenger',
            slug: 'avenger',
            role: 'goose',
            short: 'You can temporarily kill if you see someone die.',
            description: 'If the Avenger witnesses a murder, they gain the ability to kill one player within the next 10 seconds, does not have a kill cooldown - if they witness another murder shortly after previously using their ability to kill a player, they immediately regain the ability to temporarily kill another player.',
            image: 'https://goose-backend-g6bw.vercel.app/gooses_images/avenger.png'
        },
        {
            name: 'Bird Watcher',
            slug: 'bird-watcher',
            role: 'goose',
            short: 'You can see through walls with limited vision.',
            description: 'You can see through walls with limited tunnel vision and see slightly further as well.',
            image: 'https://goose-backend-g6bw.vercel.app/gooses_images/bird_watcher.png'
        },
        {
            name: 'Canadian',
            slug: 'canadian',
            role: 'goose',
            short: 'Your body will auto self-report after 1 second if you are killed or swallowed.',
            description: 'Your body will auto self-report after 1 second if you are killed or swallowed. This is a useful role. Claiming Canadian is beneficial to the game as other players can check who killed you.',
            image: 'https://goose-backend-g6bw.vercel.app/gooses_images/canadian.png'
        },
        {
            name: 'Canibal',
            slug: 'canibal',
            role: 'duck',
            short: 'Can eat one dead body removing potential evidence of a murder.',
            description: 'When someone dies, their body will be pointed to by an arrow where you can eat the body.',
            image: 'https://goose-backend-g6bw.vercel.app/gooses_images/canibal.png'
        },
        {
            name: 'Celebrity',
            slug: 'celebrity',
            role: 'goose',
            short: 'All geese and only GEESE are alerted when you are killed.',
            description: 'Geese will not be alerted if the Celebrity is killed by the environment, or by the Assassin during a meeting. However, geese will still be alerted if the Celebrity is killed by a bomb initially planted by the Demolitionist.',
            image: 'https://goose-backend-g6bw.vercel.app/gooses_images/celebrity.png'
        },
        {
            name: 'Demolitionist',
            slug: 'demolitionist',
            role: 'duck',
            short: 'Plant bombs on birds to make them explode. Birds can also pass the bomb around.',
            description: 'The Demolitionist\'s Kill button will plant a bomb on the selected target. The player targeted will not know there is a bomb on them until it starts ticking, after which they will have 12 seconds to find another person to pass the bomb to with E or pass it automatically when close to someone.',
            image: 'https://goose-backend-g6bw.vercel.app/gooses_images/demolitionist.png'
        },
        {
            name: 'Dodo',
            slug: 'dodo',
            role: 'neutral',
            short: 'Get voted out to win.',
            description: 'The Dodo Bird wins if they are voted out at a meeting, they do not win if killed by another role.',
            image: 'https://goose-backend-g6bw.vercel.app/gooses_images/dodo.png'
        },
        {
            name: 'Dueling Dodo',
            slug: 'duo-dodo',
            role: 'neutral',
            short: 'Get voted out after the other dodo dies to win.',
            description: 'Once you faked all your tasks, you will get a Kill Button that can only be used on the other Dodo.',
            image: 'https://goose-backend-g6bw.vercel.app/gooses_images/dueling_dodo.png'
        },
        {
            name: 'Engineer',
            slug: 'engineer',
            role: 'goose',
            short: 'You can temporarily vent and see when and where alive ducks use their sabotages.',
            description: 'Some maps will allow Engineer to stay in hiding locations permanently like Basement or Goose Chapel. Engineer also has the ability to temporarily see where Live Ducks activated a Sabotage.',
            image: 'https://goose-backend-g6bw.vercel.app/gooses_images/engineer.png'
        },
        {
            name: 'Esper',
            slug: 'esper',
            role: 'duck',
            short: 'Instead of killing, you kill someone over time with your power and can talk to them from afar before they die.',
            description: 'Instead of killing, you mark a player with your kill button. After 10 seconds, you cannot move and will see things from their perspective. During this time, if proximity chat is on, you can communicate with your victim. Another timer of 10 seconds will start ticking down, and when that finishes, your victim finally dies. This activates Canadian (You self-report) and Avenger (They can kill now) despite you not directly killing them.',
            image: 'https://goose-backend-g6bw.vercel.app/gooses_images/esper.png'
        },
        {
            name: 'Falcon',
            slug: 'falcon',
            role: 'neutral',
            short: 'Win as the last survivor by killing everyone or simply surviving. You can only skip during meetings.',
            description: 'The falcon is a neutral role that can kill but cannot vent nor sabotage. To win, the falcon must either be among the last 3 and survive for 45 seconds, or be the last bird standing. The geese can only win by tasks and ducks can only win by sabotages while the falcon is alive. The falcon must skip vote for every meeting.',
            image: 'https://goose-backend-g6bw.vercel.app/gooses_images/falcon.png'
        },
        {
            name: 'Hitman',
            slug: 'hitman',
            role: 'duck',
            short: 'Kill your assigned target for a bonus.',
            description: 'I actually have never played this role so use wiki instead :)',
            image: 'https://goose-backend-g6bw.vercel.app/gooses_images/hitman.png'
        },
        {
            name: 'Invisible',
            slug: 'invisible',
            role: 'duck',
            short: 'You can turn temporarily invisible. You cannot see people while invisible.',
            description: 'You can kill people while invisible I think? hehe',
            image: 'https://goose-backend-g6bw.vercel.app/gooses_images/invisible.png'
        },
        {
            name: 'Lobbyist',
            slug: 'lobbyist',
            role: 'goose',
            short: 'Get votes within meetings to gain the ability to kill.',
            description: 'You can ask the people at the meeting to vote for you. You need a certain amount of votes to unlock the ability to kill.',
            image: 'https://goose-backend-g6bw.vercel.app/gooses_images/lobbyist.png'
        },
        {
            name: 'Lovers (goose)',
            slug: 'lovers-g',
            role: 'goose',
            short: 'Stay alive with your significant other who will be a goose or a deceiving duck.',
            description: 'If one of you dies, the other one dies as well. You can win if you two are in the last three. Goose pairs of lovers can stick by each other to reduce your risk of dying by solo killers, but not duo or trio killers. Your top priorities are to identify the ducks and falcon and hope to get a goose win. If there are only 4 players left, you and your lover can trick one of them into voting the other for a lovers win.',
            image: 'https://goose-backend-g6bw.vercel.app/gooses_images/lovers.png'
        },
        {
            name: 'Lovers (duck)',
            slug: 'lovers-d',
            role: 'duck',
            short: 'Stay alive with your significant other who will be a goose or a deceiving duck.',
            description: 'If they are among the last 3 people, they win, overriding duck or goose victory.',
            image: 'https://goose-backend-g6bw.vercel.app/gooses_images/lovers.png'
        },
        {  
            name: 'Medium',
            slug: 'medium',
            role: 'goose',
            short: 'You can see the amount of ghosts that are in game.',
            description: 'You should constantly use your ability to know when someone dies in the game to know who could be the potential ducks or neutrals.',
            image: 'https://goose-backend-g6bw.vercel.app/gooses_images/medium.png'
        },
    
    ]
}

module.exports = data
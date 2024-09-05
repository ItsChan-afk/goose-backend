const data = {
  roles: [
    {
      name : "Assassin",
      slug : 'assassin',
      role : 'duck',
      short : "Can kill people in meetings",
      description : 'You can kill people in meetings by correctly guessing their roles. Be careful if you guess wrong you die',
      image : 'https://goose-backend-g6bw.vercel.app/gooses_images/assassin.png'
    },
    {
      name: "Astral",
      slug: "astral",
      role: "goose",
      short: "Can send spirit through walls",
      description:
        "The Astral can take their spirit out of their body for 10 seconds. Their spirit outside of the body moves slowly, can not see other player's colors or names and has a low vision range.",
      image: "https://goose-backend-g6bw.vercel.app/gooses_images/astral.png",
    },
    {
      name: "Avenger",
      slug: "avenger",
      role: "goose",
      short: "You can temporarily kill if you see someone die.",
      description:
        "If the Avenger witnesses a murder, they gain the ability to kill one player within the next 10 seconds, does not have a kill cooldown - if they witness another murder shortly after previously using their ability to kill a player, they immediately regain the ability to temporarily kill another player.",
      image: "https://goose-backend-g6bw.vercel.app/gooses_images/avenger.png",
    },
    {
      name : 'Bodyguard',
      slug : 'bodyguard',
      role : 'goose',
      short : 'Protect your assigned targetto get a bonus. If you are between your target and the killer, you die instead.',
      description : 'Bodyguard is a goose role, of which you have one Non-Duck target (can be some neutrals), to protect from the hitman or other killers. You are guaranteed to spawn with an enemy hitman, and you both have the same target',
      image : 'https://goose-backend-g6bw.vercel.app/gooses_images/bodyguard.png'
    },
    {
      name: "Bird Watcher",
      slug: "bird-watcher",
      role: "goose",
      short: "You can see through walls with limited vision.",
      description:
        "You can see through walls with limited tunnel vision and see slightly further as well.",
      image:
        "https://goose-backend-g6bw.vercel.app/gooses_images/bird_watcher.png",
    },
    {
      name: "Canadian",
      slug: "canadian",
      role: "goose",
      short:
        "Your body will auto self-report after 1 second if you are killed or swallowed.",
      description:
        "Your body will auto self-report after 1 second if you are killed or swallowed. This is a useful role. Claiming Canadian is beneficial to the game as other players can check who killed you.",
      image: "https://goose-backend-g6bw.vercel.app/gooses_images/canadian.png",
    },
    {
      name: "Cannibal",
      slug: "cannibal",
      role: "duck",
      short: "Can eat one dead body removing potential evidence of a murder.",
      description:
        "When someone dies, their body will be pointed to by an arrow where you can eat the body.",
      image: "https://goose-backend-g6bw.vercel.app/gooses_images/canibal.png",
    },
    {
      name: "Celebrity",
      slug: "celebrity",
      role: "goose",
      short: "All geese and only GEESE are alerted when you are killed.",
      description:
        "Geese will not be alerted if the Celebrity is killed by the environment, or by the Assassin during a meeting. However, geese will still be alerted if the Celebrity is killed by a bomb initially planted by the Demolitionist.",
      image:
        "https://goose-backend-g6bw.vercel.app/gooses_images/celebrity.png",
    },
    {
      name: "Demolitionist",
      slug: "demolitionist",
      role: "duck",
      short:
        "Plant bombs on birds to make them explode. Birds can also pass the bomb around.",
      description:
        "The Demolitionist's Kill button will plant a bomb on the selected target. The player targeted will not know there is a bomb on them until it starts ticking, after which they will have 12 seconds to find another person to pass the bomb to with E or pass it automatically when close to someone.",
      image:
        "https://goose-backend-g6bw.vercel.app/gooses_images/demolitionist.png",
    },
    {
      name: "Dodo",
      slug: "dodo",
      role: "neutral",
      short: "Get voted out to win.",
      description:
        "The Dodo Bird wins if they are voted out at a meeting, they do not win if killed by another role.",
      image: "https://goose-backend-g6bw.vercel.app/gooses_images/dodo.png",
    },
    {
      name: "Dueling Dodo",
      slug: "duo-dodo",
      role: "neutral",
      short: "Get voted out after the other dodo dies to win.",
      description:
        "Once you faked all your tasks, you will get a Kill Button that can only be used on the other Dodo.",
      image:
        "https://goose-backend-g6bw.vercel.app/gooses_images/dueling_dodo.png",
    },
    {
      name: "Engineer",
      slug: "engineer",
      role: "goose",
      short:
        "You can temporarily vent and see when and where alive ducks use their sabotages.",
      description:
        "Some maps will allow Engineer to stay in hiding locations permanently like Basement or Goose Chapel. Engineer also has the ability to temporarily see where Live Ducks activated a Sabotage.",
      image: "https://goose-backend-g6bw.vercel.app/gooses_images/engineer.png",
    },
    {
      name: "Esper",
      slug: "esper",
      role: "duck",
      short:
        "Instead of killing, you kill someone over time with your power and can talk to them from afar before they die.",
      description:
        "Instead of killing, you mark a player with your kill button. After 10 seconds, you cannot move and will see things from their perspective. During this time, if proximity chat is on, you can communicate with your victim. Another timer of 10 seconds will start ticking down, and when that finishes, your victim finally dies. This activates Canadian (You self-report) and Avenger (They can kill now) despite you not directly killing them.",
      image: "https://goose-backend-g6bw.vercel.app/gooses_images/esper.png",
    },
    {
      name: "Falcon",
      slug: "falcon",
      role: "neutral",
      short:
        "Win as the last survivor by killing everyone or simply surviving. You can only skip during meetings.",
      description:
        "The falcon is a neutral role that can kill but cannot vent nor sabotage. To win, the falcon must either be among the last 3 and survive for 45 seconds, or be the last bird standing. The geese can only win by tasks and ducks can only win by sabotages while the falcon is alive. The falcon must skip vote for every meeting.",
      image: "https://goose-backend-g6bw.vercel.app/gooses_images/falcon.png",
    },
    {
      name :'Fortune Teller',
      slug : 'fortune-teller',
      role : 'goose',
      short : 'During meetings you will see the possible killers of the reported corpse.',
      description : 'In meetings, the Fortune Teller reveals potential killers of the reported avian carcass. These potential killers are indicated by icons in the meeting.',
      image : "https://goose-backend-g6bw.vercel.app/gooses_images/fortune-teller.png",
    },
    {
      name: "Hitman",
      slug: "hitman",
      role: "duck",
      short: "Kill your assigned target for a bonus.",
      description:
        "I actually have never played this role so use wiki instead :)",
      image: "https://goose-backend-g6bw.vercel.app/gooses_images/hitman.png",
    },
    {
      name: "Invisible",
      slug: "invisible",
      role: "duck",
      short:
        "You can turn temporarily invisible. You cannot see people while invisible.",
      description: "You can kill people while invisible I think? hehe",
      image:
        "https://goose-backend-g6bw.vercel.app/gooses_images/invisible.png",
    },
    {
      name: "Lobbyist",
      slug: "lobbyist",
      role: "goose",
      short: "Get votes within meetings to gain the ability to kill.",
      description:
        "You can ask the people at the meeting to vote for you. You need a certain amount of votes to unlock the ability to kill.",
      image: "https://goose-backend-g6bw.vercel.app/gooses_images/lobbyist.png",
    },
    {
      name: "Lovers (goose)",
      slug: "lovers-g",
      role: "goose",
      short:
        "Stay alive with your significant other who will be a goose or a deceiving duck.",
      description:
        "If one of you dies, the other one dies as well. You can win if you two are in the last three. Goose pairs of lovers can stick by each other to reduce your risk of dying by solo killers, but not duo or trio killers. Your top priorities are to identify the ducks and falcon and hope to get a goose win. If there are only 4 players left, you and your lover can trick one of them into voting the other for a lovers win.",
      image: "https://goose-backend-g6bw.vercel.app/gooses_images/lovers.png",
    },
    {
      name: "Lovers (duck)",
      slug: "lovers-d",
      role: "duck",
      short:
        "Stay alive with your significant other who will be a goose or a deceiving duck.",
      description:
        "If they are among the last 3 people, they win, overriding duck or goose victory.",
      image: "https://goose-backend-g6bw.vercel.app/gooses_images/lovers.png",
    },
    {
      name: "Medium",
      slug: "medium",
      role: "goose",
      short: "You can see the amount of ghosts that are in game.",
      description:
        "You should constantly use your ability to know when someone dies in the game to know who could be the potential ducks or neutrals.",
      image: "https://goose-backend-g6bw.vercel.app/gooses_images/medium.png",
    },
    {
      name: "Mimic",
      slug: "mimic",
      role: "goose",
      short:
        "The ducks see you as a duck. In addition, friendly fire is enabled for Ducks, meaning they can kill their own teammates if they are not careful.",
      description:
        "If mimic presents in the game, ducks can kill each other, even when mimic has died. This role prevents ducks from making double and triple kills without confidence that you are not a mimic. On some maps, a mimic can perform some actions like ducks. For example, on a sand map, a mimic can pass through a forbidden fog. The Mimic is considered a goose, so Sheriffs will die if they kill a Mimic",
      image: "https://goose-backend-g6bw.vercel.app/gooses_images/mimic.png",
    },
    {
      name: "Morph",
      slug: "morph",
      role: "duck",
      short:
        "You can temporarily morph into players you choose to sample to change your appearance.",
      description:
        "You can changed into other players and blame them. So, you shouldnt use voice coms / proximity chat when you are playing as a morph",
      image: "https://goose-backend-g6bw.vercel.app/gooses_images/morph.png",
    },
    {
      name: "Mortician",
      slug: "mortician",
      role: "goose",
      short: "Investigate a dead body to see what the dead bird's role is",
      description:
        "When a meeting is called you see the roles of the bodies you inspected.If you are a mortician you should ask the people to let you use your ability on the dead body",
      image:
        "https://goose-backend-g6bw.vercel.app/gooses_images/mortician.png",
    },
    {
      name : 'Party',
      slug : 'party',
      role : 'duck',
      short : 'You win in voting ties and cannot be sent to jail.',
      description : 'You can see who is voting who so make sure you don\'t scream it out loud',
      image : "https://goose-backend-g6bw.vercel.app/gooses_images/party.png"
    },
    {
      name : 'Politician',
      slug : 'polictian',
      role : 'goose',
      short : 'You win in voting ties and cannot be sent to jail.',
      description : 'During meetings the politician is a tiebreaker vote. If 2 people get the same amount of votes, the politician\'s vote will determine who gets ejected. The politician cannot be jailed by a tie vote nor the snitch duck.',
      image: 'https://goose-backend-g6bw.vercel.app/gooses_images/politician.png'
    },
    {
      name: "Pelican",
      slug: "pelican",
      role: "neutral",
      short:
        "You can swallow players whole, but they do not die until a meeting is called.",
      description:
        "Works very similarly to the Kill ability. However, instead of killing the player and leaving behind a corpse, the Pelican will swallow that player alive and whole. That player will remain inside the Pelican's belly until either the Pelican dies or until a meeting of any kind is called.",
      image: "https://goose-backend-g6bw.vercel.app/gooses_images/pelican.png",
    },
    {
      name: "Professional",
      slug: "professional",
      role: "duck",
      short:
        "Geese cannot see your kills and will report automatically when they are near the bodies you killed.",
      description:
        "You are immune to reporting Canadian as professional.However you're not immune to celebrity notification.So be careful",
      image:
        "https://goose-backend-g6bw.vercel.app/gooses_images/professional.png",
    },
    {
      name: "Serial Killer",
      slug: "serial-killer",
      role: "duck",
      short:
        "Kill your target to decrease your cooldown. Killing someone else will increase it.",
      description:
        "Honestly thats pretty much it. You can see who your taget is with the arrow pointing towards them",
      image:
        "https://goose-backend-g6bw.vercel.app/gooses_images/serial_killer.png",
    },
    {
      name: "Sheriff",
      slug: "sheriff",
      role: "goose",
      short: "You can kill anyone, but if you kill a goose, you die as well.",
      description:
        "You should make sure the one you're killer is not a goose cause if you killed the wrong one your teamamtes lose two geese.",
      image: "https://goose-backend-g6bw.vercel.app/gooses_images/sheriff.png",
    },
    {
      name: "Silencer",
      slug: "silencer",
      role: "duck",
      short: "You can mute birds during meetings.",
      description:
        "You have to find the bird you want to mute first and then use your ability on them and they will be on mute during the meetings",
      image: "https://goose-backend-g6bw.vercel.app/gooses_images/silencer.png",
    },
    {
      name: "Snitch",
      slug: "snitch",
      role: "duck",
      short:
        "You can send a bird to jail if you are the only one to vote that bird.",
      description:
        "The snitch can lock people in jail if they are the only bird to vote them. They cannot lock the politician in jail. They can only lock people in jail if nobody gets ejected that meeting.",
      image: "https://goose-backend-g6bw.vercel.app/gooses_images/snitch.png",
    },
    {
      name: "Spy",
      slug: "spy",
      role: "duck",
      short: "Being the only one to vote someone reveals their role to you.",
      description:
        "If there is a mimic you should vote them to see if they are your teammates or a mimick.You should also find powerful geese or neutrals that can kill you and kill them first",
      image: "https://goose-backend-g6bw.vercel.app/gooses_images/spy.png",
    },
    {
      name: "Stalker",
      slug: "stalker",
      role: "goose",
      short: "You can see the position person you used your ability on",
      description:
        "Note : It doesnt show you where exactly they are on the map but instead there is an arrow that is poiting to where they are",
      image: "https://goose-backend-g6bw.vercel.app/gooses_images/stalker.png",
    },
    {
      name: "Undertaker",
      slug: "undertaker",
      role: "duck",
      short: "Drag bodies away at a reduced speed.",
      description:
        "Your ability allows you to drag dead body with reduced speed but make sure nobody is around",
      image:
        "https://goose-backend-g6bw.vercel.app/gooses_images/undertaker.png",
    },
    {
      name: "vigilante",
      slug: "vigilante",
      role: "goose",
      short: "Kill one bird without consequences. Choose wisely.",
      description:
        "You can kill one bird without consequences like the sheriff but you should use it wisely since you can only use once even if you killed a duck",
      image:
        "https://goose-backend-g6bw.vercel.app/gooses_images/vigilante.png",
    },
  ],
};

module.exports = data;

import day1Image from "../assets/images/1st.png";
import day2Image from "../assets/images/2nd.png";
import day3Image from "../assets/images/3rd.jpg";
import day4Image from "../assets/images/4th.png";
import day5Image from "../assets/images/5th.jpg";
import day6Image from "../assets/images/6th.png";
import day7Image from "../assets/images/7th.jpg";
import day8Image from "../assets/images/8th.png";
import day9Image from "../assets/images/9th.jpg";
import day10Image from "../assets/images/10th.jpg";
import day11Image from "../assets/images/11th.png";
import day12Image from "../assets/images/12th.jpg";
import day13Image from "../assets/images/13th.webp";
import day14Image from "../assets/images/14th.jpg";
import day15Image from "../assets/images/15th.png";
import day16Image from "../assets/images/16th.jpg";
// import day17Image from "../assets/images/southend.jpg";
// import day18Image from "../assets/images/wirral-calendar.jpg";
// import day19Image from "../assets/images/pontypridd.jpg";
// import day20Image from "../assets/images/shop.jpg";
// import day21Image from "../assets/images/call-to-action.png";
// import day22Image from "../assets/images/percent-76.png";
// import day23Image from "../assets/images/26th.png";
// import day24Image from "../assets/images/24th.png";
// import day25Image from "../assets/images/25th.png";

const adventContent = [
  {
    date: 1,
    title: "Day 1: Giving Tuesday - Bring light to life's darker moments",
    content: 
      "This Giving Tuesday, your generosity can make a real difference. Every donation helps SVP members and volunteers provide food, friendship and practical support to people facing hardship. Whatever you can give, you can help bring light to someone's darker moments.",
    mediaType: "image",
    mediaUrl: day1Image,
    imageAlt: 
      "World Day of the Poor. We made over 336,000 visits, supported over 44,000 people and gave over 84,000 instances of practical help. A smiling woman with short grey hair in a navy SVP polo shirt sits at a table with mugs and snacks, beneath strings of fairy lights. Logo: Bring light to life's darker moments.",
      linkUrl: "https://svp.org.uk/bringing-light-lifes-darker-moments",
      linkText: "donate here",
  },
  {
    date: 2,
    title: "Day 2: Small acts. Big difference.",
    content: 
      "A smile, a friendly conversation or taking time to listen can brighten someone's day. Kindness doesn't have to cost anything, but its impact can last a lifetime. What small act of kindness could you share today?",
    mediaType: "image",
    mediaUrl: day2Image,
    imageAlt: 
      "A quote beneath strings of fairy lights: “Getting me out of the house, bringing me out of my shell, and bringing my personality to light once again, basically, and sharing it.” Luke, St Vincent's Ely Bridge.",
  },
  {
    date: 3,
    title: "Day 3: Could you make a difference in your community?",
    content: 
      "SVP members put their faith into action by supporting people experiencing poverty and loneliness. From visiting people in their homes to providing practical help and friendship, there's so much you can do to make a difference.",
    mediaType: "image",
    mediaUrl: day3Image,
    imageAlt: 
      "A laughing man with a beard, glasses and a cap, in a bright floral shirt, sits in front of a Christmas tree. Text: Your donation could help bring light to life's darker moments.",
    linkUrl:
      "https://svp.org.uk/get-involved",
    linkText: "get involved",
  },
  {
    date: 4,
    title: "Day 4: St Vincent's Newcastle - A community that cares",
    content: 
      "From practical support to a friendly face, St Vincent's Newcastle helps people facing difficult circumstances find support, connection and hope. Every conversation and act of kindness can make a difference.",
    mediaType: "image",
    mediaUrl: day4Image,
    imageAlt: 
      "A man with glasses and a grey beard holds a mug beside a white Christmas tree with red and gold baubles. Text: In 2024-25 alone, SVP Members made over 336,000 visits to more than 44,000 people, alongside more than 84,000 instances of practical help. Behind every number is someone facing their own difficult moment, whether that means an empty cupboard, an unfurnished home, poor health or simply having nobody to talk to.",
    linkUrl: "https://svp.org.uk/st-vincents-newcastle",
    linkText: "Learn more about the Centre here",
  },
  {
    date: 5,
    title: 
      "Day 5: International Volunteer Day - Celebrating our volunteers",
    content:
      "Today, we celebrate the thousands of SVP volunteers who give their time, energy and compassion to support people experiencing poverty, loneliness and disadvantage. Thank you for everything you do. Your kindness brings light to countless lives.",
    mediaType: "image",
    mediaUrl: day5Image,
    imageAlt: 
      "A man with glasses and a grey beard looks up thoughtfully beside a white Christmas tree, under strings of fairy lights. Text: Can you help us bring light to life's darker moments?",
    linkUrl: "https://svp.org.uk/volunteer",
    linkText: "Meet our volunteers"
  },
  {
    date: 6,
    title: 
      "Day 6: Feast of St Nicholas - Inspired by generosity",
    content:
      "St Nicholas is remembered for his generosity, compassion and care for people in need. His example continues to inspire the work of the SVP today. This Advent, let's follow in his footsteps by sharing what we can and looking out for those around us.",
    mediaType: "image",
    mediaUrl: day6Image,
    linkUrl: "",
    linkText: "",
  },
  {
    date: 7,
    title: 
      "Day 7: Sheffield Furniture Project - A home is more than four walls",
    content:
      "Having somewhere comfortable to call home matters. Through the Sheffield Furniture Project, people can access furniture and household essentials, helping make a house feel like a home and supporting people to rebuild their lives.",
    mediaType: "image",
    mediaUrl: day7Image,
    linkUrl: "https://svp.org.uk/sheffield-furniture-store",
    linkText: "Learn more about the Centre here",
  },
  {
    date: 8,
    title: 
      "Day 8: The Immaculate Conception - A moment for reflection",
    content:
      "Today, the Catholic Church celebrates the Solemnity of the Immaculate Conception of the Blessed Virgin Mary. As we continue our Advent journey, may Mary's example of faith, humility and love inspire us to show compassion and care to those around us.",
    mediaType: "image",
    mediaUrl: day8Image,
    linkUrl: "",
    linkText: "",
  },
  {
    date: 9,
    title: 
      "Day 9: St Vincent's Bradford - A place to connect and belong",
    content:
      "St Vincent's Bradford brings people together through community support, activities and opportunities to build friendships. A welcoming space can make all the difference to someone experiencing isolation or difficult circumstances.",
    mediaType: "image",
    mediaUrl: day9Image,
  linkUrl: "https://svp.org.uk/st-vincents-bradford",
  linkText: "Learn more about the Centre here"
  },
  {
    date: 10,
    title: "Day 10: More than just a meal",
    content:
      "When cupboards are empty, a warm meal brings more than nourishment. When a family is struggling, a Christmas hamper brings more than food - it brings reassurance that someone cares. Through the kindness of our members, the SVP provides practical help and hope to thousands of people every year.",
    mediaType: "image",
    mediaUrl: day10Image,
    linkUrl: 
      "https://svp.org.uk/bringing-light-lifes-darker-moments",
    linkText: "Donate Here"
  },
  {
    date: 11,
    title: 
      "Day 11: Deaf Centre - Everyone deserves to be heard",
    content:
      "Communication and connection are essential to feeling included. The Deaf Centre provides a space for Deaf people to connect, access support and build relationships within their community. Everyone deserves to feel understood, welcomed and valued.",
    mediaType: "image",
    mediaUrl: day11Image,
    linkUrl: "https://svp.org.uk/microsite/svp-deaf-centre-newcastle",
    linkText: "Learn more about the Centre here",
  },
  {
    date: 12,
    title: "Day 12: See. Think. Do. - Living our values",
    content:
      "The SVP's work begins with seeing the needs around us, thinking about how we can help and taking action. Every day, our members put faith into action through compassion, solidarity and practical support for people in need.",
    mediaType: "image",
    mediaUrl: day12Image,
    linkUrl: "https://svp.org.uk/become-member",
    linkText: "Become a Member",
  },
  {
    date: 13,
    title: 
      "Day 13: Gaudete Sunday - A Sunday of joy and hope",
    content:
      "Today, we celebrate Gaudete Sunday, a reminder to rejoice as Christmas draws nearer. Even in difficult times, we can find hope through faith, kindness and the love we share with others. Let's be a light in someone's life this Advent.",
    mediaType: "image",
    mediaUrl: day13Image,
    linkUrl: "https://svp.org.uk/bringing-light-lifes-darker-moments",
    linkText: "Donate Here",
  },
  {
    date: 14,
    title: "Day 14: Nobody should face hardship alone",
    content:
      "Poverty can affect anyone, often in ways we cannot see. From struggling to afford essentials to worrying about the next bill, everyday pressures can become overwhelming. Through practical support, advocacy and friendship, SVP members help people facing difficult circumstances.",
    mediaType: "image",
    mediaUrl: day14Image,
    linkUrl: "https://svp.org.uk/our-work",
    linkText: "Our Work"
  },
  {
    date: 15,
    title: "Day 15: Chorley Buddies - Friendship can change a life",
    content:
      "Nobody should have to experience loneliness alone. Chorley Buddies helps bring people together through friendship, companionship and support. Sometimes, knowing someone is there for you is the greatest gift of all.",
    mediaType: "image",
    mediaUrl: day15Image,
    linkUrl: "https://svp.org.uk/microsite/st-vincents-chorley-buddies",
    linkText: "Learn more about the Centre here",
  },
  {
    date: 16,
    title: "Day 16: Give someone your time",
    content:
      "You don't need to spend money to make someone's Christmas brighter. A phone call, a visit, a helping hand or simply asking someone how they are can make a world of difference. This Advent, consider giving the gift of your time.",
    mediaType: "image",
    mediaUrl: day16Image,
    linkUrl: "https://svp.org.uk/get-involved",
    linkText: "Get Involved",
  },
  {
    date: 17,
    title: 
      "Day 17: St Vincent's Ely - Supporting people to thrive",
    content:
      "From opportunities to improve wellbeing to activities that bring people together, St Vincent's Ely helps people build confidence, develop connections and feel supported. It's about more than meeting immediate needs - it's about helping people move forward.",
    mediaType: "image",
    // mediaUrl: day17Image,
    linkUrl: 
      "https://svp.org.uk/microsite/st-vincents-ely-bridge",
    linkText: "Learn more about the Centre here",
  },
  {
    date: 18,
    title: "Day 18: Everyone deserves somewhere to call home",
    content:
      "For people experiencing homelessness, winter can be an especially difficult time. Through practical assistance, friendship and support, SVP members help people facing some of life's toughest challenges. Everyone deserves to feel valued, supported and treated with dignity.",
    mediaType: "image",
    // mediaUrl: day18Image,
    linkUrl: 
      "https://svp.org.uk/bringing-light-lifes-darker-moments",
    linkText: "Donate Here",
  },
  {
    date: 19,
    title: "Day 19: St Vincent's Southend - Finding strength together",
    content:
      "St Vincent's Southend creates opportunities for people to improve their wellbeing, build friendships and discover new skills. Through community activities and supportive programmes, people can find encouragement and a sense of belonging.",
    mediaType: "image",
    // mediaUrl: day19Image,
    linkUrl: 
      "https://svp.org.uk/st-vincents-southend",
    linkText: "Learn more about the Centre here",
  },
  {
    date: 20,
    title: 
      "Day 20: Fourth Sunday of Advent - Preparing our hearts for Christmas",
    content:
      "As we light the fourth Advent candle, Christmas draws closer. This is a time to reflect on love, faith and the importance of being there for one another. May we carry these values into our homes, communities and the lives of those who need us.",
    mediaType: "image",
    // mediaUrl: day20Image,
    linkUrl: 
      "https://svp.org.uk/bringing-light-lifes-darker-moments",
    linkText: "Donate Here",
  },
  {
    date: 21,
    title: 
      "Day 21: St Vincent's Wirral - A little support goes a long way",
    content:
      "Across our communities, St Vincent's services help people access support, friendship and practical assistance when they need it most. Every person deserves to feel valued, included and supported.",
    mediaType: "image",
    // mediaUrl: day21Image,
    linkUrl:
      "https://svp.org.uk/microsite/st-vincents-wirral",
    linkText: "Learn more about the Centre here",
  },
  {
    date: 22,
    title: 
      "Day 22: Tower House, Brighton - Friendship makes all the difference",
    content:
      "Growing older shouldn't mean growing lonely. At Tower House in Brighton, older people can come together, enjoy companionship and share a meal. Sometimes, a friendly face and somewhere to belong can make all the difference.",
    mediaType: "image",
    // mediaUrl: day22Image,
    linkUrl:
      "https://svp.org.uk/st-vincents-centre-brighton-tower-house",
    linkText: "Learn more about the Centre here",
  },
  {
    date: 23,
    title: "Day 23: The spirit of giving",
    content:
      "The true spirit of Christmas isn't found in the presents beneath the tree. It's found in the kindness we share, the people we remember and the difference we make in one another's lives. Let's make room for generosity this Christmas.",
    mediaType: "image",
    // mediaUrl: day23Image,
    linkUrl:
      "https://svp.org.uk/bringing-light-lifes-darker-moments",
    linkText: "Donate Here",
  },
  {
    date: 24,
    title: "Day 24: Christmas Eve - A little light, a little hope",
    content:
      "Tonight, as many prepare to celebrate, let's remember those who may be facing loneliness, hardship or uncertainty. Through kindness, compassion and the gift of being there for one another, we can bring light to life's darker moments.",
    mediaType: "image",
    // mediaUrl: day24Image,
    linkUrl: 
      "https://svp.org.uk/bringing-light-lifes-darker-moments",
    linkText: "Donate Here"
  },
  {
    date: 25,
    title: "Day 25: Christmas Day - Wishing you a very Merry Christmas",
    content:
      "Today, we celebrate the birth of Jesus Christ and the message of love, peace and hope at the heart of Christmas. We give thanks to everyone who makes the work of the SVP possible, bringing friendship, practical support and compassion to people across England and Wales. From everyone at the SVP, we wish you and your loved ones a very Merry Christmas.",
    mediaType: "image",
    // mediaUrl: day25Image,
  },
];

export default adventContent;
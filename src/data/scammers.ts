
export interface Video {
  title: string;
  url: string;
  platform: 'youtube' | 'vimeo' | 'external';
  thumbnail?: string;
  date: string;
}

export interface Scammer {
  id: string;
  name: string;
  avatar: string;
  scamLevel: 'high' | 'medium' | 'low';
  tags: string[];
  featuredVideo: Video;
  allVideos: Video[];
  description: string;
}

export const scammers: Scammer[] = [
  {
    id: '1',
    name: 'Jason Forex',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    scamLevel: 'high',
    tags: ['Fake Signals', 'Ponzi Scheme'],
    featuredVideo: {
      title: 'Jason Forex Exposed: The $2M Signal Scam',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      platform: 'youtube',
      date: '2023-11-15'
    },
    allVideos: [
      {
        title: 'Jason Forex Exposed: The $2M Signal Scam',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        platform: 'youtube',
        date: '2023-11-15'
      },
      {
        title: 'Victims Speak Out: Jason Forex Scam Testimonials',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        platform: 'youtube',
        date: '2023-12-01'
      },
      {
        title: 'Legal Action Against Jason Forex - Case Updates',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        platform: 'youtube',
        date: '2024-01-22'
      }
    ],
    description: 'Jason runs a high-profile forex signals scam, charging $5,000 for "guaranteed profits" while operating a sophisticated Ponzi scheme. Multiple lawsuits are pending.'
  },
  {
    id: '2',
    name: 'Sarah TradeQueen',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    scamLevel: 'high',
    tags: ['Fake Account', 'Course Scam'],
    featuredVideo: {
      title: "Sarah's $10K Course Scam Investigation",
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      platform: 'youtube',
      date: '2023-10-05'
    },
    allVideos: [
      {
        title: "Sarah's $10K Course Scam Investigation",
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        platform: 'youtube',
        date: '2023-10-05'
      },
      {
        title: 'The Fake Trading Account Sarah Uses Exposed',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        platform: 'youtube',
        date: '2023-10-25'
      },
      {
        title: "Ex-Employee Reveals Sarah's Trading Course Secrets",
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        platform: 'youtube',
        date: '2023-12-12'
      },
      {
        title: "Sarah TradeQueen's Fake Testimonials Debunked",
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        platform: 'external',
        date: '2024-01-30'
      }
    ],
    description: 'Sarah sells a $10,000 "Trading Queen Academy" with doctored trading results and fake testimonials. Her personal account is demo-only despite claims of massive profits.'
  },
  {
    id: '3',
    name: 'Alex TradePro',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    scamLevel: 'medium',
    tags: ['False Credentials', 'Inflated Returns'],
    featuredVideo: {
      title: "Alex TradePro's Fake Harvard Degree",
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      platform: 'youtube',
      date: '2023-09-20'
    },
    allVideos: [
      {
        title: "Alex TradePro's Fake Harvard Degree",
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        platform: 'youtube',
        date: '2023-09-20'
      },
      {
        title: "The Truth About Alex's Trading Performance",
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        platform: 'youtube',
        date: '2023-11-05'
      }
    ],
    description: 'Alex falsely claims Harvard and Wall Street credentials. While his trading strategy has some merit, he inflates returns by 300% and withholds critical risk information.'
  },
  {
    id: '4',
    name: 'Michael FX Master',
    avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
    scamLevel: 'high',
    tags: ['Broker Kickbacks', 'Pump & Dump'],
    featuredVideo: {
      title: "Michael's Secret Broker Commissions Exposed",
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      platform: 'youtube',
      date: '2023-08-15'
    },
    allVideos: [
      {
        title: "Michael's Secret Broker Commissions Exposed",
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        platform: 'youtube',
        date: '2023-08-15'
      },
      {
        title: 'The FX Master Pump & Dump Scheme',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        platform: 'youtube',
        date: '2023-09-10'
      },
      {
        title: "Michael's Private Trading Group: The Full Scam Breakdown",
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        platform: 'youtube',
        date: '2023-10-22'
      },
      {
        title: 'Former Members Speak Out Against FX Master Group',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        platform: 'youtube',
        date: '2024-02-05'
      }
    ],
    description: 'Michael receives 30% commission from an unregulated broker while directing followers to deposit funds there. He also coordinates pump & dump schemes in smaller forex pairs.'
  },
  {
    id: '5',
    name: 'Emma Trade Analyst',
    avatar: 'https://randomuser.me/api/portraits/women/24.jpg',
    scamLevel: 'low',
    tags: ['Misleading Marketing', 'Exaggerated Experience'],
    featuredVideo: {
      title: "The Truth About Emma's Trading Experience",
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      platform: 'youtube',
      date: '2023-12-10'
    },
    allVideos: [
      {
        title: "The Truth About Emma's Trading Experience",
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        platform: 'youtube',
        date: '2023-12-10'
      },
      {
        title: "Emma Trade Analyst Course Review: What They Don't Tell You",
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        platform: 'youtube',
        date: '2024-01-15'
      }
    ],
    description: 'Emma exaggerates her trading background and uses misleading marketing tactics. Her course has legitimate information but is overpriced for the quality provided.'
  },
  {
    id: '6',
    name: 'David FX Ninja',
    avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
    scamLevel: 'medium',
    tags: ['Copy Trading Scam', 'Fake Lifestyle'],
    featuredVideo: {
      title: "David FX Ninja's Rented Luxury Cars Exposed",
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      platform: 'youtube',
      date: '2023-07-20'
    },
    allVideos: [
      {
        title: "David FX Ninja's Rented Luxury Cars Exposed",
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        platform: 'youtube',
        date: '2023-07-20'
      },
      {
        title: "The Truth Behind David's Copy Trading Service",
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        platform: 'youtube',
        date: '2023-08-15'
      },
      {
        title: "FX Ninja's Mansion Tour: Rental or Reality?",
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        platform: 'youtube',
        date: '2023-09-30'
      }
    ],
    description: 'David runs a copy trading service with manipulated performance statistics. He rents luxury cars and properties for social media content while claiming them as his own.'
  },
  {
    id: '7',
    name: 'Olivia Swift Trades',
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
    scamLevel: 'medium',
    tags: ['Hidden Fees', 'Unrealistic Results'],
    featuredVideo: {
      title: "Olivia's Trading Course Hidden Fee Structure",
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      platform: 'youtube',
      date: '2024-01-05'
    },
    allVideos: [
      {
        title: "Olivia's Trading Course Hidden Fee Structure",
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        platform: 'youtube',
        date: '2024-01-05'
      },
      {
        title: 'The Mathematics Behind Olivia\'s "Guaranteed" Returns',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        platform: 'youtube',
        date: '2024-02-10'
      },
      {
        title: 'Former Student Reveals Truth About Swift Trades Course',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        platform: 'external',
        date: '2024-03-01'
      }
    ],
    description: 'Olivia promotes unrealistically high win rates and hides substantial fees in her membership structure. Her trading system contains some valid strategies mixed with deceptive marketing.'
  },
  {
    id: '8',
    name: 'Robert Pip Hunter',
    avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
    scamLevel: 'high',
    tags: ['Pyramid Scheme', 'Illegal Advice'],
    featuredVideo: {
      title: "Inside Robert's Forex Pyramid Operation",
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      platform: 'youtube',
      date: '2023-06-10'
    },
    allVideos: [
      {
        title: "Inside Robert's Forex Pyramid Operation",
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        platform: 'youtube',
        date: '2023-06-10'
      },
      {
        title: "Robert Pip Hunter's Illegal Trading Advice",
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        platform: 'youtube',
        date: '2023-07-15'
      },
      {
        title: 'The Multi-Level Scam Behind Pip Hunter Academy',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        platform: 'youtube',
        date: '2023-08-20'
      },
      {
        title: "Robert's Offshore Account Network Revealed",
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        platform: 'youtube',
        date: '2023-09-25'
      }
    ],
    description: 'Robert operates a multi-level marketing scheme disguised as a trading education platform, with 80% of revenue coming from recruitment rather than trading. He also promotes tax evasion strategies.'
  },
  {
    id: '9',
    name: 'Sophia FXlife',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    scamLevel: 'medium',
    tags: ['Paid Reviews', 'Course Reselling'],
    featuredVideo: {
      title: "Sophia's Paid Review Network Uncovered",
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      platform: 'youtube',
      date: '2023-11-10'
    },
    allVideos: [
      {
        title: "Sophia's Paid Review Network Uncovered",
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        platform: 'youtube',
        date: '2023-11-10'
      },
      {
        title: "The Secret Behind FXlife's \"Original\" Course",
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        platform: 'youtube',
        date: '2023-12-15'
      },
      {
        title: 'Sophia FXlife: Content Theft Documentation',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        platform: 'external',
        date: '2024-01-20'
      }
    ],
    description: 'Sophia pays for positive reviews and testimonials. Her course material is primarily resold content from other creators with minimal original input.'
  },
  {
    id: '10',
    name: 'Thomas Trade Genius',
    avatar: 'https://randomuser.me/api/portraits/men/62.jpg',
    scamLevel: 'low',
    tags: ['Misleading Backtests', 'Cherry-picked Results'],
    featuredVideo: {
      title: "Thomas's Trading System: Backtest Manipulation",
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      platform: 'youtube',
      date: '2024-02-15'
    },
    allVideos: [
      {
        title: "Thomas's Trading System: Backtest Manipulation",
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        platform: 'youtube',
        date: '2024-02-15'
      },
      {
        title: 'The Cherry-Picking Strategy of Trade Genius Results',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        platform: 'youtube',
        date: '2024-03-10'
      }
    ],
    description: 'Thomas uses manipulated backtests and cherry-picked results to market his trading system. While not a complete scam, his presentation significantly overstates performance.'
  }
];

export const trustedBrokers = [
  {
    name: "GlobalFX",
    logo: "https://via.placeholder.com/150x50?text=GlobalFX",
    url: "https://www.example.com",
    description: "Regulated forex broker with competitive spreads"
  },
  {
    name: "TradeSafe",
    logo: "https://via.placeholder.com/150x50?text=TradeSafe",
    url: "https://www.example.com",
    description: "Multi-regulated with investor protection"
  },
  {
    name: "FXprime",
    logo: "https://via.placeholder.com/150x50?text=FXprime",
    url: "https://www.example.com",
    description: "Award-winning trading platforms"
  }
];

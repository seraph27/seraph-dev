type CodeForcesData = {
  id: string
  solved: boolean
  date: string
  difficulty: number
  problems: string
  url: string
  resources: string
}

const codeforcesData: CodeForcesData[] = [
  {
    id: "0000059",
    solved: true,
    date: "2024/5/9",
    difficulty: 0,
    problems: "Running Miles",
    url: "https://cses.fi/problemset/task/1084",
    resources: "CSES"
  },
  {
    id: "0000058",
    solved: true,
    date: "2024/5/6",
    difficulty: 0,
    problems: "",
    url: "https://codeforces.com/contest/1924/problem/A",
    resources: "Codeforces"
  },
  {
    id: "0000057",
    solved: true,
    date: "2024/5/5",
    difficulty: 0,
    problems: "",
    url: "https://codeforces.com/contest/1966/problem/C",
    resources: "Codeforces"
  },
  {
    id: "0000056",
    solved: true,
    date: "2024/5/4",
    difficulty: 0,
    problems: "",
    url: "https://codeforces.com/contest/1918/problem/C",
    resources: "Codeforces"
  },
  {
    id: "0000055",
    solved: true,
    date: "2024/4/30",
    difficulty: 0,
    problems: "",
    url: "https://calicojudge.com/public/problems/575/text",
    resources: "Others"
  },
  {
    id: "0000054",
    solved: true,
    date: "2024/4/28",
    difficulty: 0,
    problems: "",
    url: "https://usaco.org/index.php?page=viewproblem2&cpid=1063",
    resources: "USACO"
  },
  {
    id: "0000053",
    solved: true,
    date: "2024/4/27",
    difficulty: 0,
    problems: "",
    url: "https://leetcode.com/problems/freedom-trail/?envType=daily-question&envId=2024-04-27",
    resources: "Leetcode"
  },
  {
    id: "0000052",
    solved: true,
    date: "2024/4/27",
    difficulty: 0,
    problems: "",
    url: "https://cses.fi/problemset/task/1652",
    resources: "CSES"
  },
  {
    id: "0000051",
    solved: true,
    date: "2024/4/27",
    difficulty: 1700,
    problems: "Running Miles",
    url: "https://codeforces.com/contest/1826/problem/D",
    resources: "Codeforces"
  },
  {
    id: "0000050",
    solved: true,
    date: "2024/4/26",
    difficulty: 0,
    problems: "Haybale Stacking",
    url: "https://usaco.org/index.php?page=viewproblem2&cpid=104",
    resources: "USACO"
  },
  {
    id: "0000049",
    solved: true,
    date: "2024/4/25",
    difficulty: 0,
    problems: "Icy Perimeter",
    url: "https://usaco.org/index.php?page=viewproblem2&cpid=895",
    resources: "USACO"
  },
  {
    id: "0000048",
    solved: true,
    date: "2024/4/25",
    difficulty: 0,
    problems: "The Great Revegetation",
    url: "https://usaco.org/index.php?page=viewproblem2&cpid=920",
    resources: "USACO"
  },
  {
    id: "0000047",
    solved: true,
    date: "2024/4/22",
    difficulty: 0,
    problems: "Flight Discount",
    url: "https://cses.fi/problemset/task/1195",
    resources: "CSES"
  },
  {
    id: "0000046",
    solved: true,
    date: "2024/4/21",
    difficulty: 2000,
    problems: "Shortest Path",
    url: "https://codeforces.com/problemset/problem/59/E",
    resources: "Codeforces"
  },
  {
    id: "0000045",
    solved: true,
    date: "2024/4/20",
    difficulty: 0,
    problems: "Shortest Routes I",
    url: "https://cses.fi/problemset/task/1671/",
    resources: "CSES"
  },
  {
    id: "0000044",
    solved: true,
    date: "2024/4/15",
    difficulty: 0,
    problems: "Prime Multiples",
    url: "https://cses.fi/problemset/task/2185",
    resources: "CSES"
  },
  {
    id: "0000043",
    solved: true,
    date: "2024/4/15",
    difficulty: 1500,
    problems: "Sushi",
    url: "https://atcoder.jp/contests/dp/tasks/dp_j",
    resources: "AtCoder"
  },
  {
    id: '0000042',
    solved: true,
    date: '2024/4/8',
    difficulty: 1500,
    problems: 'Nearly Shortest Repeating Substring',
    url: 'https://codeforces.com/contest/1950/problem/E',
    resources: 'Codeforces',
  },
  {
    id: '0000041',
    solved: true,
    date: '2024/4/8',
    difficulty: 1700,
    problems: 'Binary Search',
    url: 'https://codeforces.com/contest/1945/problem/E',
    resources: 'Codeforces',
  },
  {
    id: '0000040',
    solved: true,
    date: '2024/4/7',
    difficulty: 2100,
    problems: 'OpenStreetMap',
    url: 'https://codeforces.com/contest/1195/problem/E',
    resources: 'Codeforces',
  },
  {
    id: '0000039',
    solved: true,
    date: '2024/4/6',
    difficulty: 0,
    problems: 'Minimum Cost Walk in Weighted Graph',
    url: 'https://leetcode.com/problems/minimum-cost-walk-in-weighted-graph/description/',
    resources: 'Leetcode',
  },
  {
    id: '0000038',
    solved: true,
    date: '2024/4/5',
    difficulty: 1600,
    problems: 'Rudolf and k Bridges',
    url: 'https://codeforces.com/contest/1941/problem/E',
    resources: 'Codeforces',
  },
  {
    id: '0000037',
    solved: true,
    date: '2024/4/5',
    difficulty: 1600,
    problems: 'Tree Cutting',
    url: 'https://codeforces.com/contest/1946/problem/C',
    resources: 'Codeforces',
  },
  {
    id: '0000036',
    solved: true,
    date: '2024/4/1',
    difficulty: 1400,
    problems: 'Absolute Sorting',
    url: 'https://codeforces.com/contest/1772/problem/D',
    resources: 'Codeforces',
  },
  {
    id: '0000035',
    solved: true,
    date: '2024/4/1',
    difficulty: 1400,
    problems: 'Palindromes Coloring',
    url: 'https://codeforces.com/contest/1624/problem/D',
    resources: 'Codeforces',
  },
  {
    id: '0000034',
    solved: true,
    date: '2024/4/1',
    difficulty: 1700,
    problems: 'Three Logos',
    url: 'https://codeforces.com/contest/581/problem/D',
    resources: 'Codeforces',
  },
  {
    id: '0000033',
    solved: true,
    date: '2024/3/31',
    difficulty: 0,
    problems: 'Wormhole Sort',
    url: 'https://usaco.org/index.php?page=viewproblem2&cpid=992',
    resources: 'USACO',
  },
  {
    id: '0000032',
    solved: true,
    date: '2024/3/31',
    difficulty: 0,
    problems: 'Flight Routes Check',
    url: 'https://cses.fi/problemset/task/1682',
    resources: 'CSES',
  },
  {
    id: '0000031',
    solved: true,
    date: '2024/3/31',
    difficulty: 0,
    problems: 'Fence Planning',
    url: 'https://usaco.org/index.php?page=viewproblem2&cpid=944',
    resources: 'USACO',
  },
  {
    id: '0000030',
    solved: false,
    date: '2024/3/30',
    difficulty: 1600,
    problems: 'Tree Cutting',
    url: 'https://codeforces.com/contest/1946/problem/C',
    resources: 'Codeforces',
  },
  {
    id: '0000029',
    solved: true,
    date: '2024/3/30',
    difficulty: 0,
    problems: 'Building Teams',
    url: 'https://cses.fi/problemset/task/1668',
    resources: 'CSES',
  },
  {
    id: '0000028',
    solved: true,
    date: '2024/3/30',
    difficulty: 0,
    problems: 'Moocast',
    url: 'https://usaco.org/index.php?page=viewproblem2&cpid=668',
    resources: 'USACO',
  },
  {
    id: '0000027',
    solved: true,
    date: '2024/3/29',
    difficulty: 0,
    problems: 'Building Roads',
    url: 'https://cses.fi/problemset/task/1666/',
    resources: 'CSES',
  },
  {
    id: '0000026',
    solved: true,
    date: '2024/3/29',
    difficulty: 1300,
    problems: 'Seraphim the Owl',
    url: 'https://codeforces.com/contest/1945/problem/D',
    resources: 'Codeforces',
  },
  {
    id: '0000025',
    solved: true,
    date: '2024/3/26',
    difficulty: 0,
    problems: 'Bovine Genomics',
    url: 'https://usaco.org/index.php?page=viewproblem2&cpid=739',
    resources: 'USACO',
  },
  {
    id: '0000024',
    solved: true,
    date: '2024/3/25',
    difficulty: 0,
    problems: 'Why Did the Cow Cross the Road II',
    url: 'https://usaco.org/index.php?page=viewproblem2&cpid=712',
    resources: 'USACO',
  },
  {
    id: '0000023',
    solved: true,
    date: '2024/3/23',
    difficulty: 944,
    problems: 'Square Pair',
    url: 'https://atcoder.jp/contests/abc342/tasks/abc342_d',
    resources: 'AtCoder',
  },
  {
    id: '0000022',
    solved: true,
    date: '2024/3/23',
    difficulty: 845,
    problems: 'Gomamayo Sequence',
    url: 'https://atcoder.jp/contests/abc346/tasks/abc346_d',
    resources: 'AtCoder',
  },
  {
    id: '0000021',
    solved: true,
    date: '2024/3/22',
    difficulty: 422,
    problems: 'Diversity of Scores',
    url: 'https://atcoder.jp/contests/abc343/tasks/abc343_d',
    resources: 'AtCoder',
  },
  {
    id: '0000020',
    solved: true,
    date: '2024/3/21',
    difficulty: 1645,
    problems: '#(subset sum = K) with Add and Erase',
    url: 'https://atcoder.jp/contests/abc321/tasks/abc321_f',
    resources: 'AtCoder',
  },
  {
    id: '0000019',
    solved: true,
    date: '2024/3/20',
    difficulty: 854,
    problems: 'String Bags',
    url: 'https://atcoder.jp/contests/abc344/tasks/abc344_d',
    resources: 'AtCoder',
  },
  {
    id: '0000018',
    solved: true,
    date: '2024/3/17',
    difficulty: 0,
    problems: 'Subsequences Summing to Sevens',
    url: 'https://usaco.org/index.php?page=viewproblem2&cpid=595',
    resources: 'USACO',
  },
  {
    id: '0000017',
    solved: true,
    date: '2024/3/15',
    difficulty: 0,
    problems: 'Top K Frequent Elements',
    url: 'https://leetcode.com/problems/top-k-frequent-elements/description/',
    resources: 'Leetcode',
  },
  {
    id: '0000016',
    solved: true,
    date: '2024/3/14',
    difficulty: 0,
    problems: 'Longest Increasing Subsequence',
    url: 'https://leetcode.com/problems/longest-increasing-subsequence/description/',
    resources: 'Leetcode',
  },
  {
    id: '0000015',
    solved: true,
    date: '2024/3/13',
    difficulty: 1700,
    problems: 'Checkposts (427C)',
    url: 'https://codeforces.com/contest/427/problem/C',
    resources: 'Codeforces',
  },
  {
    id: '0000014',
    solved: true,
    date: '2024/3/12',
    difficulty: 0,
    problems: 'Longest Cycle in a Graph',
    url: 'https://leetcode.com/problems/longest-cycle-in-a-graph/description/',
    resources: 'Leetcode',
  },
  {
    id: '0000013',
    solved: true,
    date: '2024/3/12',
    difficulty: 0,
    problems: 'Book Shop',
    url: 'https://cses.fi/problemset/task/1158',
    resources: 'CSES',
  },
  {
    id: '0000012',
    solved: true,
    date: '2024/3/11',
    difficulty: 0,
    problems: 'Removing Digits',
    url: 'https://cses.fi/problemset/task/1637',
    resources: 'CSES',
  },
  {
    id: '0000011',
    solved: true,
    date: '2024/3/11',
    difficulty: 0,
    problems: 'Grid Paths',
    url: 'https://cses.fi/problemset/task/1638',
    resources: 'CSES',
  },
  {
    id: '0000010',
    solved: true,
    date: '2024/3/9',
    difficulty: 0,
    problems: 'Coin Combinations II',
    url: 'https://cses.fi/problemset/task/1636',
    resources: 'CSES',
  },
  {
    id: '0000009',
    solved: true,
    date: '2024/3/8',
    difficulty: 1400,
    problems: 'Torn Lucky Ticket (1895B)',
    url: 'https://codeforces.com/contest/1895/problem/C',
    resources: 'Codeforces',
  },
  {
    id: '0000008',
    solved: true,
    date: '2024/3/6',
    difficulty: 1400,
    problems: 'Add, Divide and Floor (1901C)',
    url: 'https://codeforces.com/contest/1901/problem/C',
    resources: 'Codeforces',
  },
  {
    id: '0000007',
    solved: true,
    date: '2024/3/5',
    difficulty: 1300,
    problems: 'Insert and Equalize (1902C)',
    url: 'https://codeforces.com/contest/1902/problem/C',
    resources: 'Codeforces',
  },
  {
    id: '0000006',
    solved: true,
    date: '2024/3/4',
    difficulty: 1300,
    problems: 'Closest Cities (1922C)',
    url: 'https://codeforces.com/contest/1922/problem/C',
    resources: 'Codeforces',
  },
  {
    id: '0000005',
    solved: true,
    date: '2024/3/4',
    difficulty: 1300,
    problems: 'Game with Multiset (1913C)',
    url: 'https://codeforces.com/contest/1913/problem/C',
    resources: 'Codeforces',
  },
  {
    id: '0000004',
    solved: true,
    date: '2024/3/2',
    difficulty: 1200,
    problems: 'Forming Triangles (1922B)',
    url: 'https://codeforces.com/contest/1922/problem/B',
    resources: 'Codeforces',
  },
  {
    id: '0000003',
    solved: false,
    date: '2024/3/1',
    difficulty: 1600,
    problems: 'Pho Restaurant (1938H)',
    url: 'https://codeforces.com/problemset/problem/1938/H',
    resources: 'Codeforces',
  },
  {
    id: '0000002',
    solved: true,
    date: '2024/2/29',
    difficulty: 0,
    problems: 'Movie Festival II',
    url: 'https://cses.fi/problemset/task/1632',
    resources: 'CSES',
  },
  {
    id: '0000001',
    solved: true,
    date: '2024/2/29',
    difficulty: 0,
    problems: 'Even Odd Tree (LC 1609)',
    url: 'https://leetcode.com/problems/even-odd-tree/description/',
    resources: 'Leetcode',
  },
]

export default codeforcesData

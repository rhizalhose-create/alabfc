const positionMeanings: { [key: number]: string } = {
  1: "Goalkeeper - The last line of defense 🧤",
  2: "Right Back - Defends the right flank",
  3: "Left Back - Defends the left flank",
  4: "Center Back / Defensive Midfielder - Versatile defender",
  5: "Center Back - Central defender",
  6: "Defensive Midfielder - Shields the defense",
  7: "Right Wing - Attacks from the right ⚡",
  8: "Center Midfielder - Controls the tempo",
  9: "Striker - Main goalscorer ⚽",
  10: "Playmaker - Creative attacker ⭐",
  11: "Left Wing - Attacks from the left",
};

const positionDetails: { [key: number]: { title: string; description: string; responsibilities: string[]; famousPlayers: string[] } } = {
  1: { title: "Goalkeeper (GK)", description: "The last line of defense, responsible for preventing the ball from entering the goal. The only player allowed to use hands within the penalty area.", responsibilities: ["Shot stopping and handling crosses", "Organizing the defensive line", "Distribution to start attacks", "One-on-one situations", "Commanding the penalty area"], famousPlayers: ["Manuel Neuer", "Alisson Becker", "Thibaut Courtois", "Ederson"] },
  2: { title: "Right Back (RB)", description: "Defends the right flank while also providing width in attack. Must balance defensive duties with overlapping runs.", responsibilities: ["Defending against left wingers", "Providing width in attack", "Delivering crosses into the box", "Tracking back quickly", "Supporting midfield buildup"], famousPlayers: ["Cafu", "Philipp Lahm", "Dani Carvajal", "Trent Alexander-Arnold"] },
  3: { title: "Left Back (LB)", description: "Defends the left flank with similar responsibilities to the right back. Often provides attacking width and crossing opportunities.", responsibilities: ["Defending against right wingers", "Overlapping runs in attack", "Delivering crosses with left foot", "Defensive positioning", "Building play from the back"], famousPlayers: ["Paolo Maldini", "Roberto Carlos", "Jordi Alba", "Andy Robertson"] },
  4: { title: "Center Back / Defensive Midfielder (CB/DM)", description: "Versatile defender who can play as a center back or shield the defense as a defensive midfielder. Reads the game well and breaks up opposition attacks.", responsibilities: ["Reading the game and intercepting passes", "Winning aerial duels", "Starting attacks from deep", "Covering for teammates", "Physical presence in both boxes"], famousPlayers: ["Sergio Ramos", "Nemanja Vidić", "Casemiro", "Franz Beckenbauer"] },
  5: { title: "Center Back (CB)", description: "Central defender focused on preventing goals, winning aerial battles, and organizing the defensive line. Usually the physical backbone of the team.", responsibilities: ["Man-marking opposition strikers", "Winning headers and tackles", "Organizing the offside trap", "Clearing dangerous balls", "Set-piece threat in attack"], famousPlayers: ["Virgil van Dijk", "Carles Puyol", "Giorgio Chiellini", "Fabio Cannavaro"] },
  6: { title: "Defensive Midfielder (DM)", description: "Shields the back four, breaks up opposition attacks, and distributes the ball simply. The link between defense and attack.", responsibilities: ["Breaking up opposition play", "Protecting the back line", "Simple but effective passing", "Covering for attacking fullbacks", "Tactical fouling when necessary"], famousPlayers: ["Claude Makélélé", "Sergio Busquets", "N'Golo Kanté", "Rodri"] },
  7: { title: "Right Wing (RW) ⚡", description: "Attacks from the right flank using pace, dribbling, and crossing ability. Often cuts inside onto stronger foot to shoot or create chances.", responsibilities: ["Taking on fullbacks 1v1", "Delivering crosses from wide areas", "Cutting inside to shoot", "Tracking back defensively", "Creating chances for strikers"], famousPlayers: ["Cristiano Ronaldo", "David Beckham", "Mohamed Salah", "Arjen Robben"] },
  8: { title: "Center Midfielder (CM)", description: "The engine room of the team, contributing to both attack and defense. Controls tempo, links play, and covers ground box-to-box.", responsibilities: ["Box-to-box running", "Linking defense and attack", "Winning second balls", "Supporting both phases", "Late runs into the box"], famousPlayers: ["Frank Lampard", "Steven Gerrard", "Luka Modrić", "Kevin De Bruyne"] },
  9: { title: "Striker (ST) ⚽", description: "The main goalscorer, responsible for finishing chances and holding up play. Leads the line and occupies center backs.", responsibilities: ["Scoring goals", "Holding up the ball", "Pressing defenders", "Making intelligent runs", "Bringing teammates into play"], famousPlayers: ["Ronaldo Nazário", "Robert Lewandowski", "Thierry Henry", "Erling Haaland"] },
  10: { title: "Playmaker (CAM) ⭐", description: "The creative hub, operating between midfield and attack. Provides killer passes, dribbles past defenders, and scores goals.", responsibilities: ["Creating chances for others", "Dribbling past defenders", "Scoring from distance", "Finding spaces between lines", "Set-piece delivery"], famousPlayers: ["Lionel Messi", "Diego Maradona", "Zinedine Zidane", "Pelé"] },
  11: { title: "Left Wing (LW)", description: "Attacks from the left flank, using pace and trickery. Often cuts inside onto stronger foot or goes to the byline for crosses.", responsibilities: ["Beating fullbacks 1v1", "Drifting inside to shoot", "Providing width in attack", "Creating crossing opportunities", "Pressing opposition fullbacks"], famousPlayers: ["Neymar Jr.", "Ryan Giggs", "Sadio Mané", "Vinícius Júnior"] },
};

export { positionMeanings, positionDetails };

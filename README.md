# MindLeague MVP - University Battle Platform

# Authors/Collaborators

// Add github to the right

Devajsinh Solanki 

Varnika Yadav

Anusha Agarwal

Anant Patel

## Core MVP Features (Must-Have)

### 1. **Authentication System**

- Guest mode (no registration, limited tracking)
- Simple email/password login
- Basic profile (username, affiliated university)

### 2. **Battle Setup**

- **Mode Selection:**
    - Anonymous Mode: Random university opponent
    - Challenge Mode: Select specific university to battle
- **Subject Filter:** Math OR CS (toggle selection)
- **Difficulty Levels:** 3 tiers (Easy/Medium/Hard)

### 3. **Question Engine**

- 3 questions per round
- Timer for each question (30-90 seconds based on difficulty)
- Question bank with:
    - Math problems (algebra, calculus, discrete math)
    - CS problems (algorithms, data structures, logic)
    - Difficulty tier tagging

### 4. **Scoring System**

Calculate performance on:

- **Accuracy:** Correct answers (50% weight)
- **Speed:** Time to answer (30% weight)
- **Difficulty Tier:** Bonus points for harder questions (20% weight)

### 5. **Results Screen**

- Your score vs. opponent university's average
- Percentile rank: "You outperformed X% of students from [University]"
- Breakdown by accuracy/speed/difficulty
- Option to play again

### 6. **Basic Leaderboard**

- Top 10 universities by win rate
- Your university's current rank
- Simple stats (battles won, average score)

---

## Side Features (Nice-to-Have)

### Phase 2 Enhancements

**Global Heat Map** 🗺️

- Live world map visualization
- University challenge frequency (color intensity)
- Current dominant university highlighted
- Real-time battle counter

**Enhanced Analytics**

- Personal performance history
- Subject-specific strengths/weaknesses
- Battle replay feature
- Detailed university vs. university matchup history

**Social Features**

- Share results on social media
- Friend challenges (invite specific users)
- University team rooms/chat
- Weekly tournaments

**Gamification**

- Achievement badges
- Streak tracking
- Unlock harder question tiers
- University pride points/seasonal rankings

**Advanced Question Features**

- Explanation after wrong answers
- Difficulty adapts to performance
- Mixed Math+CS rounds
- User-submitted questions (moderated)

---

## MVP Tech Stack Recommendation

**Frontend:** React.js with Tailwind CSS
**Backend:** Node.js/Express or Python/Flask
**Database:** PostgreSQL (user data, scores) + MongoDB (question bank)
**Real-time:** Socket.io (for live leaderboard updates)
**Hosting:** Vercel (frontend) + Railway/Render (backend)

## Demo Pitch Highlights

**For Judges:**

- "Live visualization of global university competition"
- "Anonymous battles reduce bias - pure skill competition"
- "Gamified learning that builds university pride"
- Show heat map pulsing with activity (even if seeded data initially)
- Real percentile comparison creates competitive motivation

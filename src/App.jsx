import './App.css'
import forgeBackground from './assets/ChatGPT Image Jul 30, 2026, 12_54_05 PM.png'
import forgeCopy from './assets/ChatGPT Image Jul 30, 2026, 12_58_17 PM.png'

const Arrow = () => <span className="arrow" aria-hidden="true">›</span>

function App() {
  return (
    <main className="landing-page">
      <img className="background-art" src={forgeBackground} alt="" />
      <div className="atmosphere" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Soulforge home"><span className="brand-mark">✧</span><span>SOULFORGE</span></a>
        <nav aria-label="Main navigation">
          <a href="#game">Game</a><a href="#features">Features</a><a href="#media">Media</a><a href="#community">Community</a><a href="#about">About</a>
        </nav>
        <a className="nav-cta" href="#play">Play now <Arrow /></a>
      </header>
      <section className="hero" id="top">
        <img className="copy-art" src={forgeCopy} alt="Die. Bank. Forge again. Forge your legend." />
        <div className="hero-actions" id="play"><a className="button primary" href="#community">Play now <Arrow /></a><a className="button ghost" href="#media">Watch trailer <span className="play-icon">▶</span></a></div>
      </section>
      <section className="feature-strip" id="features" aria-label="Game features">
        <article><span className="feature-icon skull">☠</span><div><h2>Roguelite</h2><p>Every run<br />is unique</p></div></article>
        <article><span className="feature-icon">⚔</span><div><h2>Brutal combat</h2><p>Skill, timing,<br />or die trying</p></div></article>
        <article><span className="feature-icon anvil">♨</span><div><h2>Forge &amp; upgrade</h2><p>Turn souls into<br />power</p></div></article>
      </section>
      <div className="bottom-bar"><a className="scroll-cue" href="#features">Scroll to descend <span>⌄</span></a></div>
    </main>
  )
}
export default App

export default function Home() {
  return (
    <div>
      <main>
        <header>
          <h1>Savings Tracker</h1>
          <button>+ New Goal</button>
        </header>
        <section>
          <div>
            <h1>Total savings</h1>
            <p>£11,249.00</p>
          </div>
          <div>
            <h1>Active goals</h1>
            <p>7</p>
          </div>
          <div>
            <h1>Goals completed</h1>
            <p>2</p>
          </div>
          <div>
            <h1>Monthly deposits</h1>
            <div>Chart will display here</div>
          </div>
        </section>
        <section>
          <h1>Your goals</h1>
          <button>Filters</button>
          <button>Sort by</button>
          <div>
            <h1>Macbook Pro M4</h1>
            <p>76%</p>
            <progress value="70" max="100"></progress>
            <p>£1,900 of £2,499</p>
            <p>Due 1 Jun 2026</p>
          </div>
          <div>
            <h1>Mechanical Keyboard</h1>
            <span>Completed</span>
            <p>100%</p>
            <progress value="100" max="100"></progress>
            <p>£350 of £350</p>
            <p>Due 15 March 2026</p>
          </div>
          <div>
            <h1>React Conf Trip</h1>
            <p>72%</p>
            <progress value="72" max="100"></progress>
            <p>£1,299 of £1,800</p>
            <p>Due 15 May 2026</p>
          </div>
          <div>
            <h1>Anniversary Trip to Italy</h1>
            <p>60%</p>
            <progress value="60" max="100"></progress>
            <p>£2,400 of £4,000</p>
            <p>Due 15 Sep 2026</p>
          </div>
          <div>
            <h1>4K Monitor Upgrade</h1>
            <p>75%</p>
            <progress value="75" max="100"></progress>
            <p>£450 of £600</p>
            <p>Due 30 Apr 2026</p>
          </div>
          <div>
            <h1>Emergency Fund</h1>
            <p>80%</p>
            <progress value="80" max="100"></progress>
            <p>£4,000 of £5,000</p>
            <p>No deadline</p>
          </div>
          <div>
            <h1>New Road Bike</h1>
            <p>57%</p>
            <progress value="57" max="100"></progress>
            <p>£850 of £1,500</p>
            <p>Due 1 May 2026</p>
          </div>
          <div>
            <h1>Ergonomic Chair</h1>
            <p>0%</p>
            <progress value="0" max="100"></progress>
            <p>£0 of £1,200</p>
            <p>Due 1 Aug 2026</p>
          </div>
        </section>
      </main>
    </div>
  );
}

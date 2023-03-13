import gitLogo from '../assets/img/github_logo.png';
import monster from '../assets/img/test.webp';
import ReplanishData from './API/Fetch';

// const repoInfo = []

const repoInfo  = await ReplanishData("repo");
 function RepoCard() {
  return (
      <label className="card">
        <input type="checkbox" name="open" id="open" />
        <header>
            <h4>Name</h4>
            <img src={gitLogo} alt="Github Logo" />
        </header>

        {/* coding langueage */}
        <aside>
            <div></div>
            <div></div>
            <div></div>
        </aside>

        <div>
            <img src={monster} alt="" />
        </div>

        <figcaption>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida lacinia urna id elementum. Aliquam nibh nisi, imperdiet sit amet lectus quis, accumsan vestibulum odio. Praesent pharetra augue et dui feugiat, vel dictum dui auctor. Duis sem tortor, tincidunt sit amet lacus finibus
        </figcaption>

        <footer>
            <p>26-04-1999</p>
            <p>&#xA9; Web Development, David Customs</p>
            {/* datum */}
        </footer>
    </label>
  )
}

export { RepoCard }

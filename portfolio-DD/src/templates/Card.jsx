import gitLogo from '../assets/img/github_logo.png';
import monster from '../assets/img/test.webp';


function RepoCard(card) {
    let repoDescription;

    if (card.data.description != null) {
        repoDescription = card.data.description;
    } else {
        repoDescription = "There is no description for this repo...";
    }

    return (
        <label className="card" data-value={card.data.id}>
            <input type="radio" name="card" id="open"/>
            <header>
                <h4>{card.data.name}</h4>
                <img src={gitLogo} alt="Github Logo" />
            </header>

            <div>
                {/* coding langueage */}
                <p>{card.data.language}</p>
                <aside>
                    <div></div>
                    <div></div>
                    <div></div>
                </aside>
            </div>

            <div>
                <img src={monster} alt="" />
            </div>

            <figcaption>{repoDescription}</figcaption>

            <footer>
                <p>&#xA9; Web Development, David Customs</p>
            </footer>
        </label>
    )
}

export { RepoCard }

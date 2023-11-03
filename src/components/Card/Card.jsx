import styles from './card.module.scss'

const RepoCard = (card) => {
    let repoDescription;

    if (card.data.description != null) {
        repoDescription = card.data.description;
    } else {
        repoDescription = "There is no description for this repo...";
    }

    card.data.language = card.data.description != null ? "No Language" : repoDescription = "There is no description for this repo...";
    return (
        <label className={styles.card} data-value={card.data.id}>
            <input type="radio" name="card" id="open"/>
            <header>
                <h4>{card.data.name}</h4>
                <img src='/images/github_logo.png' alt="Github Logo" />
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
                <img src='/images/monster.webp' alt="A YugGio Charcater" />
            </div>

            <figcaption>{repoDescription}</figcaption>

            <footer>
                <p>&#xA9; Web Development, David Customs</p>
            </footer>
        </label>
    )
}

export default RepoCard;
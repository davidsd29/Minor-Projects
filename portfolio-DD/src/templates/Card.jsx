function RepoCard() {

  return (
    <div className="card">
        <header>
            <h4>Name</h4>
            <img src="./" alt="" />
            <img src="../assets/img/github_logo" alt="Github Logo" />
        </header>

        {/* coding langueage */}
        <aside>
            <div></div>
            <div></div>
            <div></div>
        </aside>

        <img src="../assets/img/github_logo" alt="Github Logo" />

        <figcaption>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida lacinia urna id elementum. Aliquam nibh nisi, imperdiet sit amet lectus quis, accumsan vestibulum odio. Praesent pharetra augue et dui feugiat, vel dictum dui auctor. Duis sem tortor, tincidunt sit amet lacus finibus
        </figcaption>

        <footer>
            <p>26-04-1999</p>
            <p>&#xA9; Web Development, David Customs</p>
            {/* datum */}
        </footer>
      
    </div>
  )
}

export { RepoCard }
